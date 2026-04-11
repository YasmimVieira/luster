import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-toggle',
  styleUrl: 'luster-toggle.css',
  shadow: true,
})
export class DcToggle {
  @Prop() label: string = '';
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;

  @State() innerChecked: boolean = false;

  @Event() dcChange!: EventEmitter<boolean>;

  componentWillLoad() {
    this.innerChecked = this.checked;
  }

  private handleToggle = () => {
    if (!this.disabled) {
      this.innerChecked = !this.innerChecked;
      this.dcChange.emit(this.innerChecked);
    }
  };

  render() {
    return (
      <label class={`toggle ${this.disabled ? 'toggle--disabled' : ''}`}>
        {this.label && <span class="toggle__label">{this.label}</span>}
        <button
          class={`toggle__track ${this.innerChecked ? 'toggle__track--on' : ''}`}
          role="switch"
          aria-checked={this.innerChecked ? 'true' : 'false'}
          disabled={this.disabled}
          onClick={this.handleToggle}
        >
          <span class="toggle__thumb" />
        </button>
      </label>
    );
  }
}
