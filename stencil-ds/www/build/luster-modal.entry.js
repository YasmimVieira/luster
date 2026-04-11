import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterModalCss = () => `:host{display:block}.modal-overlay{position:fixed;inset:0;background:rgba(6, 14, 32, 0.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;z-index:1000;padding:var(--dc-space-6);animation:fadeIn 0.2s ease-out}.modal{background:var(--dc-surface-container-highest);border-radius:var(--dc-round-5);box-shadow:var(--dc-shadow-xl);border:1px solid rgba(64, 72, 93, 0.3);display:flex;flex-direction:column;animation:scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);overflow:hidden;max-height:90vh}.modal--sm{width:380px}.modal--md{width:520px}.modal--lg{width:680px}.modal__header{padding:var(--dc-space-6);padding-bottom:var(--dc-space-4);position:relative;display:flex;flex-direction:column;gap:var(--dc-space-2)}.modal__title{font-family:var(--dc-font-display);font-size:var(--dc-headline-sm);font-weight:700;color:var(--dc-on-surface);letter-spacing:var(--dc-tracking-tight);margin:0;padding-right:var(--dc-space-8)}.modal__subtitle{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant);margin:0;line-height:1.5}.modal__close{position:absolute;top:var(--dc-space-5);right:var(--dc-space-5);width:32px;height:32px;background:rgba(64, 72, 93, 0.2);border:none;border-radius:var(--dc-round-full);color:var(--dc-on-surface-variant);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all var(--dc-transition-fast)}.modal__close:hover{background:rgba(64, 72, 93, 0.4);color:var(--dc-on-surface)}.modal__body{padding:var(--dc-space-4) var(--dc-space-6);flex:1;overflow-y:auto}.modal__footer{padding:var(--dc-space-4) var(--dc-space-6) var(--dc-space-6);display:flex;justify-content:flex-end;gap:var(--dc-space-3);border-top:1px solid rgba(64, 72, 93, 0.2)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes scaleIn{from{opacity:0;transform:scale(0.94) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}`;

const DcModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcClose = createEvent(this, "dcClose", 7);
        this.dcConfirm = createEvent(this, "dcConfirm", 7);
        this.open = false;
        this.heading = '';
        this.subtitle = '';
        this.confirmLabel = 'Proceed';
        this.cancelLabel = 'Cancel';
        this.size = 'md';
        this.visible = false;
        this.handleClose = () => {
            this.open = false;
            this.visible = false;
            this.dcClose.emit();
        };
        this.handleConfirm = () => {
            this.dcConfirm.emit();
            this.handleClose();
        };
    }
    watchOpen(newValue) {
        this.visible = newValue;
    }
    componentWillLoad() {
        this.visible = this.open;
    }
    render() {
        if (!this.visible)
            return null;
        return (h("div", { class: "modal-overlay", onClick: e => {
                if (e.target.classList.contains('modal-overlay'))
                    this.handleClose();
            } }, h("div", { class: `modal modal--${this.size}`, role: "dialog", "aria-modal": "true" }, h("div", { class: "modal__header" }, this.heading && h("h2", { class: "modal__title" }, this.heading), this.subtitle && h("p", { class: "modal__subtitle" }, this.subtitle), h("button", { class: "modal__close", onClick: this.handleClose, "aria-label": "Close" }, h("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("line", { x1: "18", y1: "6", x2: "6", y2: "18", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("line", { x1: "6", y1: "6", x2: "18", y2: "18", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })))), h("div", { class: "modal__body" }, h("slot", null)), h("div", { class: "modal__footer" }, h("slot", { name: "footer" }, h("luster-button", { variant: "secondary", onDcClick: this.handleClose }, this.cancelLabel), h("luster-button", { variant: "primary", onDcClick: this.handleConfirm }, this.confirmLabel))))));
    }
    static get watchers() { return {
        "open": [{
                "watchOpen": 0
            }]
    }; }
};
DcModal.style = lusterModalCss();

export { DcModal as luster_modal };
//# sourceMappingURL=luster-modal.entry.esm.js.map

//# sourceMappingURL=luster-modal.entry.js.map