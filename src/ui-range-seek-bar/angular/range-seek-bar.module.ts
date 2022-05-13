import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { RangeSeekBar } from '@nativescript-community/ui-range-seek-bar';
registerElement('RangeSeekBar', () => RangeSeekBar);

@NgModule({
    schemas: [NO_ERRORS_SCHEMA]
})
export class RangeSeekBarModule {}
