import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterCheckboxCss = () => `:host{display:inline-flex}.checkbox{display:inline-flex;align-items:center;gap:var(--dc-space-3);cursor:pointer;user-select:none}.checkbox--disabled{opacity:0.4;cursor:not-allowed}.checkbox__box{width:18px;height:18px;border-radius:var(--dc-round-1);border:1.5px solid rgba(64, 72, 93, 0.5);background:var(--dc-surface-container-lowest);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all var(--dc-transition-fast);color:var(--dc-on-primary)}.checkbox__box--checked,.checkbox__box--indeterminate{background:var(--dc-primary);border-color:var(--dc-primary)}.checkbox:hover .checkbox__box:not(.checkbox__box--checked){border-color:var(--dc-primary);background:rgba(163, 166, 255, 0.08)}.checkbox__label{font-family:var(--dc-font-body);font-size:var(--dc-body-md);color:var(--dc-on-surface)}`;

const DcCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcChange = createEvent(this, "dcChange", 7);
        this.label = '';
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.value = '';
        this.innerChecked = false;
        this.handleChange = () => {
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
        return (h("label", { key: '045e94d76f2ba6cc1ebbcbb3bfa82289fc761d31', class: `checkbox ${this.disabled ? 'checkbox--disabled' : ''}`, onClick: this.handleChange }, h("span", { key: '2ec03e604ef10657e8cdde93c9878b22525a3b35', class: `checkbox__box ${this.innerChecked ? 'checkbox__box--checked' : ''} ${this.indeterminate ? 'checkbox__box--indeterminate' : ''}` }, this.innerChecked && !this.indeterminate && (h("svg", { key: 'ab90b16c273244ca84f22ae31053f28c620480fd', width: "10", height: "8", viewBox: "0 0 10 8", fill: "none" }, h("path", { key: 'c333e014a043775ceddeebbefbac1e05441e942e', d: "M1 4L3.5 6.5L9 1", stroke: "currentColor", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" }))), this.indeterminate && (h("svg", { key: '919fbd28b4d3d69a799ee92ff8bce515a855a4c1', width: "10", height: "2", viewBox: "0 0 10 2", fill: "none" }, h("line", { key: '055debe6bfd40ed0a67c62553c1219e3d30a8d52', x1: "1", y1: "1", x2: "9", y2: "1", stroke: "currentColor", "stroke-width": "1.8", "stroke-linecap": "round" })))), this.label && h("span", { key: '6e0a0ab1e3d2a61df2c97fa407761eabd927ef76', class: "checkbox__label" }, this.label)));
    }
};
DcCheckbox.style = lusterCheckboxCss();

export { DcCheckbox as luster_checkbox };
//# sourceMappingURL=luster-checkbox.entry.esm.js.map

//# sourceMappingURL=luster-checkbox.entry.js.map