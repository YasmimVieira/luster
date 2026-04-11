import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterBadgeCss = () => `:host{display:inline-flex}.badge{display:inline-flex;align-items:center;gap:var(--dc-space-1);border-radius:var(--dc-round-full);font-family:var(--dc-font-body);font-weight:700;letter-spacing:var(--dc-tracking-wide);text-transform:uppercase;white-space:nowrap}.badge--sm{padding:2px var(--dc-space-2);font-size:10px}.badge--md{padding:var(--dc-space-1) var(--dc-space-3);font-size:var(--dc-label-sm)}.badge__dot{width:6px;height:6px;border-radius:var(--dc-round-full);background:currentColor;flex-shrink:0}.badge--default{background:rgba(64, 72, 93, 0.4);color:var(--dc-on-surface-variant)}.badge--primary{background:rgba(163, 166, 255, 0.15);color:var(--dc-primary)}.badge--success{background:rgba(76, 206, 172, 0.15);color:var(--dc-success)}.badge--warning{background:rgba(255, 209, 102, 0.15);color:var(--dc-warning)}.badge--error{background:rgba(255, 180, 171, 0.15);color:var(--dc-error)}.badge--beta{background:rgba(182, 174, 228, 0.15);color:var(--dc-secondary)}.badge--live{background:rgba(76, 206, 172, 0.2);color:var(--dc-success);animation:pulse 2s infinite}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.7}}`;

const DcBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'default';
        this.dot = false;
        this.size = 'md';
    }
    render() {
        return (h("span", { key: '4d49db25a7cb0f0bc72b5b7da55c7bdaca4a56a6', class: `badge badge--${this.variant} badge--${this.size}` }, this.dot && h("span", { key: '592ddbcbdfaa412bec7fa021c1e0d230d6716f41', class: "badge__dot" }), h("slot", { key: '8dcb4f58ac4c236ba6a1de5e22afed861bf78a7f' })));
    }
};
DcBadge.style = lusterBadgeCss();

export { DcBadge as luster_badge };
//# sourceMappingURL=luster-badge.entry.esm.js.map

//# sourceMappingURL=luster-badge.entry.js.map