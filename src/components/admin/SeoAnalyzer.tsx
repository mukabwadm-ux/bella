"use client";
import { useMemo } from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Props {
  title: string;
  metaDescription: string;
  focusKeyword: string;
  content: string;
  excerpt: string;
}

interface Check {
  label: string;
  pass: boolean;
  warn?: boolean;
  detail: string;
}

export default function SeoAnalyzer({ title, metaDescription, focusKeyword, content, excerpt }: Props) {
  const analysis = useMemo(() => {
    const kw = focusKeyword.toLowerCase().trim();
    const contentText = content.replace(/<[^>]+>/g, " ").toLowerCase();
    const wordCount = contentText.split(/\s+/).filter(Boolean).length;

    const kwOccurrences = kw
      ? (contentText.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) ?? []).length
      : 0;
    const kwDensity = wordCount > 0 ? (kwOccurrences / wordCount) * 100 : 0;

    const links = (content.match(/<a\s/gi) ?? []).length;
    const images = (content.match(/<img\s/gi) ?? []).length;
    const hasH2 = /<h2/i.test(content);

    const checks: Check[] = [
      {
        label: "Focus keyword set",
        pass: kw.length > 0,
        detail: kw ? `Keyword: "${focusKeyword}"` : "No focus keyword entered",
      },
      {
        label: "Keyword in page title",
        pass: kw ? title.toLowerCase().includes(kw) : false,
        warn: !kw,
        detail: kw
          ? title.toLowerCase().includes(kw)
            ? "✓ Keyword found in title"
            : "Keyword not found in title"
          : "Set a focus keyword first",
      },
      {
        label: "Title length (50–60 chars)",
        pass: title.length >= 50 && title.length <= 60,
        warn: title.length > 0 && (title.length < 30 || title.length > 70),
        detail: title.length > 0 ? `${title.length} characters` : "No title",
      },
      {
        label: "Meta description set",
        pass: metaDescription.length >= 120 && metaDescription.length <= 160,
        warn: metaDescription.length > 0 && (metaDescription.length < 120 || metaDescription.length > 160),
        detail: metaDescription.length > 0 ? `${metaDescription.length} chars (ideal: 150–160)` : "Not set",
      },
      {
        label: "Keyword in meta description",
        pass: kw ? metaDescription.toLowerCase().includes(kw) : false,
        warn: !kw,
        detail: kw
          ? metaDescription.toLowerCase().includes(kw)
            ? "✓ Keyword found"
            : "Keyword not in meta description"
          : "Set a focus keyword first",
      },
      {
        label: "Content length (300+ words)",
        pass: wordCount >= 300,
        warn: wordCount > 0 && wordCount < 300,
        detail: `${wordCount} words`,
      },
      {
        label: "Keyword density (1–3%)",
        pass: kw ? kwDensity >= 1 && kwDensity <= 3 : false,
        warn: kw ? (kwDensity < 1 || kwDensity > 3) : true,
        detail: kw ? `${kwDensity.toFixed(1)}% density (${kwOccurrences}× in ${wordCount} words)` : "Set a focus keyword",
      },
      {
        label: "Uses subheadings (H2)",
        pass: hasH2,
        detail: hasH2 ? "H2 headings found" : "No H2 headings detected",
      },
      {
        label: "Contains links",
        pass: links > 0,
        warn: links === 0,
        detail: links > 0 ? `${links} link${links !== 1 ? "s" : ""} found` : "No links in content",
      },
      {
        label: "Contains images",
        pass: images > 0,
        warn: images === 0,
        detail: images > 0 ? `${images} image${images !== 1 ? "s" : ""} found` : "No images in content",
      },
    ];

    const passed = checks.filter((c) => c.pass).length;
    const score = Math.round((passed / checks.length) * 100);
    const rating: "green" | "amber" | "red" = score >= 80 ? "green" : score >= 50 ? "amber" : "red";

    return { checks, score, rating, wordCount, kwDensity };
  }, [title, metaDescription, focusKeyword, content, excerpt]);

  const ratingColors = {
    green: { bg: "bg-green-50", text: "text-green-700", bar: "bg-green-500" },
    amber: { bg: "bg-yellow-50", text: "text-yellow-700", bar: "bg-yellow-400" },
    red: { bg: "bg-red-50", text: "text-red-700", bar: "bg-red-500" },
  };
  const colors = ratingColors[analysis.rating];

  return (
    <div className="space-y-4">
      {/* Score */}
      <div className={`${colors.bg} rounded-xl p-4`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-bold ${colors.text}`}>SEO Score</span>
          <span className={`text-2xl font-bold ${colors.text}`}>{analysis.score}/100</span>
        </div>
        <div className="h-2 bg-white/60 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${colors.bar}`}
            style={{ width: `${analysis.score}%` }}
          />
        </div>
        <p className={`text-xs mt-2 ${colors.text} opacity-80`}>
          {analysis.score >= 80
            ? "Good SEO — your content is well-optimised."
            : analysis.score >= 50
            ? "Average SEO — a few improvements will make a difference."
            : "Needs improvement — work through the checklist below."}
        </p>
      </div>

      {/* Checks */}
      <div className="space-y-2">
        {analysis.checks.map((check) => {
          const Icon = check.pass ? CheckCircle : check.warn ? AlertCircle : XCircle;
          const color = check.pass
            ? "text-green-500"
            : check.warn
            ? "text-yellow-500"
            : "text-red-400";
          return (
            <div key={check.label} className="flex items-start gap-2.5 text-xs">
              <Icon size={14} className={`${color} flex-shrink-0 mt-0.5`} />
              <div>
                <span className={`font-semibold ${check.pass ? "text-gray-700" : "text-gray-500"}`}>
                  {check.label}
                </span>
                <span className="text-gray-400 ml-1.5">— {check.detail}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-gray-900">{analysis.wordCount}</p>
          <p className="text-xs text-gray-500">Words</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-gray-900">{Math.ceil(analysis.wordCount / 200)}</p>
          <p className="text-xs text-gray-500">Min read</p>
        </div>
      </div>
    </div>
  );
}
