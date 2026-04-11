import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

export interface TabItem {
  label: string;
  value: string;
}

@Component({
  tag: 'luster-tabs',
  styleUrl: 'luster-tabs.css',
  shadow: true,
})
export class DcTabs {
  @Prop() tabs: TabItem[] | string = '';
  @Prop() active: string = '';

  @State() activeTab: string = '';

  @Event() dcTabChange!: EventEmitter<string>;

  private parsedTabs: TabItem[] = [];

  componentWillLoad() {
    if (typeof this.tabs === 'string') {
      try {
        this.parsedTabs = JSON.parse(this.tabs);
      } catch {
        this.parsedTabs = [];
      }
    } else {
      this.parsedTabs = this.tabs as TabItem[];
    }
    this.activeTab = this.active || (this.parsedTabs[0]?.value ?? '');
  }

  private selectTab(value: string) {
    this.activeTab = value;
    this.dcTabChange.emit(value);
  }

  render() {
    return (
      <div class="tabs">
        <div class="tabs__list" role="tablist">
          {this.parsedTabs.map(tab => (
            <button
              key={tab.value}
              class={`tabs__tab ${this.activeTab === tab.value ? 'tabs__tab--active' : ''}`}
              role="tab"
              aria-selected={this.activeTab === tab.value ? 'true' : 'false'}
              onClick={() => this.selectTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <slot />
      </div>
    );
  }
}
