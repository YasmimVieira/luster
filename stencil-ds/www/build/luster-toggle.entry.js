import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterToggleCss = () => `:host{display:inline-flex}.toggle{display:inline-flex;align-items:center;gap:var(--dc-space-3);cursor:pointer}.toggle--disabled{opacity:0.4;cursor:not-allowed}.toggle__label{font-size:var(--dc-body-md);color:var(--dc-on-surface)}.toggle__track{position:relative;width:40px;height:22px;border-radius:var(--dc-round-full);background:rgba(64, 72, 93, 0.5);border:none;cursor:pointer;transition:background var(--dc-transition-base);padding:0;flex-shrink:0}.toggle__track--on{background:var(--dc-primary-dim)}.toggle__thumb{position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:var(--dc-round-full);background:white;transition:transform var(--dc-transition-base);display:block}.toggle__track--on .toggle__thumb{transform:translateX(18px)}`;

const DcToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcChange = createEvent(this, "dcChange", 7);
        this.label = '';
        this.checked = false;
        this.disabled = false;
        this.innerChecked = false;
        this.handleToggle = () => {
            if (!this.disabled) {
                this.innerChecked = !this.innerChecked;
                this.dcChange.emit(this.innerChecked);
            }
        };
    }
    componentWillLoad() {
        this.innerChecked = this.checked;
    }
    render() {
        return (h("label", { key: '539add927a6a67d6a1461946a31299ca0e86d848', class: `toggle ${this.disabled ? 'toggle--disabled' : ''}` }, this.label && h("span", { key: '8c881782b2dfe533c03db72bc94a3abd3c83e4a7', class: "toggle__label" }, this.label), h("button", { key: '6f512fd79089b7008386fc9a546870ccd694ca87', class: `toggle__track ${this.innerChecked ? 'toggle__track--on' : ''}`, role: "switch", "aria-checked": this.innerChecked ? 'true' : 'false', disabled: this.disabled, onClick: this.handleToggle }, h("span", { key: '341416b72ffe057213e369a5ee3ef403a65f1b20', class: "toggle__thumb" }))));
    }
};
DcToggle.style = lusterToggleCss();

export { DcToggle as luster_toggle };
//# sourceMappingURL=luster-toggle.entry.esm.js.map

//# sourceMappingURL=luster-toggle.entry.js.map