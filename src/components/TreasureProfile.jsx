import { useEffect, useRef } from "react";

function TreasureProfile() {
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
        event.data.iframeId === "treasure-embed-profile-bktcgshow"
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
    <section className="bg-white px-6 py-20 text-[#2A1E68]">
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="mb-10 text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFA500]">
            Upcoming Shows
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Find BKTCG On Treasure
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#2A1E68]/70">
            Browse upcoming BKTCG events, ticket information, and show
            details directly through Treasure.
          </p>
        </div>

        {/* TREASURE EMBED */}
        <div className="overflow-hidden rounded-3xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-2 shadow-[0_15px_40px_rgba(0,0,0,.12)] md:p-4">
          <iframe
            ref={iframeRef}
            id="treasure-embed-profile-bktcgshow"
            src="https://www.ontreasure.com/u/bktcgshow/embed?iframeId=treasure-embed-profile-bktcgshow"
            title="BKTCG Treasure Profile"
            loading="lazy"
            allow="fullscreen; payment"
            sandbox="allow-same-origin allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox"
            className="w-full rounded-2xl border-0"
            style={{
              height: "500px",
              padding: 0,
            }}
          />
        </div>

        <p className="mt-5 text-center text-sm text-[#2A1E68]/50">
          Event information powered by Treasure
        </p>
      </div>
    </section>
  );
}

export default TreasureProfile;