import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterResourceTableCss = () => `:host{display:block}.resource-table{background:var(--dc-surface-container-high);border-radius:var(--dc-round-4);overflow:hidden}.resource-table__header{display:flex;align-items:center;justify-content:space-between;padding:var(--dc-space-4) var(--dc-space-6);border-bottom:1px solid rgba(64, 72, 93, 0.2)}.resource-table__section-label{font-family:var(--dc-font-display);font-size:var(--dc-title-sm);font-weight:700;color:var(--dc-on-surface)}.resource-table__actions{display:flex;align-items:center;gap:var(--dc-space-3)}.resource-table__filter-btn{display:flex;align-items:center;gap:var(--dc-space-2);padding:var(--dc-space-1) var(--dc-space-3);background:rgba(64, 72, 93, 0.2);border:1px solid rgba(64, 72, 93, 0.35);border-radius:var(--dc-round-2);color:var(--dc-on-surface-variant);font-family:var(--dc-font-body);font-size:var(--dc-label-md);font-weight:500;cursor:pointer;transition:all var(--dc-transition-fast)}.resource-table__filter-btn:hover{background:rgba(64, 72, 93, 0.35);color:var(--dc-on-surface)}.resource-table__table{width:100%;border-collapse:collapse}.resource-table__th{padding:var(--dc-space-3) var(--dc-space-6);text-align:left;font-size:var(--dc-label-sm);font-weight:700;color:var(--dc-on-surface-variant);letter-spacing:var(--dc-tracking-wide);text-transform:uppercase;background:var(--dc-surface-container)}.resource-table__row{transition:background var(--dc-transition-fast);border-bottom:1px solid rgba(64, 72, 93, 0.12)}.resource-table__row:hover{background:rgba(163, 166, 255, 0.04)}.resource-table__row:last-child{border-bottom:none}.resource-table__td{padding:var(--dc-space-3) var(--dc-space-6);vertical-align:middle}.resource-table__name-cell{display:flex;align-items:center;gap:var(--dc-space-3)}.resource-table__row-icon{width:32px;height:32px;border-radius:var(--dc-round-2);background:rgba(163, 166, 255, 0.1);flex-shrink:0}.resource-table__name{font-size:var(--dc-body-sm);font-weight:600;color:var(--dc-on-surface)}.resource-table__category{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant)}.score-bar{display:flex;align-items:center;gap:var(--dc-space-3)}.score-bar__track{flex:1;height:4px;background:rgba(64, 72, 93, 0.4);border-radius:var(--dc-round-full);overflow:hidden;min-width:80px}.score-bar__fill{height:100%;border-radius:var(--dc-round-full);transition:width var(--dc-transition-slow)}.score-bar__label{font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant);min-width:24px}.resource-table__action-btn{background:none;border:none;color:var(--dc-on-surface-variant);cursor:pointer;padding:var(--dc-space-1);border-radius:var(--dc-round-2);display:flex;align-items:center;transition:all var(--dc-transition-fast)}.resource-table__action-btn:hover{background:rgba(64, 72, 93, 0.3);color:var(--dc-on-surface)}`;

const DcResourceTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rows = '[]';
        this.parsedRows = [];
    }
    componentWillLoad() {
        if (typeof this.rows === 'string') {
            try {
                this.parsedRows = JSON.parse(this.rows);
            }
            catch (_a) {
                this.parsedRows = [];
            }
        }
        else {
            this.parsedRows = this.rows;
        }
    }
    getStatusVariant(status) {
        if (status === 'active')
            return 'success';
        if (status === 'stable')
            return 'primary';
        if (status === 'beta')
            return 'beta';
        return 'error';
    }
    renderScoreBar(score) {
        const color = score >= 80 ? 'var(--dc-primary)' : score >= 50 ? 'var(--dc-warning)' : 'var(--dc-error)';
        return (h("div", { class: "score-bar" }, h("div", { class: "score-bar__track" }, h("div", { class: "score-bar__fill", style: { width: `${score}%`, background: color } })), h("span", { class: "score-bar__label" }, score)));
    }
    render() {
        return (h("div", { key: '6bdeb9b52ef5582e7f0e8c393c9227c80f84f008', class: "resource-table" }, h("div", { key: 'e0487a74bad62fa8b102dff89a0830a5699b5ed0', class: "resource-table__header" }, h("span", { key: '569ff5a31ce8851b717d860cac1572a2276b4570', class: "resource-table__section-label" }, "Resource Registry"), h("div", { key: '1188c11c3ac56f061e7b8e429ca4124cf4eb9003', class: "resource-table__actions" }, h("button", { key: '6918269ebfdc7036de0f215af7917f6c4fd30fef', class: "resource-table__filter-btn" }, h("svg", { key: 'df3013ce155e854c73e119b4cb6460a64dc8c745', width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("polygon", { key: '8c6e8e05f16f1ae2381ea5854cfbe895d649b50c', points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", stroke: "currentColor", "stroke-width": "2", "stroke-linejoin": "round" })), "Filter"), h("luster-button", { key: '8f279527c0c382383606b8adc630fd073d1a0228', variant: "primary", size: "sm" }, h("svg", { key: '9084bef4d4a7c36a65ec2ad638e8ac2306fe9e8b', width: "12", height: "12", viewBox: "0 0 24 24", fill: "none" }, h("line", { key: 'f0fe5080bf336f57543d7c2674c89133799c446e', x1: "12", y1: "5", x2: "12", y2: "19", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round" }), h("line", { key: '2ba13c955df243e207f23412fd83711d739bd7c7', x1: "5", y1: "12", x2: "19", y2: "12", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round" })), "New Resource"))), h("table", { key: 'babbd76b01ed435059b1aa464bfb8b18d232b055', class: "resource-table__table" }, h("thead", { key: 'c4c6c3da19b5fc1ffd6054972d5984559e91ba21' }, h("tr", { key: '99ef959a0097257388338bd19fdd5bc5c3034135' }, h("th", { key: '4620f3a90752404ed11a6b0fb5bd61b46593bdc6', class: "resource-table__th" }, "Resource Name"), h("th", { key: '56a8d39b968cb1792df91eb33a15f52e25b5f033', class: "resource-table__th" }, "Category"), h("th", { key: '2f73489d579a24238ff62bccd275869afcf5ca5e', class: "resource-table__th" }, "Status"), h("th", { key: '6bacb56a5f7243da34c64da024aee65eadf86183', class: "resource-table__th" }, "Score"), h("th", { key: '7a0d111e4a20b1d249343c3b0f7c5a1125aff7eb', class: "resource-table__th" }, "Actions"))), h("tbody", { key: '86dbffb47088aac4ca6f549e5813c3cab148419a' }, this.parsedRows.map((row, i) => (h("tr", { key: i, class: "resource-table__row" }, h("td", { class: "resource-table__td resource-table__td--name" }, h("div", { class: "resource-table__name-cell" }, h("div", { class: "resource-table__row-icon" }), h("span", { class: "resource-table__name" }, row.name))), h("td", { class: "resource-table__td" }, h("span", { class: "resource-table__category" }, row.category)), h("td", { class: "resource-table__td" }, h("luster-badge", { variant: this.getStatusVariant(row.status), dot: true }, row.status.charAt(0).toUpperCase() + row.status.slice(1))), h("td", { class: "resource-table__td" }, this.renderScoreBar(row.score)), h("td", { class: "resource-table__td" }, h("button", { class: "resource-table__action-btn", "aria-label": "More actions" }, h("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none" }, h("circle", { cx: "12", cy: "5", r: "1.5", fill: "currentColor" }), h("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }), h("circle", { cx: "12", cy: "19", r: "1.5", fill: "currentColor" })))))))))));
    }
};
DcResourceTable.style = lusterResourceTableCss();

export { DcResourceTable as luster_resource_table };
//# sourceMappingURL=luster-resource-table.entry.esm.js.map

//# sourceMappingURL=luster-resource-table.entry.js.map