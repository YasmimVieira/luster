import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterColorSwatchCss = () => `:host{display:inline-flex}.swatch{display:flex;flex-direction:column;gap:var(--dc-space-2)}.swatch__color{border-radius:var(--dc-round-3);transition:transform var(--dc-transition-fast)}.swatch__color:hover{transform:scale(1.03)}.swatch--sm .swatch__color{width:60px;height:60px}.swatch--md .swatch__color{width:80px;height:80px}.swatch--lg .swatch__color{width:100px;height:100px}.swatch__info{display:flex;flex-direction:column;gap:2px}.swatch__name{font-size:var(--dc-label-sm);font-weight:600;color:var(--dc-on-surface);white-space:nowrap}.swatch__hex{font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant);font-family:monospace}`;

const DcColorSwatch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = '#a3a6ff';
        this.name = '';
        this.hex = '';
        this.size = 'md';
    }
    render() {
        return (h("div", { key: '6ea9cb759f0d060dd393e6de23429c4b515d7139', class: `swatch swatch--${this.size}` }, h("div", { key: '8b6883cc045ed739c80b10bc416d64156a873109', class: "swatch__color", style: { backgroundColor: this.color } }), h("div", { key: '5c9b62e83b8442a29a623bd8ac1503f78bc965e5', class: "swatch__info" }, this.name && h("span", { key: '5ab7e003ed7158297661bde476f1fbc66e96ff88', class: "swatch__name" }, this.name), this.hex && h("span", { key: 'df26e2458cad5537e2cbd00765256ae2b4eae9ca', class: "swatch__hex" }, this.hex))));
    }
};
DcColorSwatch.style = lusterColorSwatchCss();

export { DcColorSwatch as luster_color_swatch };
//# sourceMappingURL=luster-color-swatch.entry.esm.js.map

//# sourceMappingURL=luster-color-swatch.entry.js.map