import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterStatCardCss = () => `:host{display:block}.stat-card{background:var(--dc-surface-container-high);border-radius:var(--dc-round-4);padding:var(--dc-space-5);display:flex;flex-direction:column;gap:var(--dc-space-4);transition:background var(--dc-transition-base), box-shadow var(--dc-transition-base);cursor:default}.stat-card:hover{background:var(--dc-surface-bright);box-shadow:var(--dc-shadow-md)}.stat-card__header{display:flex;justify-content:space-between;align-items:flex-start}.stat-card__icon-wrap{width:40px;height:40px;border-radius:var(--dc-round-3);background:rgba(163, 166, 255, 0.1);display:flex;align-items:center;justify-content:center}.stat-card__icon{color:var(--dc-primary);display:flex}.stat-card__icon-placeholder{width:20px;height:20px;border-radius:var(--dc-round-1);background:var(--dc-primary-dim);opacity:0.4}.stat-card__body{flex:1;display:flex;flex-direction:column;gap:var(--dc-space-2)}.stat-card__title{font-family:var(--dc-font-display);font-size:var(--dc-title-md);font-weight:700;color:var(--dc-on-surface);margin:0}.stat-card__desc{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant);margin:0;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.stat-card__footer{display:flex;align-items:center;justify-content:space-between;gap:var(--dc-space-2)}.stat-card__meta{display:flex;align-items:center;gap:var(--dc-space-2);flex-wrap:wrap}.stat-card__users{display:flex;align-items:center;gap:var(--dc-space-1);font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant)}`;

const DcStatCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = '';
        this.description = '';
        this.version = '';
        this.status = 'active';
        this.users = '';
        this.hasToggle = false;
        this.toggleOn = false;
        this.icon = '';
    }
    render() {
        return (h("div", { key: '67edcd065e8dbe0bbab3293a1c2d3113966b2e92', class: "stat-card" }, h("div", { key: '34def7d2976c9aa72c80cf97f016fe0198fcb224', class: "stat-card__header" }, h("div", { key: '7dd6a1fddc56da32b1c4ab70d95a47e62b32b201', class: "stat-card__icon-wrap" }, this.icon
            ? h("span", { class: "stat-card__icon", innerHTML: this.icon })
            : h("div", { class: "stat-card__icon-placeholder" }))), h("div", { key: '927d66d98c96284de9d702b4722f9a248f1fd5ad', class: "stat-card__body" }, h("h4", { key: 'd3e4ec0f889cb4c7a5dbae3c91be59af454cff69', class: "stat-card__title" }, this.heading), h("p", { key: 'cf66fdc344ce596626b4431e81c8a3dd9108dab9', class: "stat-card__desc" }, this.description)), h("div", { key: '7b8b1dc652ace8c975d944b8833af5ab01c7bfed', class: "stat-card__footer" }, h("div", { key: '3154ab32f16a58f3640cfae5e4a26ad402f2a306', class: "stat-card__meta" }, this.version && h("luster-badge", { key: '3cb211b7547c2e67d737c683f2f1aaa8023bf17e', variant: "default", size: "sm" }, this.version), this.status === 'beta' && h("luster-badge", { key: '81ef69da5d4fb0c22f17f48d133e262d3189aa18', variant: "beta", size: "sm" }, "Beta"), this.users && (h("span", { key: 'eab97e42ba598fb004be8bd1b995e2575ff0a769', class: "stat-card__users" }, h("svg", { key: '0b44cb51ab317b08c3ea4dc516e046101a3825ab', width: "12", height: "12", viewBox: "0 0 24 24", fill: "none" }, h("path", { key: 'a727ca4a5b7b4d47c4f4c29f716fa43999da498a', d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", stroke: "currentColor", "stroke-width": "2" }), h("circle", { key: '486f29a519eae561aaf9489bcad926e964bfe48f', cx: "9", cy: "7", r: "4", stroke: "currentColor", "stroke-width": "2" }), h("path", { key: 'bfcacb0897e2074d5fdc79c979e81357c7b8adea', d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", stroke: "currentColor", "stroke-width": "2" })), this.users))), this.hasToggle && h("luster-toggle", { key: '30b1744edb34562a3db4ae1773fa4b8ef7a33a79', checked: this.toggleOn }))));
    }
};
DcStatCard.style = lusterStatCardCss();

export { DcStatCard as luster_stat_card };
//# sourceMappingURL=luster-stat-card.entry.esm.js.map

//# sourceMappingURL=luster-stat-card.entry.js.map