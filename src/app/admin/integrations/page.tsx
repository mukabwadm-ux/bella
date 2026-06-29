import IntegrationsManager from "@/components/admin/IntegrationsManager";
import { Zap } from "lucide-react";

export const metadata = { title: "Integrations" };

export default function IntegrationsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#0B3D2E]/10 flex items-center justify-center">
          <Zap size={20} className="text-[#0B3D2E]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Integrations</h1>
          <p className="text-sm text-gray-500">Connect Google Analytics, Search Console, Ads, and Mailchimp</p>
        </div>
      </div>
      <IntegrationsManager />
    </div>
  );
}
