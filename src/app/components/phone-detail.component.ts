import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import Phone from '../models/phone';

@Component({
  selector: 'phone-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})


export class PhoneDetailComponent {
  @Input() item: Phone;

  get formattedFeatures() {
    var featuresArray = [];
    var jsonData = JSON.parse(this.item.phoneFeatures);
    for (var i = 0; i < jsonData.length; i++) {
        featuresArray.push(jsonData[i]);
    }
    return featuresArray;
  };
}
