import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Output() clickButton: EventEmitter<void> = new EventEmitter();
  @Input() text?: string;
  @Input() icon?: string;
  @Input() disabled: boolean = false;

  handleClick(): void {
    this.clickButton.emit();
  }
}
