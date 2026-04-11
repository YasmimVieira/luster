import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterCardCss = () => `:host{display:block}.card{border-radius:var(--dc-round-4);overflow:hidden;transition:background var(--dc-transition-base), box-shadow var(--dc-transition-base)}.card--pad-none{padding:0}.card--pad-sm{padding:var(--dc-space-4)}.card--pad-md{padding:var(--dc-space-6)}.card--pad-lg{padding:var(--dc-space-8)}.card--default{background:var(--dc-surface-container-high)}.card--elevated{background:var(--dc-surface-container-highest);box-shadow:var(--dc-shadow-md)}.card--feature{background:var(--dc-surface-container-high);border:1px solid rgba(64, 72, 93, 0.25)}.card--glass{background:rgba(30, 46, 74, 0.55);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(64, 72, 93, 0.3)}.card--hoverable{cursor:pointer}.card--hoverable:hover{background:var(--dc-surface-bright);box-shadow:var(--dc-shadow-lg)}`;

const DcCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'default';
        this.padding = 'md';
        this.hoverable = false;
    }
    render() {
        return (h("div", { key: 'b49300a94d3ec06822794698af4a1d8da248d319', class: [
                'card',
                `card--${this.variant}`,
                `card--pad-${this.padding}`,
                this.hoverable ? 'card--hoverable' : '',
            ].filter(Boolean).join(' ') }, h("slot", { key: '05c26e4626e0610588ab6694355f315b0adc9327' })));
    }
};
DcCard.style = lusterCardCss();

export { DcCard as luster_card };
//# sourceMappingURL=luster-card.entry.esm.js.map

//# sourceMappingURL=luster-card.entry.js.map