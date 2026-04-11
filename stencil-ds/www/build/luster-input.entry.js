import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterInputCss = () => `:host{display:block}.input-wrapper{display:flex;flex-direction:column;gap:var(--dc-space-2)}.input__label{font-family:var(--dc-font-body);font-size:var(--dc-label-md);font-weight:600;color:var(--dc-on-surface-variant);letter-spacing:var(--dc-tracking-wide);text-transform:uppercase}.input__field-box{position:relative;border-radius:var(--dc-round-2);border:1px solid rgba(64, 72, 93, 0.2);background:var(--dc-surface-container-lowest);transition:border-color var(--dc-transition-base), box-shadow var(--dc-transition-base);overflow:hidden}.input-wrapper--focused .input__field-box{border-color:var(--dc-primary);box-shadow:0 0 0 3px rgba(163, 166, 255, 0.12)}.input-wrapper--error .input__field-box{border-color:var(--dc-error);box-shadow:0 0 0 3px rgba(255, 180, 171, 0.1)}.input-wrapper--disabled{opacity:0.5;pointer-events:none}.input__field{display:block;width:100%;padding:var(--dc-space-2) var(--dc-space-4);background:transparent;border:none;outline:none;color:var(--dc-on-surface);font-family:var(--dc-font-body);font-size:var(--dc-body-md);height:44px}.input__field::placeholder{color:var(--dc-on-surface-variant);opacity:0.6}.input__message{display:flex;align-items:center;gap:var(--dc-space-1);font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant)}.input__message--error{color:var(--dc-error)}`;

const DcInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcChange = createEvent(this, "dcChange", 7);
        this.dcInput = createEvent(this, "dcInput", 7);
        this.dcFocus = createEvent(this, "dcFocus", 7);
        this.dcBlur = createEvent(this, "dcBlur", 7);
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.type = 'text';
        this.error = false;
        this.errorMessage = '';
        this.helperText = '';
        this.disabled = false;
        this.readonly = false;
        this.name = '';
        this.focused = false;
        this.innerValue = '';
        this.handleInput = (e) => {
            const target = e.target;
            this.innerValue = target.value;
            this.dcInput.emit(target.value);
        };
        this.handleChange = (e) => {
            const target = e.target;
            this.dcChange.emit(target.value);
        };
        this.handleFocus = () => {
            this.focused = true;
            this.dcFocus.emit();
        };
        this.handleBlur = () => {
            this.focused = false;
            this.dcBlur.emit();
        };
    }
    componentWillLoad() {
        this.innerValue = this.value;
    }
    render() {
        const hasError = this.error;
        const wrapperClass = [
            'input-wrapper',
            hasError ? 'input-wrapper--error' : '',
            this.focused ? 'input-wrapper--focused' : '',
            this.disabled ? 'input-wrapper--disabled' : '',
        ].filter(Boolean).join(' ');
        return (h("div", { key: '9973fc5e101503b63bc060f0e0c5f3eba3367543', class: wrapperClass }, this.label && (h("label", { key: '0fcf79b73c6a04ecd40b2d0f1cc85f87cc5fd6ac', class: "input__label" }, this.label)), h("div", { key: '135a4b38ddcaf1a09e968cc629ee3cf59a2261af', class: "input__field-box" }, h("input", { key: '9aa11ddc2c5808ee174f5279b8d5544a3392f389', class: "input__field", type: this.type, placeholder: this.placeholder, value: this.innerValue, disabled: this.disabled, readonly: this.readonly, name: this.name, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur })), hasError && this.errorMessage && (h("span", { key: 'eafa6c55b09c8b8fbcd5cd1f2350993cf7c9199f', class: "input__message input__message--error" }, h("svg", { key: '619cef649ef4e5b82df131844e336a06f3881ad1', width: "12", height: "12", viewBox: "0 0 24 24", fill: "none" }, h("circle", { key: '23c0e89e4c895e2884ff99031c0f282fa8435e96', cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "2" }), h("line", { key: '377ffaea6f80ee4806ad824fd0de312d94fd0f52', x1: "12", y1: "8", x2: "12", y2: "12", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }), h("line", { key: 'd1d67467a4f4f4a97b4da3822d536031ad63112a', x1: "12", y1: "16", x2: "12.01", y2: "16", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" })), this.errorMessage)), !hasError && this.helperText && (h("span", { key: 'ac62c67973896a90db17efd5c0029695a1a7fe79', class: "input__message" }, this.helperText))));
    }
};
DcInput.style = lusterInputCss();

export { DcInput as luster_input };
//# sourceMappingURL=luster-input.entry.esm.js.map

//# sourceMappingURL=luster-input.entry.js.map