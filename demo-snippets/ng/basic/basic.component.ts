import { Component } from '@angular/core';
import { RangeSeekBarEventData } from '@nativescript-community/ui-range-seek-bar';

@Component({
    selector: 'ns-basic',
    templateUrl: 'basic.component.html'
})
export class BasicComponent {
    public rangeSeekBarProp = {
        minValue: 0,
        maxValue: 100,
        valueMin: 10,
        valueMax: 70,
        minRange: 0,
        step: 1
    };

    valueChanged(event: RangeSeekBarEventData) {
        console.log('valueChanged: ', event.value);
    }

    finalValueChanged(event: RangeSeekBarEventData) {
        console.log('finalValueChanged: ', event.value);
    }
}
