import { useEffect, useRef } from "react";

function TreasureVenueMap() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    const sendHostViewport = () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            type: "treasure:host-viewport",
            height: window.innerHeight,
          },
          "https://www.ontreasure.com"
        );
      }
    };

    const handleMessage = (event) => {
      if (
        event.origin !== "https://www.ontreasure.com" ||
        !event.data ||
        typeof event.data !== "object"
      ) {
        return;
      }

      if (
        event.data.height &&
        event.data.iframeId ===
          "treasure-embed-map-octobers-bk-tcg-show-10252026"
      ) {
        const height = Math.max(
          parseInt(event.data.height, 10),
          10
        );

        iframe.style.height = `${height}px`;
      }

      if (
        event.source === iframe.contentWindow &&
        event.data.type === "treasure:request-host-viewport"
      ) {
        sendHostViewport();
      }
    };

    iframe.addEventListener("load", sendHostViewport);
    window.addEventListener("message", handleMessage);

    return () => {
      iframe.removeEventListener("load", sendHostViewport);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#4FCBFF]/20 bg-white shadow-lg">
      <iframe
        ref={iframeRef}
        id="treasure-embed-map-octobers-bk-tcg-show-10252026"
        src="https://www.ontreasure.com/events/octobers-bk-tcg-show-10252026/venue-map?iframeId=treasure-embed-map-octobers-bk-tcg-show-10252026"
        title="October BKTCG Show Vendor Map"
        loading="lazy"
        allow="fullscreen; payment"
        sandbox="allow-same-origin allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox"
        className="w-full border-0"
        style={{
          height: "500px",
          padding: 0,
        }}
      />
    </div>
  );
}

export default TreasureVenueMap;