import { Component, Prop, h } from '@stencil/core';

export interface ResourceRow {
  name: string;
  category: string;
  status: 'active' | 'stable' | 'beta' | 'deprecated';
  score: number;
}

@Component({
  tag: 'luster-resource-table',
  styleUrl: 'luster-resource-table.css',
  shadow: true,
})
export class DcResourceTable {
  @Prop() rows: ResourceRow[] | string = '[]';

  private parsedRows: ResourceRow[] = [];

  componentWillLoad() {
    if (typeof this.rows === 'string') {
      try { this.parsedRows = JSON.parse(this.rows); } catch { this.parsedRows = []; }
    } else {
      this.parsedRows = this.rows as ResourceRow[];
    }
  }

  private getStatusVariant(status: string): 'success' | 'primary' | 'beta' | 'error' {
    if (status === 'active') return 'success';
    if (status === 'stable') return 'primary';
    if (status === 'beta') return 'beta';
    return 'error';
  }

  private renderScoreBar(score: number) {
    const color = score >= 80 ? 'var(--dc-primary)' : score >= 50 ? 'var(--dc-warning)' : 'var(--dc-error)';
    return (
      <div class="score-bar">
        <div class="score-bar__track">
          <div class="score-bar__fill" style={{ width: `${score}%`, background: color }} />
        </div>
        <span class="score-bar__label">{score}</span>
      </div>
    );
  }

  render() {
    return (
      <div class="resource-table">
        <div class="resource-table__header">
          <span class="resource-table__section-label">Resource Registry</span>
          <div class="resource-table__actions">
            <button class="resource-table__filter-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
              Filter
            </button>
            <luster-button variant="primary" size="sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
              New Resource
            </luster-button>
          </div>
        </div>

        <table class="resource-table__table">
          <thead>
            <tr>
              <th class="resource-table__th">Resource Name</th>
              <th class="resource-table__th">Category</th>
              <th class="resource-table__th">Status</th>
              <th class="resource-table__th">Score</th>
              <th class="resource-table__th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.parsedRows.map((row, i) => (
              <tr key={i} class="resource-table__row">
                <td class="resource-table__td resource-table__td--name">
                  <div class="resource-table__name-cell">
                    <div class="resource-table__row-icon" />
                    <span class="resource-table__name">{row.name}</span>
                  </div>
                </td>
                <td class="resource-table__td">
                  <span class="resource-table__category">{row.category}</span>
                </td>
                <td class="resource-table__td">
                  <luster-badge variant={this.getStatusVariant(row.status)} dot>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </luster-badge>
                </td>
                <td class="resource-table__td">
                  {this.renderScoreBar(row.score)}
                </td>
                <td class="resource-table__td">
                  <button class="resource-table__action-btn" aria-label="More actions">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                      <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
