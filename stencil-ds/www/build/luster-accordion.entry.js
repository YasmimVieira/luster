import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterAccordionCss = () => `:host{display:block}.accordion{background:var(--dc-surface-container-high);border-radius:var(--dc-round-3);overflow:hidden;transition:box-shadow var(--dc-transition-base)}.accordion--expanded{box-shadow:var(--dc-shadow-sm)}.accordion__trigger{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--dc-space-4);width:100%;padding:var(--dc-space-4) var(--dc-space-5);background:none;border:none;cursor:pointer;text-align:left;transition:background var(--dc-transition-fast)}.accordion__trigger:hover{background:rgba(163, 166, 255, 0.04)}.accordion__trigger-left{display:flex;flex-direction:column;gap:var(--dc-space-2);flex:1}.accordion__titles{display:flex;flex-direction:column;gap:4px}.accordion__title{font-family:var(--dc-font-display);font-size:var(--dc-title-sm);font-weight:700;color:var(--dc-on-surface)}.accordion__subtitle{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant);line-height:1.5}.accordion__chevron{color:var(--dc-on-surface-variant);display:flex;align-items:center;transition:transform var(--dc-transition-base);flex-shrink:0;margin-top:var(--dc-space-1)}.accordion__chevron--up{transform:rotate(180deg)}.accordion__content{max-height:0;overflow:hidden;transition:max-height var(--dc-transition-slow) cubic-bezier(0.4, 0, 0.2, 1)}.accordion--expanded .accordion__content{max-height:600px}.accordion__inner{padding:0 var(--dc-space-5) var(--dc-space-5);color:var(--dc-on-surface-variant);font-size:var(--dc-body-sm);line-height:1.6}`;

const DcAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcToggle = createEvent(this, "dcToggle", 7);
        this.heading = '';
        this.subtitle = '';
        this.badge = '';
        this.badgeVariant = 'default';
        this.expanded = false;
        this.isExpanded = false;
        this.handleToggle = () => {
            this.isExpanded = !this.isExpanded;
            this.dcToggle.emit(this.isExpanded);
        };
    }
    componentWillLoad() {
        this.isExpanded = this.expanded;
    }
    render() {
        return (h("div", { key: '8354addfd70119cc5c50b0cadb414d341f5c4dd1', class: `accordion ${this.isExpanded ? 'accordion--expanded' : ''}` }, h("button", { key: 'bffcbfdef833e817b8e03c79fa72b5a5a4edbbb0', class: "accordion__trigger", onClick: this.handleToggle, "aria-expanded": this.isExpanded ? 'true' : 'false' }, h("div", { key: '5b6e51d9e0eabb125b50b54ebd54667432a672b3', class: "accordion__trigger-left" }, this.badge && (h("luster-badge", { key: '1894640145ac7ab6df3867b9710e475573c99b5b', variant: this.badgeVariant, size: "sm" }, this.badge)), h("div", { key: '30e6782a85ceec036d91b12c936c5c2863a4f017', class: "accordion__titles" }, h("span", { key: '7c7bf525077ba806efb13ddee674a6049af64204', class: "accordion__title" }, this.heading), this.subtitle && (h("span", { key: 'd888d5b78704713aa1c4c9cc902dbd04979503e2', class: "accordion__subtitle" }, this.subtitle)))), h("span", { key: '98601396b5fcd1d777935d400a1f01072c9d437a', class: `accordion__chevron ${this.isExpanded ? 'accordion__chevron--up' : ''}` }, h("svg", { key: '5c9c4af605307d12973f82c5166d8e3873e402c3', width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("polyline", { key: 'd59e9cc24f98cdd87c317f3107b34ba9c732b3af', points: "6,9 12,15 18,9", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))), h("div", { key: '3b7245e52cc48797637756d8ec66bcf1868adfe4', class: "accordion__content", "aria-hidden": !this.isExpanded ? 'true' : 'false' }, h("div", { key: 'ab1069f5ab0d102b16fc02ef71365c4cd4525af8', class: "accordion__inner" }, h("slot", { key: 'cfc15924e2effa62732dd221d846f44baeff0901' })))));
    }
};
DcAccordion.style = lusterAccordionCss();

export { DcAccordion as luster_accordion };
//# sourceMappingURL=luster-accordion.entry.esm.js.map

//# sourceMappingURL=luster-accordion.entry.js.map