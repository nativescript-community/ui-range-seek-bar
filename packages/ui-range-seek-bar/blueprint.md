{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

| <img src="https://raw.githubusercontent.com/nativescript-community/ui-range-seek-bar/master/images/demo-ios.gif" height="500" /> | <img src="https://raw.githubusercontent.com/nativescript-community/ui-range-seek-bar/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

### Based on
[TTRangeSlider ](https://github.com/TomThorpe/TTRangeSlider) for iOS

[Crystal Range Seekbar](https://github.com/syedowaisali/crystal-range-seekbar) for Android

## API
### Events
* **valueChanged**  
Triggered when user has changed minimum value or maximum value on the Range Seek Bar.
* **finaValueChanged**  
Triggered when user has finished touch on the Range Seek Bar.
### Instance Properties
* **minValue** - *Number*  
Gets or sets minimum value of the Range Seek Bar.
* **maxValue** - *Number*  
Gets or sets maximum value of the Range Seek Bar.
* **valueMin** - *Number*  
Gets or sets minimum start value of the Range Seek Bar.
* **valueMax** - *Number*  
Gets or sets maximum start value of the Range Seek Bar.
* **minRange** - *Number*  
Gets or sets minimum range of two thumb.
* **step** - *Number*  
Gets or sets minimum steps between range, default is 1.
* **cornerRadius** - *Number*  
Gets or sets corner radius of two thumb.
* **barHeight** - *Number*  
Gets or sets bar height of the Range Seek Bar.
* **barColor** - *Color*  
Gets or sets bar color of the Range Seek Bar.
* **barHighlightColor** - *Color*  
Gets or sets bar highlight color of the Range Seek Bar.
* **thumbColor** - *Color*  
Gets or sets color of two thumb.

## Usage in Angular
- Import `NativeScriptUIRangeSeekBarModule` in `NgModule`:
```typescript
import { NativeScriptUIRangeSeekBarModule } from "nativescript-range-seek-bar/angular";
//......
@NgModule({
	//......
	imports: [
        //......
		NativeScriptUIRangeSeekBarModule,
        //......
	],
    //......
})
```
```html
<!-- app.component.html -->
<StackLayout>
    <RangeSeekBar [minValue]="rangeSeekBarProp.minValue" [maxValue]="rangeSeekBarProp.maxValue" [valueMin]="rangeSeekBarProp.valueMin"
        [valueMax]="rangeSeekBarProp.valueMax" [minRange]="rangeSeekBarProp.minRange" [step]="rangeSeekBarProp.step"
        (valueChanged)="valueChanged($event)" (finaValueChanged)="finaValueChanged($event)" class="range-seek-bar"></RangeSeekBar>
</StackLayout>
```
```css
/*app.css*/
.range-seek-bar {
    bar-color: #8990C4;
    bar-highlight-color: #2434AD;
    thumb-color: #1A246D;
    bar-height: 10;
    corner-radius: 30;
}
```
```ts
// app.component.ts
import { Component } from "@angular/core";
import { RangeSeekBarEventData } from "nativescript-range-seek-bar";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    public rangeSeekBarProp = {
        minValue: 0,
        maxValue: 100,
        valueMin: 0,
        valueMax: 100,
        minRange: 0,
        step: 1
    };

    constructor() { }

    valueChanged(event: RangeSeekBarEventData) {
        console.log("valueChanged: ", event.value);
    }

    finaValueChanged(event: RangeSeekBarEventData) {
        console.log("finaValueChanged: ", event.value);
    }
}

```

### Examples:

- [Basic range-seek-bar](demo-snippets/vue/Basicrange-seek-bar.vue)
  - A basic sliding range-seek-bar.
- [All Sides](demo-snippets/vue/AllSides.vue)
  - An example of range-seek-bars on all sides: left, right, top, bottom.

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}