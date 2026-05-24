(function () {
  "use strict";

  // ─── Configuration ───────────────────────────────────────────────
  // Replace with your AIMIE WhatsApp number (international format, no + or spaces)
  var WHATSAPP_NUMBER = "35799123456";

  // Meta Pixel ID — replace with your actual pixel ID
  var META_PIXEL_ID = "YOUR_META_PIXEL_ID";

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
      event: "whatsapp_click",
      cta_location: location,
      page: "body_rebirth_ritual",
      tracking: getTrackingParams(),
    };

    // Google Analytics 4 (gtag)
    if (typeof gtag === "function") {
      gtag("event", "whatsapp_click", {
        cta_location: location,
        send_to: "AW-CONVERSION / GA4",
      });
      gtag("event", "generate_lead", {
        method: "whatsapp",
        cta_location: location,
      });
    }

    // Meta Pixel
    if (typeof fbq === "function") {
      fbq("track", "Contact", { content_name: "Body Rebirth Ritual", cta_location: location });
      fbq("trackCustom", "WhatsAppClick", { cta_location: location });
    }

    // dataLayer for GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);

    if (typeof console !== "undefined" && console.debug) {
      console.debug("[AIMIE] WhatsApp click tracked:", eventData);
    }
  }

  function handleWhatsAppClick(e) {
    var link = e.currentTarget;
    var location = link.getAttribute("data-cta") || "unknown";
    trackWhatsAppClick(location);
    link.href = buildWhatsAppUrl(getWhatsAppMessage());
  }

  // ─── Init Meta Pixel (placeholder) ───────────────────────────────
  if (META_PIXEL_ID && META_PIXEL_ID !== "YOUR_META_PIXEL_ID") {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");
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
