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
    leftThumbColorCssProperty,
    leftThumbColorProperty,
    leftThumbHighlightCssProperty,
    leftThumbHighlightProperty,
    maxValueProperty,
    minRangeProperty,
    minValueProperty,
    rightThumbColorCssProperty,
    rightThumbColorProperty,
    rightThumbHighlightCssProperty,
    rightThumbHighlightProperty,
    stepProperty,
    thumbColorCssProperty,
    thumbColorProperty,
    valueMaxProperty,
    valueMinProperty
} from './index.common';

export { RangeSeekBarEventData } from './index.common';

import { Color } from '@nativescript/core';

function roundToStep(value, step) {
    return Math.round(value / step) * step;
}

export class RangeSeekBar extends RangeSeekBarBase {
    nativeView: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
    ignoreChangeEvent = true;
    public createNativeView() {
        const crystalRangeSeekBar = new com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar(this._context);
        crystalRangeSeekBar.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.LONG);
        crystalRangeSeekBar.setSteps(1).setCornerRadius(20).setBarHeight(5).setMinStartValue(0).setMaxStartValue(0).apply();
        initRangeSeekbarChangeListener();
        const rangeSeekbarChangeListener = new RangeSeekbarChangeListener(new WeakRef<RangeSeekBar>(this));
        crystalRangeSeekBar.setOnRangeSeekbarChangeListener(rangeSeekbarChangeListener);
        initRangeSeekbarFinalValueListener();
        const rangeSeekbarFinalValueListener = new RangeSeekbarFinalValueListener(new WeakRef<RangeSeekBar>(this));
        crystalRangeSeekBar.setOnRangeSeekbarFinalValueListener(rangeSeekbarFinalValueListener);
        this.ignoreChangeEvent = false;
        return crystalRangeSeekBar;
    }
    update() {
        this.ignoreChangeEvent = true;
        this.nativeView.setMaxStartValue(this.valueMax).setMinStartValue(this.valueMin).setMinValue(this.minValue).setMaxValue(this.maxValue).apply();
        this.ignoreChangeEvent = false;
    }

    public [minValueProperty.setNative](value: number) {
        this.update();
    }

    public [maxValueProperty.setNative](value: number) {
        this.update();
    }

    public [valueMinProperty.setNative](value: number) {
        this.update();
    }

    public [valueMaxProperty.setNative](value: number) {
        this.update();
    }

    public [minRangeProperty.setNative](value: number) {
        this.nativeView.setGap(value);
        this.update();
    }

    public [stepProperty.setNative](value: number) {
        if (Number.isInteger(value)) {
            this.nativeView.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.LONG);
        } else {
            this.nativeView.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.DOUBLE);
        }
        this.nativeView.setSteps(value);
        this.update();
    }

    public [cornerRadiusProperty.setNative](value: number) {
        this.nativeView.setCornerRadius(value);
    }

    public [cornerRadiusCssProperty.setNative](value: number) {
        this.nativeView.setCornerRadius(value);
    }

    public [barHeightProperty.setNative](value: number) {
        this.nativeView.setBarHeight(value).apply();
    }

    public [barHeightCssProperty.setNative](value: number) {
        this.nativeView.setBarHeight(value).apply();
    }

    public [barColorProperty.setNative](value: Color) {
        this.nativeView.setBarColor(value.android);
    }

    public [barColorCssProperty.setNative](value: Color) {
        this.nativeView.setBarColor(value.android);
    }

    public [barHighlightColorProperty.setNative](value: Color) {
        this.nativeView.setBarHighlightColor(value.android);
    }

    public [barHighlightColorCssProperty.setNative](value: Color) {
        this.nativeView.setBarHighlightColor(value.android);
    }

    public [thumbColorProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
        this.nativeView.setRightThumbColor(value.android);
        this.nativeView.setLeftThumbHighlightColor(value.android);
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [thumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
        this.nativeView.setRightThumbColor(value.android);
        this.nativeView.setLeftThumbHighlightColor(value.android);
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [leftThumbColorProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
    }

    public [leftThumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
    }

    public [rightThumbColorProperty.setNative](value: Color) {
        this.nativeView.setRightThumbColor(value.android);
    }

    public [rightThumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setRightThumbColor(value.android);
    }

    public [leftThumbHighlightProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbHighlightColor(value.android);
    }

    public [leftThumbHighlightCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbHighlightColor(value.android);
    }

    public [rightThumbHighlightProperty.setNative](value: Color) {
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [rightThumbHighlightCssProperty.setNative](value: Color) {
        this.nativeView.setRightThumbHighlightColor(value.android);
    }
}

// RangeSeekbarChangeListener START
interface RangeSeekbarChangeListener extends java.lang.Object, com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener {
    new (owner: WeakRef<RangeSeekBar>): RangeSeekbarChangeListener;
}

// eslint-disable-next-line no-redeclare
let RangeSeekbarChangeListener: RangeSeekbarChangeListener;

function initRangeSeekbarChangeListener() {
    if (RangeSeekbarChangeListener) {
        return;
    }
    @Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener])
    @NativeClass()
    class RangeSeekbarChangeListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener {
        constructor(private owner: WeakRef<RangeSeekBar>) {
            super();
            return global.__native(this);
        }

        public valueChanged(valueMin: any, valueMax: any): void {
            const owner = this.owner?.get();
            if (owner && !owner.ignoreChangeEvent) {
                const step = owner.step;
                const args = {
                    eventName: RangeSeekBarBase.valueChangedEvent,
                    object: owner,
                    value: {
                        valueMin: roundToStep(valueMin, step),
                        valueMax: roundToStep(valueMax, step)
                    }
                } as RangeSeekBarEventData;
                owner.notify(args);
            }
        }
    }
    RangeSeekbarChangeListener = RangeSeekbarChangeListenerImpl as any;
}
// RangeSeekbarChangeListener END

// RangeSeekbarFinalValueListener START
interface RangeSeekbarFinalValueListener extends java.lang.Object, com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {
    new (owner: WeakRef<RangeSeekBar>): RangeSeekbarFinalValueListener;
}

// eslint-disable-next-line no-redeclare
let RangeSeekbarFinalValueListener: RangeSeekbarFinalValueListener;

function initRangeSeekbarFinalValueListener() {
    if (RangeSeekbarFinalValueListener) {
        return;
    }

    @NativeClass()
    @Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener])
    class RangeSeekbarFinalValueListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {
        constructor(private owner: WeakRef<RangeSeekBar>) {
            super();
            return global.__native(this);
        }

        public finalValue(valueMin: any, valueMax: any): void {
            const owner = this.owner?.get();
            if (owner) {
                const step = owner.step;
                const args = {
                    eventName: RangeSeekBarBase.finalValueChangedEvent,
                    object: owner,
                    value: {
                        valueMin: roundToStep(valueMin, step),
                        valueMax: roundToStep(valueMax, step)
                    }
                } as RangeSeekBarEventData;
                owner.notify(args);
            }
        }
    }
    RangeSeekbarFinalValueListener = RangeSeekbarFinalValueListenerImpl as any;
}
// RangeSeekbarFinalValueListener END
