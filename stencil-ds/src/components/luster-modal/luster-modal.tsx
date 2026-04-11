import { Component, Prop, State, Event, EventEmitter, Watch, h } from '@stencil/core';

@Component({
  tag: 'luster-modal',
  styleUrl: 'luster-modal.css',
  shadow: true,
})
export class DcModal {
  @Prop({ mutable: true }) open: boolean = false;
  @Prop() heading: string = '';
  @Prop() subtitle: string = '';
  @Prop() confirmLabel: string = 'Proceed';
  @Prop() cancelLabel: string = 'Cancel';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @State() visible: boolean = false;

  @Event() dcClose!: EventEmitter<void>;
  @Event() dcConfirm!: EventEmitter<void>;

  @Watch('open')
  watchOpen(newValue: boolean) {
    this.visible = newValue;
  }

  componentWillLoad() {
    this.visible = this.open;
  }

  private handleClose = () => {
    this.open = false;
    this.visible = false;
    this.dcClose.emit();
  };

  private handleConfirm = () => {
    this.dcConfirm.emit();
    this.handleClose();
  };

  render() {
    if (!this.visible) return null;

    return (
      <div class="modal-overlay" onClick={e => { if ((e.target as Element).classList.contains('modal-overlay')) this.handleClose(); }}>
        <div class={`modal modal--${this.size}`} role="dialog" aria-modal="true">
          <div class="modal__header">
            {this.heading && <h2 class="modal__title">{this.heading}</h2>}
            {this.subtitle && <p class="modal__subtitle">{this.subtitle}</p>}
            <button class="modal__close" onClick={this.handleClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <div class="modal__body">
            <slot />
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <luster-button variant="secondary" onDcClick={this.handleClose}>{this.cancelLabel}</luster-button>
              <luster-button variant="primary" onDcClick={this.handleConfirm}>{this.confirmLabel}</luster-button>
            </slot>
          </div>
        </div>
      </div>
    );
  }
}
