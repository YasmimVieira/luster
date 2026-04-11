import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterAlertCss = () => `:host{display:block}.alert{display:flex;align-items:flex-start;gap:var(--dc-space-3);padding:var(--dc-space-3) var(--dc-space-4);border-radius:var(--dc-round-3);border-left:3px solid currentColor;animation:slideIn 0.2s ease-out}.alert--info{background:rgba(163, 166, 255, 0.08);color:var(--dc-primary)}.alert--success{background:rgba(76, 206, 172, 0.08);color:var(--dc-success)}.alert--warning{background:rgba(255, 209, 102, 0.08);color:var(--dc-warning)}.alert--error{background:rgba(255, 180, 171, 0.08);color:var(--dc-error)}.alert__icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.alert__body{flex:1;display:flex;flex-direction:column;gap:2px}.alert__title{font-family:var(--dc-font-body);font-size:var(--dc-body-sm);font-weight:600;color:var(--dc-on-surface)}.alert__message{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant)}.alert__time{font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant);margin-top:var(--dc-space-1)}.alert__close{background:none;border:none;cursor:pointer;color:var(--dc-on-surface-variant);display:flex;align-items:center;justify-content:center;padding:var(--dc-space-1);border-radius:var(--dc-round-1);flex-shrink:0;opacity:0.6;transition:opacity var(--dc-transition-fast)}.alert__close:hover{opacity:1}@keyframes slideIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const DcAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcDismiss = createEvent(this, "dcDismiss", 7);
        this.heading = '';
        this.message = '';
        this.variant = 'info';
        this.dismissible = true;
        this.timestamp = '';
        this.visible = true;
        this.dismiss = () => {
            this.visible = false;
            this.dcDismiss.emit();
        };
    }
    getIcon() {
        switch (this.variant) {
            case 'success':
                return (h("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "2" }), h("path", { d: "M8 12l3 3 5-5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
            case 'error':
                return (h("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "2" }), h("line", { x1: "15", y1: "9", x2: "9", y2: "15", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("line", { x1: "9", y1: "9", x2: "15", y2: "15", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })));
            case 'warning':
                return (h("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z", stroke: "currentColor", "stroke-width": "2" }), h("line", { x1: "12", y1: "9", x2: "12", y2: "13", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("line", { x1: "12", y1: "17", x2: "12.01", y2: "17", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })));
            default:
                return (h("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "2" }), h("line", { x1: "12", y1: "8", x2: "12", y2: "12", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("line", { x1: "12", y1: "16", x2: "12.01", y2: "16", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })));
        }
    }
    render() {
        if (!this.visible)
            return null;
        return (h("div", { class: `alert alert--${this.variant}`, role: "alert" }, h("span", { class: "alert__icon" }, this.getIcon()), h("div", { class: "alert__body" }, this.heading && h("span", { class: "alert__title" }, this.heading), this.message && h("span", { class: "alert__message" }, this.message), this.timestamp && h("span", { class: "alert__time" }, this.timestamp)), this.dismissible && (h("button", { class: "alert__close", onClick: this.dismiss, "aria-label": "Dismiss" }, h("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none" }, h("line", { x1: "18", y1: "6", x2: "6", y2: "18", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("line", { x1: "6", y1: "6", x2: "18", y2: "18", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }))))));
    }
};
DcAlert.style = lusterAlertCss();

export { DcAlert as luster_alert };
//# sourceMappingURL=luster-alert.entry.esm.js.map

//# sourceMappingURL=luster-alert.entry.js.map