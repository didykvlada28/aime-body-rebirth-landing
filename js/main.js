(function () {
  "use strict";

  // ─── Configuration ───────────────────────────────────────────────
  // Replace with your AIMIE WhatsApp number (international format, no + or spaces)
  var WHATSAPP_NUMBER = "35799123456";

  var DEFAULT_MESSAGE =
    "Hi, I'm interested in AIMIE Body Rebirth Ritual. Can you tell me more and help me book?";

  // ─── UTM & click-id preservation ─────────────────────────────────
  function getTrackingParams() {
    var params = new URLSearchParams(window.location.search);
    var keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
      "gclid",
    ];
    var tracking = {};
    keys.forEach(function (key) {
      var val = params.get(key);
      if (val) tracking[key] = val;
    });
    return tracking;
  }

  function getWhatsAppMessage() {
    if (window.AIMIE_I18N && typeof window.AIMIE_I18N.t === "function") {
      return window.AIMIE_I18N.t("wa.message") || DEFAULT_MESSAGE;
    }
    return DEFAULT_MESSAGE;
  }

  function buildWhatsAppUrl(message) {
    var text = message || getWhatsAppMessage();
    var tracking = getTrackingParams();
    var utmKeys = Object.keys(tracking).filter(function (k) {
      return k.indexOf("utm_") === 0;
    });
    if (utmKeys.length) {
      var utmSummary = utmKeys
        .map(function (k) {
          return k.replace("utm_", "") + ": " + tracking[k];
        })
        .join(", ");
      text += " [" + utmSummary + "]";
    }
    return (
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(text)
    );
  }

  // ─── Conversion tracking ─────────────────────────────────────────
  function trackWhatsAppClick(location) {
    var eventData = {
      event: "lead",
      cta_location: location,
      page: "body_rebirth_ritual",
      tracking: getTrackingParams(),
    };

    if (typeof gtag === "function") {
      gtag("event", "generate_lead", {
        method: "whatsapp",
        cta_location: location,
      });
    }

    if (typeof fbq === "function") {
      fbq("track", "Lead", {
        content_name: "Body Rebirth Ritual",
        cta_location: location,
      });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);

    if (typeof console !== "undefined" && console.debug) {
      console.debug("[AIMIE] Lead tracked (WhatsApp):", eventData);
    }
  }

  function handleWhatsAppClick(e) {
    e.preventDefault();
    var link = e.currentTarget;
    var location = link.getAttribute("data-cta") || "unknown";
    var url = buildWhatsAppUrl(getWhatsAppMessage());
    trackWhatsAppClick(location);
    window.setTimeout(function () {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 200);
  }

  function refreshWhatsAppLinks() {
    var message = getWhatsAppMessage();
    document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
      link.href = buildWhatsAppUrl(message);
    });
  }

  // ─── Bind WhatsApp links ─────────────────────────────────────────
  function initWhatsAppLinks() {
    var links = document.querySelectorAll("[data-whatsapp]");
    links.forEach(function (link) {
      link.href = buildWhatsAppUrl();
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.addEventListener("click", handleWhatsAppClick);
    });
    document.addEventListener("aimie:langchange", refreshWhatsAppLinks);
  }

  // ─── Boot ────────────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initWhatsAppLinks();
    });
  } else {
    initWhatsAppLinks();
  }
})();
