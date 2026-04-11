import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-checkbox',
  styleUrl: 'luster-checkbox.css',
  shadow: true,
})
export class DcCheckbox {
  @Prop() label: string = '';
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() indeterminate: boolean = false;
  @Prop() value: string = '';

  @State() innerChecked: boolean = false;

  @Event() dcChange!: EventEmitter<boolean>;

  componentWillLoad() {
    this.innerChecked = this.checked;
  }

  private handleChange = () => {
    if (!this.disabled) {
      this.innerChecked = !this.innerChecked;
      this.dcChange.emit(this.innerChecked);
    }
  };

  render() {
    return (
      <label class={`checkbox ${this.disabled ? 'checkbox--disabled' : ''}`} onClick={this.handleChange}>
        <span class={`checkbox__box ${this.innerChecked ? 'checkbox__box--checked' : ''} ${this.indeterminate ? 'checkbox__box--indeterminate' : ''}`}>
          {this.innerChecked && !this.indeterminate && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}
          {this.indeterminate && (
            <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
              <line x1="1" y1="1" x2="9" y2="1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          )}
        </span>
        {this.label && <span class="checkbox__label">{this.label}</span>}
      </label>
    );
  }
}
