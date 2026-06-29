"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, ExternalLink, Save, Loader2, ChevronDown } from "lucide-react";

type Settings = Record<string, string>;

interface IntegrationField {
  key: string;
  label: string;
  placeholder: string;
  hint: string;
  type?: "text" | "password" | "textarea";
  rows?: number;
}

interface Integration {
  key: string;
  label: string;
  description: string;
  docsUrl?: string;
  color: string;
  logo: React.ReactNode;
  fields: IntegrationField[];
}

const GA_LOGO = (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="4" fill="#E37400" />
    <rect x="4" y="14" width="4" height="6" rx="1" fill="white" />
    <rect x="10" y="9" width="4" height="11" rx="1" fill="white" opacity="0.85" />
    <rect x="16" y="4" width="4" height="16" rx="1" fill="white" opacity="0.7" />
  </svg>
);

const GSC_LOGO = (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="4" fill="#4285F4" />
    <path d="M12 6L6 18h3l1.5-3.5h3L15 18h3L12 6z" fill="white" />
  </svg>
);

const GADS_LOGO = (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="4" fill="#1A73E8" />
    <circle cx="8" cy="12" r="3.5" stroke="white" strokeWidth="2" />
    <circle cx="16" cy="12" r="3.5" stroke="white" strokeWidth="2" />
    <path d="M11.5 12h1" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CUSTOM_CODE_LOGO = (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="4" fill="#1e293b" />
    <path d="M8 8L4 12l4 4" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 8l4 4-4 4" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6l-4 12" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const MAILCHIMP_LOGO = (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="4" fill="#FFE01B" />
    <path d="M12 5c-2.5 0-4.5 1.5-4.5 4 0 1.2.5 2.2 1.3 2.9C8.3 12.5 8 13.2 8 14c0 1.7 1.8 3 4 3s4-1.3 4-3c0-.8-.3-1.5-.8-2.1.8-.7 1.3-1.7 1.3-2.9C16.5 6.5 14.5 5 12 5z" fill="#1F1F1F" />
    <circle cx="10.5" cy="11" r="1" fill="white" />
    <circle cx="13.5" cy="11" r="1" fill="white" />
  </svg>
);

const INTEGRATIONS: Integration[] = [
  {
    key: "google_analytics",
    label: "Google Analytics 4",
    description: "Track visitor behaviour, page views, conversions and traffic sources across your website.",
    docsUrl: "https://analytics.google.com",
    color: "bg-orange-50 border-orange-200",
    logo: GA_LOGO,
    fields: [
      {
        key: "ga4_measurement_id",
        label: "Measurement ID",
        placeholder: "G-XXXXXXXXXX",
        hint: "Find this in GA4 → Admin → Data Streams → your web stream → Measurement ID",
      },
    ],
  },
  {
    key: "google_search_console",
    label: "Google Search Console",
    description: "Monitor your site's search performance, index status, and verify ownership with Google.",
    docsUrl: "https://search.google.com/search-console",
    color: "bg-blue-50 border-blue-200",
    logo: GSC_LOGO,
    fields: [
      {
        key: "gsc_verification_code",
        label: "HTML Tag Verification Code",
        placeholder: "abc123xyz...",
        hint: 'In Search Console → Add Property → "HTML tag" method → copy only the content="..." value (not the full tag)',
      },
    ],
  },
  {
    key: "google_ads",
    label: "Google Ads",
    description: "Track ad conversions and link your paid search campaigns to website actions.",
    docsUrl: "https://ads.google.com",
    color: "bg-blue-50 border-blue-200",
    logo: GADS_LOGO,
    fields: [
      {
        key: "google_ads_id",
        label: "Conversion Tracking ID",
        placeholder: "AW-XXXXXXXXXX",
        hint: "Google Ads → Tools & Settings → Measurement → Conversions → Global site tag",
      },
      {
        key: "google_ads_conversion_label",
        label: "Conversion Label (optional)",
        placeholder: "xXxXxXxXxXxX",
        hint: "The conversion label from your primary conversion action. Leave blank to track page views only.",
      },
    ],
  },
  {
    key: "mailchimp",
    label: "Mailchimp",
    description: "Sync enquiries and contact form submissions to a Mailchimp audience for email marketing.",
    docsUrl: "https://mailchimp.com",
    color: "bg-yellow-50 border-yellow-200",
    logo: MAILCHIMP_LOGO,
    fields: [
      {
        key: "mailchimp_api_key",
        label: "API Key",
        placeholder: "abc123def456...-us1",
        hint: "Mailchimp → Account → Extras → API Keys → Create A Key",
        type: "password",
      },
      {
        key: "mailchimp_list_id",
        label: "Audience (List) ID",
        placeholder: "a1b2c3d4e5",
        hint: "Mailchimp → Audience → Settings → Audience name and defaults → Audience ID",
      },
      {
        key: "mailchimp_server_prefix",
        label: "Server Prefix",
        placeholder: "us1",
        hint: "The prefix in your API key after the dash (e.g. us1, us2, us6)",
      },
    ],
  },
  {
    key: "custom_code",
    label: "Custom Code",
    description: "Inject custom HTML, scripts, or styles into the site's <head> or before </body>. Useful for chat widgets, cookie banners, heatmaps, or any third-party snippet.",
    color: "bg-slate-50 border-slate-200",
    logo: CUSTOM_CODE_LOGO,
    fields: [
      {
        key: "custom_head_code",
        label: "Head Code",
        placeholder: "<!-- Paste your <script>, <style>, or <meta> snippets here -->",
        hint: "Injected inside <head> on every page. Use for meta tags, preload hints, or scripts that must load early.",
        type: "textarea",
        rows: 6,
      },
      {
        key: "custom_body_code",
        label: "Body Code (end of page)",
        placeholder: "<!-- Paste chat widgets, analytics snippets, or other scripts here -->",
        hint: "Injected just before </body> on every page. Recommended for chat widgets, heatmaps, and deferred scripts.",
        type: "textarea",
        rows: 6,
      },
    ],
  },
];

function isConfigured(settings: Settings, integration: Integration) {
  const primaryKey = integration.fields[0].key;
  return !!(settings[primaryKey] && settings[primaryKey].trim() !== "");
}

export default function IntegrationsManager() {
  const [settings, setSettings] = useState<Settings>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/integrations")
      .then((r) => r.json())
      .then((d) => {
        setSettings(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function saveIntegration(integration: Integration) {
    setSaving(integration.key);
    setErrors((e) => ({ ...e, [integration.key]: "" }));

    const payload: Settings = {};
    for (const field of integration.fields) {
      payload[field.key] = settings[field.key] ?? "";
    }

    try {
      const res = await fetch("/api/admin/integrations", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Save failed");
      }
      setSaved(integration.key);
      setTimeout(() => setSaved(null), 3000);
    } catch (err: unknown) {
      setErrors((e) => ({
        ...e,
        [integration.key]: err instanceof Error ? err.message : "Save failed",
      }));
    } finally {
      setSaving(null);
    }
  }

  function updateField(key: string, value: string) {
    setSettings((s) => ({ ...s, [key]: value }));
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={24} className="animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-4">
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Connect third-party services to your website. Keys are stored securely in the database and injected automatically.
        </p>
      </div>

      {INTEGRATIONS.map((integration) => {
        const configured = isConfigured(settings, integration);
        const isOpen = expanded === integration.key;

        return (
          <div
            key={integration.key}
            className={`rounded-2xl border bg-white overflow-hidden transition-shadow ${
              isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"
            }`}
          >
            {/* Header row */}
            <button
              className="w-full flex items-center gap-4 px-6 py-4 text-left"
              onClick={() => setExpanded(isOpen ? null : integration.key)}
            >
              <div className="flex-shrink-0">{integration.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-semibold text-gray-900 text-sm">{integration.label}</h3>
                  {configured ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                      <CheckCircle size={11} /> Connected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      <AlertCircle size={11} /> Not configured
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed hidden sm:block">
                  {integration.description}
                </p>
              </div>
              <ChevronDown
                size={16}
                className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Expanded settings */}
            {isOpen && (
              <div className="border-t border-gray-100 px-6 py-5 bg-gray-50/50">
                <p className="text-xs text-gray-500 mb-4 sm:hidden">{integration.description}</p>

                <div className="space-y-4">
                  {integration.fields.map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          value={settings[field.key] ?? ""}
                          onChange={(e) => updateField(field.key, e.target.value)}
                          placeholder={field.placeholder}
                          rows={field.rows ?? 5}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20 focus:border-[#0B3D2E] transition-colors bg-white resize-y"
                          spellCheck={false}
                        />
                      ) : (
                        <input
                          type={field.type ?? "text"}
                          value={settings[field.key] ?? ""}
                          onChange={(e) => updateField(field.key, e.target.value)}
                          placeholder={field.placeholder}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20 focus:border-[#0B3D2E] transition-colors bg-white"
                          autoComplete="off"
                        />
                      )}
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{field.hint}</p>
                    </div>
                  ))}
                </div>

                {errors[integration.key] && (
                  <p className="mt-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {errors[integration.key]}
                  </p>
                )}

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  {integration.docsUrl ? (
                    <a
                      href={integration.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D98200] hover:text-[#c07300] flex items-center gap-1 font-medium transition-colors"
                    >
                      Open {integration.label} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span />
                  )}
                  <button
                    onClick={() => saveIntegration(integration)}
                    disabled={saving === integration.key}
                    className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#002800] disabled:opacity-60 text-white font-semibold text-xs px-4 py-2 rounded-full transition-colors"
                  >
                    {saving === integration.key ? (
                      <><Loader2 size={13} className="animate-spin" /> Saving…</>
                    ) : saved === integration.key ? (
                      <><CheckCircle size={13} /> Saved!</>
                    ) : (
                      <><Save size={13} /> Save</>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-6">
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>After saving:</strong> Changes to GA4 and Google Search Console take effect on the next deployment or within 1 hour (the site caches integration settings). Mailchimp API keys are used server-side only and are never exposed to the browser.
        </p>
      </div>
    </div>
  );
}
