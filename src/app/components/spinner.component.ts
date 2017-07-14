import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent {
}
