import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-BBzp1U1H.js';
export { s as setNonce } from './index-BBzp1U1H.js';

/*
 Stencil Client Patch Browser v4.43.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["luster-resource-table",[[1,"luster-resource-table",{"rows":[1]}]]],["luster-stat-card",[[1,"luster-stat-card",{"heading":[1],"description":[1],"version":[1],"status":[1],"users":[1],"hasToggle":[4,"has-toggle"],"toggleOn":[4,"toggle-on"],"icon":[1]}]]],["luster-accordion",[[257,"luster-accordion",{"heading":[1],"subtitle":[1],"badge":[1],"badgeVariant":[1,"badge-variant"],"expanded":[1028],"isExpanded":[32]}]]],["luster-modal",[[257,"luster-modal",{"open":[1028],"heading":[1],"subtitle":[1],"confirmLabel":[1,"confirm-label"],"cancelLabel":[1,"cancel-label"],"size":[1],"visible":[32]},null,{"open":[{"watchOpen":0}]}]]],["luster-profile-card",[[1,"luster-profile-card",{"name":[1],"role":[1],"avatar":[1],"stat1Value":[1,"stat-1-value"],"stat1Label":[1,"stat-1-label"],"stat2Value":[1,"stat-2-value"],"stat2Label":[1,"stat-2-label"],"ctaLabel":[1,"cta-label"]}]]],["luster-activity-item",[[1,"luster-activity-item",{"label":[1],"description":[1],"time":[1],"variant":[1],"icon":[1],"fileSize":[1,"file-size"],"downloadable":[4]}]]],["luster-alert",[[1,"luster-alert",{"heading":[1],"message":[1],"variant":[1],"dismissible":[4],"timestamp":[1],"visible":[32]}]]],["luster-article-card",[[1,"luster-article-card",{"category":[1],"heading":[1],"excerpt":[1],"date":[1],"author":[1],"authorRole":[1,"author-role"],"imageUrl":[1,"image-url"],"featured":[4]}]]],["luster-card",[[257,"luster-card",{"variant":[1],"padding":[1],"hoverable":[4]}]]],["luster-checkbox",[[1,"luster-checkbox",{"label":[1],"checked":[4],"disabled":[4],"indeterminate":[4],"value":[1],"innerChecked":[32]}]]],["luster-color-swatch",[[1,"luster-color-swatch",{"color":[1],"name":[1],"hex":[1],"size":[1]}]]],["luster-feature-quote",[[257,"luster-feature-quote",{"quote":[1],"author":[1],"role":[1],"variant":[1]}]]],["luster-hero",[[257,"luster-hero",{"heading":[1],"subtitle":[1],"section":[1],"imageUrl":[1,"image-url"],"parallax":[4]}]]],["luster-input",[[1,"luster-input",{"label":[1],"placeholder":[1],"value":[1],"type":[1],"error":[4],"errorMessage":[1,"error-message"],"helperText":[1,"helper-text"],"disabled":[4],"readonly":[4],"name":[1],"focused":[32],"innerValue":[32]}]]],["luster-navbar",[[1,"luster-navbar",{"logoTitle":[1,"logo-title"],"logoSub":[1,"logo-sub"],"activeLink":[1,"active-link"]}]]],["luster-sidebar",[[1,"luster-sidebar",{"active":[1]}]]],["luster-tabs",[[257,"luster-tabs",{"tabs":[1],"active":[1],"activeTab":[32]}]]],["luster-toggle",[[1,"luster-toggle",{"label":[1],"checked":[4],"disabled":[4],"innerChecked":[32]}]]],["luster-badge",[[257,"luster-badge",{"variant":[1],"dot":[4],"size":[1]}]]],["luster-button",[[257,"luster-button",{"variant":[1],"size":[1],"disabled":[4],"loading":[4],"fullWidth":[4,"full-width"],"type":[1]}]]]], options);
});
//# sourceMappingURL=luster.esm.js.map

//# sourceMappingURL=luster.esm.js.map