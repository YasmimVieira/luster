import { r as registerInstance, a as createEvent, h } from './index-BBzp1U1H.js';

const lusterTabsCss = () => `:host{display:block}.tabs{display:flex;flex-direction:column;gap:var(--dc-space-4)}.tabs__list{display:flex;align-items:center;gap:var(--dc-space-1);background:var(--dc-surface-container-low);border-radius:var(--dc-round-2);padding:var(--dc-space-1);width:fit-content}.tabs__tab{padding:var(--dc-space-1) var(--dc-space-4);border:none;border-radius:var(--dc-round-1);background:transparent;color:var(--dc-on-surface-variant);font-family:var(--dc-font-body);font-size:var(--dc-body-sm);font-weight:500;cursor:pointer;transition:all var(--dc-transition-fast);white-space:nowrap}.tabs__tab:hover{color:var(--dc-on-surface);background:rgba(64, 72, 93, 0.3)}.tabs__tab--active{background:var(--dc-surface-container-high);color:var(--dc-on-surface);font-weight:600}`;

const DcTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dcTabChange = createEvent(this, "dcTabChange", 7);
        this.tabs = '';
        this.active = '';
        this.activeTab = '';
        this.parsedTabs = [];
    }
    componentWillLoad() {
        var _a, _b;
        if (typeof this.tabs === 'string') {
            try {
                this.parsedTabs = JSON.parse(this.tabs);
            }
            catch (_c) {
                this.parsedTabs = [];
            }
        }
        else {
            this.parsedTabs = this.tabs;
        }
        this.activeTab = this.active || ((_b = (_a = this.parsedTabs[0]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '');
    }
    selectTab(value) {
        this.activeTab = value;
        this.dcTabChange.emit(value);
    }
    render() {
        return (h("div", { key: '68e5a001a3c7e9f98a9239b18a3a54c8ded0c961', class: "tabs" }, h("div", { key: '5d14c39512d3e64c8a76745480b8a5789349d488', class: "tabs__list", role: "tablist" }, this.parsedTabs.map(tab => (h("button", { key: tab.value, class: `tabs__tab ${this.activeTab === tab.value ? 'tabs__tab--active' : ''}`, role: "tab", "aria-selected": this.activeTab === tab.value ? 'true' : 'false', onClick: () => this.selectTab(tab.value) }, tab.label)))), h("slot", { key: '2412bfdc1670989f3c348b1f289572cec10bd80f' })));
    }
};
DcTabs.style = lusterTabsCss();

export { DcTabs as luster_tabs };
//# sourceMappingURL=luster-tabs.entry.esm.js.map

//# sourceMappingURL=luster-tabs.entry.js.map