import {
    RangeSeekBarBase,
    RangeSeekBarEventData,
    barColorCssProperty,
    barColorProperty,
    barHeightCssProperty,
    barHeightProperty,
    barHighlightColorCssProperty,
    barHighlightColorProperty,
    cornerRadiusCssProperty,
    cornerRadiusProperty,
    maxValueProperty,
    minRangeProperty,
    minValueProperty,
    stepProperty,
    thumbColorCssProperty,
    thumbColorProperty,
    valueMaxProperty,
    valueMinProperty
} from './index.common';

import { Color, Utils } from '@nativescript/core';
export { RangeSeekBarEventData } from './index.common';

export class RangeSeekBar extends RangeSeekBarBase {
    nativeView: TTRangeSlider;
    rangeSeekBarDelegate: TTRangeSliderDelegateImpl;

    public createNativeView() {
        const rangeSlider = TTRangeSlider.new();
        rangeSlider.hideLabels = true;
        rangeSlider.enableStep = true;
        rangeSlider.step = 1;
        rangeSlider.handleDiameter = Utils.layout.toDeviceIndependentPixels(20 * 2);
        rangeSlider.lineHeight = Utils.layout.toDeviceIndependentPixels(5);
        rangeSlider.selectedMinimum = 0;
        rangeSlider.selectedMaximum = 0;
        rangeSlider.selectedHandleDiameterMultiplier = 1.0;
        return rangeSlider;
    }

    public onLoaded() {
        super.onLoaded();
        this.nativeView.frame = CGRectMake(0, 0, this.nativeView.superview.frame.size.width, 30);
        this.nativeView.delegate = this.rangeSeekBarDelegate = TTRangeSliderDelegateImpl.initWithOwner(new WeakRef<RangeSeekBar>(this));
    }

    public [minValueProperty.setNative](value: number) {
        this.nativeView.minValue = value;
    }

    public [maxValueProperty.setNative](value: number) {
        this.nativeView.maxValue = value;
    }

    public [valueMinProperty.setNative](value: number) {
        this.nativeView.selectedMinimum = value;
    }

    public [valueMaxProperty.setNative](value: number) {
        this.nativeView.selectedMaximum = value;
    }

    public [minRangeProperty.setNative](value: number) {
        this.nativeView.minDistance = value;
    }

    public [stepProperty.setNative](value: number) {
        this.nativeView.step = value;
    }

    public [cornerRadiusProperty.setNative](value: number) {
        this.nativeView.handleDiameter = Utils.layout.toDeviceIndependentPixels(value * 2);
    }

    public [cornerRadiusCssProperty.setNative](value: number) {
        this.nativeView.handleDiameter = Utils.layout.toDeviceIndependentPixels(value * 2);
    }

    public [barHeightProperty.setNative](value: number) {
        this.nativeView.lineHeight = Utils.layout.toDeviceIndependentPixels(value);
    }

    public [barHeightCssProperty.setNative](value: number) {
        this.nativeView.lineHeight = Utils.layout.toDeviceIndependentPixels(value);
    }

    public [barColorProperty.setNative](value: Color) {
        this.nativeView.tintColor = value.ios;
    }

    public [barColorCssProperty.setNative](value: Color) {
        this.nativeView.tintColor = value.ios;
    }

    public [barHighlightColorProperty.setNative](value: Color) {
        this.nativeView.tintColorBetweenHandles = value.ios;
    }

    public [barHighlightColorCssProperty.setNative](value: Color) {
        this.nativeView.tintColorBetweenHandles = value.ios;
    }

    public [thumbColorProperty.setNative](value: Color) {
        this.nativeView.handleColor = value.ios;
    }

    public [thumbColorCssProperty.setNative](value: Color) {
        this.nativeView.handleColor = value.ios;
    }
}

@ObjCClass(TTRangeSliderDelegate)
@NativeClass()
export class TTRangeSliderDelegateImpl extends NSObject implements TTRangeSliderDelegate {
    public owner: WeakRef<RangeSeekBar>;

    public static initWithOwner(owner: WeakRef<RangeSeekBar>): TTRangeSliderDelegateImpl {
        const delegate = TTRangeSliderDelegateImpl.new() as TTRangeSliderDelegateImpl;
        delegate.owner = owner;
        return delegate;
    }

    public rangeSliderDidChangeSelectedMinimumValueAndMaximumValue(sender: TTRangeSlider, selectedMinimum: number, selectedMaximum: number): void {
        const owner = this.owner?.get();
        if (owner) {
            const args = {
                eventName: RangeSeekBarBase.valueChangedEvent,
                object: owner,
                value: {
                    valueMin: sender.selectedMinimum,
                    valueMax: sender.selectedMaximum
                }
            } as RangeSeekBarEventData;
            owner.notify(args);
        }
    }

    public didEndTouchesInRangeSlider(sender: TTRangeSlider): void {
        const owner = this.owner?.get();
        if (owner) {
            const args = {
                eventName: RangeSeekBarBase.finalValueChangedEvent,
                object: owner,
                value: {
                    valueMin: sender.selectedMinimum,
                    valueMax: sender.selectedMaximum
                }
            } as RangeSeekBarEventData;
            owner.notify(args);
        }
    }
}
