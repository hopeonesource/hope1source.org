// Progressive enhancement only. Keep visible direct links for asynchronous vendor failures.
export function installEveryDonate(window, document) {
  "use strict";
  if (window.__h1sEveryDonateInstalled) return;
  window.__h1sEveryDonateInstalled = true;

  var H1S_DONATE_OPTIONS = {
    nonprofitSlug: "hope-with-love",
    defaultFrequency: "monthly",
    addAmounts: [50, 100, 250],
    requireShareInfo: true,
    primaryColor: "#c94b2c"
  };
  var ready = false;
  var widget = document.getElementById("h1s-every-widget");
  if (!widget) {
    widget = document.createElement("div");
    widget.id = "h1s-every-widget";
    widget.hidden = true;
    document.body.appendChild(widget);
  }

  function init() {
    var api = window.everyDotOrgDonateButton;
    if (ready || !api ||
        typeof api.createWidget !== "function" ||
        typeof api.showWidget !== "function") return;
    try {
      api.createWidget(Object.assign(
        { selector: "#h1s-every-widget" }, H1S_DONATE_OPTIONS
      ));
      ready = true;
    } catch (error) {
      // Preserve normal link navigation if the embed cannot initialize.
      ready = false;
    }
  }

  document.addEventListener("click", function (event) {
    if (!ready || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var target = event.target;
    if (target && target.nodeType !== 1) target = target.parentElement;
    var anchor = target && target.closest ? target.closest("a[href]") : null;
    if (!anchor || anchor.hasAttribute("download") ||
        anchor.hasAttribute("data-every-direct") ||
        (anchor.target && anchor.target.toLowerCase() !== "_self")) return;

    var url;
    try {
      url = new URL(anchor.href, document.baseURI);
    } catch (error) {
      return;
    }

    // Only plain links for this exact nonprofit use the generic pop-up.
    // Keep asset methods, UTM tracking, amounts, designations, success URLs,
    // fundraising paths, and any other link-specific settings intact.
    if (url.username || url.password || url.origin !== "https://www.every.org" ||
        !/^\/hope-with-love\/?$/.test(url.pathname) ||
        url.search ||
        (url.hash && url.hash !== "#/donate" && url.hash !== "#donate")) return;

    var api = window.everyDotOrgDonateButton;
    if (!api || typeof api.showWidget !== "function") return;
    try {
      api.showWidget();
      event.preventDefault();
    } catch (error) {
      // Do not cancel navigation if opening the pop-up fails.
    }
  });

  if (window.everyDotOrgDonateButton) {
    init();
  } else {
    var script = document.getElementById("every-donate-btn-js");
    if (!script) {
      script = document.createElement("script");
      script.id = "every-donate-btn-js";
      script.src = "https://embeds.every.org/0.4/button.js?explicit=1";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", init);
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", init);
    }
  }
}
