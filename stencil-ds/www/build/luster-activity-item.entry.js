import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterActivityItemCss = () => `:host{display:block}.activity-item{display:flex;align-items:flex-start;gap:var(--dc-space-3);padding:var(--dc-space-3) 0}.activity-item+.activity-item{border-top:1px solid rgba(64, 72, 93, 0.12)}.activity-item__icon{width:28px;height:28px;border-radius:var(--dc-round-full);background:rgba(163, 166, 255, 0.1);display:flex;align-items:center;justify-content:center;color:var(--dc-primary);flex-shrink:0}.activity-item__content{flex:1;display:flex;flex-direction:column;gap:2px;overflow:hidden}.activity-item__title{font-size:var(--dc-body-sm);font-weight:600;color:var(--dc-on-surface);line-height:1.3}.activity-item__desc{font-size:var(--dc-label-md);color:var(--dc-on-surface-variant);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.activity-item__time{font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant);margin-top:var(--dc-space-1)}.activity-item--file{align-items:center;background:var(--dc-surface-container);border-radius:var(--dc-round-3);padding:var(--dc-space-3) var(--dc-space-4);transition:background var(--dc-transition-fast)}.activity-item--file+.activity-item--file{border-top:none;margin-top:var(--dc-space-2)}.activity-item--file:hover{background:var(--dc-surface-container-high)}.activity-item__file-icon{width:36px;height:36px;border-radius:var(--dc-round-2);background:rgba(163, 166, 255, 0.1);display:flex;align-items:center;justify-content:center;color:var(--dc-primary);flex-shrink:0}.activity-item__meta{display:flex;align-items:center;gap:var(--dc-space-1);font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant)}.activity-item__download{background:none;border:none;cursor:pointer;color:var(--dc-on-surface-variant);display:flex;align-items:center;padding:var(--dc-space-1);border-radius:var(--dc-round-1);flex-shrink:0;opacity:0.6;transition:opacity var(--dc-transition-fast)}.activity-item__download:hover{opacity:1}`;

const DcActivityItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.description = '';
        this.time = '';
        this.variant = 'activity';
        this.icon = 'edit';
        this.fileSize = '';
        this.downloadable = false;
    }
    getIcon() {
        switch (this.icon) {
            case 'edit':
                return (h("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
            case 'sync':
                return (h("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("polyline", { points: "1 4 1 10 7 10", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { d: "M3.51 15a9 9 0 1 0 .49-8.49", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })));
            case 'user':
                return (h("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", stroke: "currentColor", "stroke-width": "2" }), h("circle", { cx: "12", cy: "7", r: "4", stroke: "currentColor", "stroke-width": "2" })));
            case 'file':
                return (h("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", "stroke-width": "2" }), h("polyline", { points: "14,2 14,8 20,8", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })));
            default:
                return (h("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "2" })));
        }
    }
    render() {
        if (this.variant === 'file') {
            return (h("div", { class: "activity-item activity-item--file" }, h("div", { class: "activity-item__file-icon" }, this.getIcon()), h("div", { class: "activity-item__content" }, h("span", { class: "activity-item__title" }, this.label), h("span", { class: "activity-item__meta" }, this.fileSize && h("span", null, this.fileSize), this.time && h("span", null, "\u00B7 ", this.time))), this.downloadable && (h("button", { class: "activity-item__download", "aria-label": "Download" }, h("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("polyline", { points: "7,10 12,15 17,10", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("line", { x1: "12", y1: "15", x2: "12", y2: "3", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }))))));
        }
        return (h("div", { class: "activity-item" }, h("div", { class: "activity-item__icon" }, this.getIcon()), h("div", { class: "activity-item__content" }, h("span", { class: "activity-item__title" }, this.label), this.description && (h("span", { class: "activity-item__desc" }, this.description)), this.time && h("span", { class: "activity-item__time" }, this.time))));
    }
};
DcActivityItem.style = lusterActivityItemCss();

export { DcActivityItem as luster_activity_item };
//# sourceMappingURL=luster-activity-item.entry.esm.js.map

//# sourceMappingURL=luster-activity-item.entry.js.map