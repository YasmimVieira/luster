import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterFeatureQuoteCss = () => `:host{display:block}.feature-quote{margin:0;padding:var(--dc-space-6) var(--dc-space-8);border-left:4px solid var(--dc-primary);background:var(--dc-surface-container-high);border-radius:0 var(--dc-round-4) var(--dc-round-4) 0;position:relative}.feature-quote--large{padding:var(--dc-space-8) var(--dc-space-10);border-radius:var(--dc-round-4);border-left:4px solid var(--dc-primary)}.feature-quote--inline{background:transparent;padding:var(--dc-space-4) var(--dc-space-6)}.feature-quote__mark{position:absolute;top:var(--dc-space-3);left:var(--dc-space-5);font-family:var(--dc-font-display);font-size:3rem;color:var(--dc-primary);opacity:0.4;line-height:1}.feature-quote__text{font-family:var(--dc-font-display);font-size:var(--dc-headline-sm);font-weight:700;font-style:italic;color:var(--dc-primary-fixed);line-height:1.4;letter-spacing:var(--dc-tracking-tight);margin:0}.feature-quote--large .feature-quote__text{font-size:var(--dc-headline-md)}.feature-quote__attribution{margin-top:var(--dc-space-4)}.feature-quote__author-wrap{display:flex;align-items:center;gap:var(--dc-space-3)}.feature-quote__author-avatar{width:28px;height:28px;border-radius:var(--dc-round-full);background:linear-gradient(135deg, var(--dc-primary), var(--dc-primary-dim));display:flex;align-items:center;justify-content:center;font-size:var(--dc-label-sm);font-weight:700;color:var(--dc-on-primary);flex-shrink:0}.feature-quote__author{display:block;font-size:var(--dc-label-md);font-weight:600;color:var(--dc-on-surface)}.feature-quote__role{display:block;font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant)}`;

const DcFeatureQuote = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.quote = '';
        this.author = '';
        this.role = '';
        this.variant = 'default';
    }
    render() {
        return (h("blockquote", { key: '4ed1344a05bfd89c63005ba64b8cd9a32db0f6c5', class: `feature-quote feature-quote--${this.variant}` }, h("span", { key: '47bdfd40fe685f876b64b421ff706afdc42c0541', class: "feature-quote__mark" }, "\""), h("p", { key: '1b3f0735be2544ab0332455875f12c4d3ca51865', class: "feature-quote__text" }, this.quote || h("slot", { key: 'f012c749d221d62ef919c898e181547a154e4b85' })), (this.author || this.role) && (h("footer", { key: '04740fe325d696cfa258e4e946b2385cfa5b2173', class: "feature-quote__attribution" }, this.author && (h("div", { key: '25c2a6ca4d16b965d7563a495ee8350a7ca93e4a', class: "feature-quote__author-wrap" }, h("div", { key: '9e8a34dfe0c05de5440a3d63700fec4b749264c3', class: "feature-quote__author-avatar" }, this.author.charAt(0)), h("div", { key: '113098f2c5fdbecf0d8088d265ddef76c0751776' }, h("span", { key: 'e140de5e35d6aec4fe974d55f2f3b14b4f6c33b8', class: "feature-quote__author" }, this.author), this.role && h("span", { key: 'fd6bd76a054ba0eda2deec30d596d2dc35495bd3', class: "feature-quote__role" }, this.role))))))));
    }
};
DcFeatureQuote.style = lusterFeatureQuoteCss();

export { DcFeatureQuote as luster_feature_quote };
//# sourceMappingURL=luster-feature-quote.entry.esm.js.map

//# sourceMappingURL=luster-feature-quote.entry.js.map