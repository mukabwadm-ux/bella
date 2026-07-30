"use client";
import { useEffect } from "react";

export default function SafariBookingsWidget() {
  useEffect(() => {
    if (document.getElementById("sb-widget-script")) return;
    const sb = document.createElement("script");
    sb.id = "sb-widget-script";
    sb.type = "text/javascript";
    sb.async = true;
    sb.src = "https://s3.amazonaws.com/z_437er23a/82a4193c0.js";
    document.body.appendChild(sb);
  }, []);

  return (
    <div className="absolute bottom-6 left-6 z-10">
      <div
        dangerouslySetInnerHTML={{
          __html: `<div style="display:inline-block;float:left;padding:0 10px 5px 0"><span class="7a97a4193d140">&nbsp;</span></div>`,
        }}
      />
    </div>
  );
}
