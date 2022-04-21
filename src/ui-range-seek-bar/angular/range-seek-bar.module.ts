import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
registerElement('RangeSeekBar', () => require('../').RangeSeekBar);

@NgModule({
    schemas: [NO_ERRORS_SCHEMA]
})
export class RangeSeekBarModule {}
