import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterHeroCss = () => `:host{display:block}.hero{position:relative;min-height:320px;border-radius:var(--dc-round-4);overflow:hidden;display:flex;align-items:flex-end}.hero__bg{position:absolute;inset:0}.hero__bg-img{width:100%;height:100%;object-fit:cover;object-position:center}.hero__bg-overlay{position:absolute;inset:0;background:rgba(6, 14, 32, 0.5)}.hero__bg-gradient{position:absolute;inset:0;background:linear-gradient(     to top,     rgba(6, 14, 32, 0.9) 0%,     rgba(6, 14, 32, 0.3) 50%,     transparent 100%   )}.hero--parallax .hero__bg::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 20% 30%, rgba(163, 166, 255, 0.15) 0%, transparent 50%),     radial-gradient(ellipse at 80% 60%, rgba(96, 99, 238, 0.12) 0%, transparent 40%),     radial-gradient(ellipse at 50% 80%, rgba(182, 174, 228, 0.08) 0%, transparent 40%),     var(--dc-surface-container);z-index:1}.hero__content{position:relative;z-index:2;padding:var(--dc-space-10) var(--dc-space-10) var(--dc-space-8);display:flex;flex-direction:column;gap:var(--dc-space-4);width:100%}.hero__section{font-size:var(--dc-label-sm);font-weight:700;color:var(--dc-primary);letter-spacing:var(--dc-tracking-wider);text-transform:uppercase}.hero__title{font-family:var(--dc-font-display);font-size:var(--dc-display-md);font-weight:800;color:var(--dc-on-surface);letter-spacing:var(--dc-tracking-tight);line-height:1.05;margin:0;max-width:560px}.hero__subtitle{font-size:var(--dc-body-md);color:var(--dc-on-surface-variant);max-width:480px;margin:0;line-height:1.6}.hero__actions{display:flex;gap:var(--dc-space-3);flex-wrap:wrap}.hero__layer-badge{position:absolute;top:var(--dc-space-4);right:var(--dc-space-4);z-index:2;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.hero__layer-text{font-size:var(--dc-label-sm);font-weight:600;color:rgba(163, 166, 255, 0.7);letter-spacing:var(--dc-tracking-wide)}.hero__layer-sub{font-size:10px;color:rgba(163, 166, 255, 0.4);font-family:monospace}`;

const DcHero = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = '';
        this.subtitle = '';
        this.section = '';
        this.imageUrl = '';
        this.parallax = false;
    }
    render() {
        return (h("section", { key: '1cb214e7059158e7153d468b9fa840ce98f10aeb', class: `hero ${this.parallax ? 'hero--parallax' : ''}` }, h("div", { key: '4547dbead7926629a4e915ea8cf33d56679baa49', class: "hero__bg" }, this.imageUrl && (h("img", { key: 'c07cc9f3c5416a05f6034ae5d4ac0a8ada6f6f8f', class: "hero__bg-img", src: this.imageUrl, alt: "", "aria-hidden": "true" })), h("div", { key: 'e81099f7d4601beac31e59058488195ac4a0fc22', class: "hero__bg-overlay" }), h("div", { key: 'e5cc125505c0b58ad75d31417b07d298743407ec', class: "hero__bg-gradient" })), h("div", { key: '74a713512ea9aba2e79202814b21d50017169576', class: "hero__content" }, this.section && (h("span", { key: '7d05f909669493c03fabc623b6716a8bd86e2493', class: "hero__section" }, this.section)), h("h1", { key: '4fdfe3e350c16222b084490593fb231d090b490a', class: "hero__title" }, this.heading), this.subtitle && (h("p", { key: 'f30209ac7d84bfe259b0852b2779c50bc1a9f4bd', class: "hero__subtitle" }, this.subtitle)), h("div", { key: 'b2f9656bdb0a921d95b328771457ac841ed03df9', class: "hero__actions" }, h("slot", { key: '758806782726fc7e4b66b037afe554e524d05c74' }))), h("div", { key: 'b6468db237dfc6b2e859117bd1419c746a8e0032', class: "hero__layer-badge" }, h("span", { key: '2bc5f3dc8f6b16bfb3ac18c76d8cd656e48c4bfa', class: "hero__layer-text" }, "Parallax Layer 01"), h("span", { key: '87d7d56dc8964cfd479e5cfea348424158f6fa7d', class: "hero__layer-sub" }, "depth: 0.3"))));
    }
};
DcHero.style = lusterHeroCss();

export { DcHero as luster_hero };
//# sourceMappingURL=luster-hero.entry.esm.js.map

//# sourceMappingURL=luster-hero.entry.js.map