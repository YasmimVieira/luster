import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'luster-input',
  styleUrl: 'luster-input.css',
  shadow: true,
})
export class DcInput {
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() value: string = '';
  @Prop() type: string = 'text';
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = '';
  @Prop() helperText: string = '';
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() name: string = '';

  @State() focused: boolean = false;
  @State() innerValue: string = '';

  @Event() dcChange!: EventEmitter<string>;
  @Event() dcInput!: EventEmitter<string>;
  @Event() dcFocus!: EventEmitter<void>;
  @Event() dcBlur!: EventEmitter<void>;

  componentWillLoad() {
    this.innerValue = this.value;
  }

  private handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.innerValue = target.value;
    this.dcInput.emit(target.value);
  };

  private handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.dcChange.emit(target.value);
  };

  private handleFocus = () => {
    this.focused = true;
    this.dcFocus.emit();
  };

  private handleBlur = () => {
    this.focused = false;
    this.dcBlur.emit();
  };

  render() {
    const hasError = this.error;
    const wrapperClass = [
      'input-wrapper',
      hasError ? 'input-wrapper--error' : '',
      this.focused ? 'input-wrapper--focused' : '',
      this.disabled ? 'input-wrapper--disabled' : '',
    ].filter(Boolean).join(' ');

    return (
      <div class={wrapperClass}>
        {this.label && (
          <label class="input__label">{this.label}</label>
        )}
        <div class="input__field-box">
          <input
            class="input__field"
            type={this.type}
            placeholder={this.placeholder}
            value={this.innerValue}
            disabled={this.disabled}
            readonly={this.readonly}
            name={this.name}
            onInput={this.handleInput}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
        {hasError && this.errorMessage && (
          <span class="input__message input__message--error">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            {this.errorMessage}
          </span>
        )}
        {!hasError && this.helperText && (
          <span class="input__message">{this.helperText}</span>
        )}
      </div>
    );
  }
}
