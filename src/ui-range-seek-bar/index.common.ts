import { Color, CssProperty, EventData, Property, Style, View } from '@nativescript/core';

export interface RangeSeekBarEventData extends EventData {
    eventName: string;
    object: any;
    value: {
        valueMin: number;
        valueMax: number;
    };
}

export class RangeSeekBarBase extends View {
    public static valueChangedEvent = 'valueChanged';
    public static finalValueChangedEvent = 'finalValueChanged';
    valueMin: number;
    valueMax: number;
    minValue: number;
    maxValue: number;
    step: number;
    minRange: number;
}

function floatConverter(v) {
    const result = parseFloat(v);
    if (!isNaN(result)) {
        return result;
    }
    throw new Error('Property must be a number');
}

// Property
export const minValueProperty = new Property<RangeSeekBarBase, number>({
    name: 'minValue',
    defaultValue: 0,
    valueConverter: floatConverter
});
minValueProperty.register(RangeSeekBarBase);

export const maxValueProperty = new Property<RangeSeekBarBase, number>({
    name: 'maxValue',
    defaultValue: 0,
    valueConverter: floatConverter
});
maxValueProperty.register(RangeSeekBarBase);

export const valueMinProperty = new Property<RangeSeekBarBase, number>({
    name: 'valueMin',
    defaultValue: 0,
    valueConverter: floatConverter
});
valueMinProperty.register(RangeSeekBarBase);

export const valueMaxProperty = new Property<RangeSeekBarBase, number>({
    name: 'valueMax',
    defaultValue: 0,
    valueConverter: floatConverter
});
valueMaxProperty.register(RangeSeekBarBase);

export const minRangeProperty = new Property<RangeSeekBarBase, number>({
    name: 'minRange',
    defaultValue: 0,
    valueConverter: floatConverter
});
minRangeProperty.register(RangeSeekBarBase);

export const stepProperty = new Property<RangeSeekBarBase, number>({
    name: 'step',
    defaultValue: 1,
    valueConverter: floatConverter
});
stepProperty.register(RangeSeekBarBase);

// Style
export const cornerRadiusProperty = new Property<RangeSeekBarBase, number>({
    name: 'cornerRadius',
    defaultValue: 1,
    valueConverter: floatConverter
});
cornerRadiusProperty.register(RangeSeekBarBase);

export const cornerRadiusCssProperty = new CssProperty<Style, number>({
    name: 'cornerRadius',
    cssName: 'corner-radius',
    valueConverter: floatConverter
});
cornerRadiusCssProperty.register(Style);

export const barHeightProperty = new Property<RangeSeekBarBase, number>({
    name: 'barHeight',
    defaultValue: 2,
    valueConverter: floatConverter
});
barHeightProperty.register(RangeSeekBarBase);

export const barHeightCssProperty = new CssProperty<Style, number>({
    name: 'barHeight',
    cssName: 'bar-height',
    valueConverter: floatConverter
});
barHeightCssProperty.register(Style);

export const barColorProperty = new Property<RangeSeekBarBase, Color>({
    name: 'barColor',
    valueConverter: (v) => new Color(v)
});
barColorProperty.register(RangeSeekBarBase);

export const barColorCssProperty = new CssProperty<Style, Color>({
    name: 'barColor',
    cssName: 'bar-color',
    valueConverter: (v) => new Color(v)
});
barColorCssProperty.register(Style);

export const barHighlightColorProperty = new Property<RangeSeekBarBase, Color>({
    name: 'barHighlightColor',
    valueConverter: (v) => new Color(v)
});
barHighlightColorProperty.register(RangeSeekBarBase);

export const barHighlightColorCssProperty = new CssProperty<Style, Color>({
    name: 'barHighlightColor',
    cssName: 'bar-highlight-color',
    valueConverter: (v) => new Color(v)
});
barHighlightColorCssProperty.register(Style);

export const thumbColorProperty = new Property<RangeSeekBarBase, Color>({
    name: 'thumbColor',
    valueConverter: (v) => new Color(v)
});
thumbColorProperty.register(RangeSeekBarBase);

export const thumbColorCssProperty = new CssProperty<Style, Color>({
    name: 'thumbColor',
    cssName: 'thumb-color',
    valueConverter: (v) => new Color(v)
});
thumbColorCssProperty.register(Style);

export const leftThumbColorProperty = new Property<RangeSeekBarBase, Color>({
    name: 'leftThumbColor',
    valueConverter: (v) => new Color(v)
});
leftThumbColorProperty.register(RangeSeekBarBase);

export const leftThumbColorCssProperty = new CssProperty<Style, Color>({
    name: 'leftThumbColor',
    cssName: 'left-thumb-color',
    valueConverter: (v) => new Color(v)
});
leftThumbColorCssProperty.register(Style);

export const rightThumbColorProperty = new Property<RangeSeekBarBase, Color>({
    name: 'rightThumbColor',
    valueConverter: (v) => new Color(v)
});
rightThumbColorProperty.register(RangeSeekBarBase);

export const rightThumbColorCssProperty = new CssProperty<Style, Color>({
    name: 'rightThumbColor',
    cssName: 'right-thumb-color',
    valueConverter: (v) => new Color(v)
});
rightThumbColorCssProperty.register(Style);

export const leftThumbHighlightProperty = new Property<RangeSeekBarBase, Color>({
    name: 'leftThumbHighlight',
    valueConverter: (v) => new Color(v)
});
leftThumbHighlightProperty.register(RangeSeekBarBase);

export const leftThumbHighlightCssProperty = new CssProperty<Style, Color>({
    name: 'leftThumbHighlight',
    cssName: 'left-thumb-highlight-color',
    valueConverter: (v) => new Color(v)
});
leftThumbHighlightCssProperty.register(Style);

export const rightThumbHighlightProperty = new Property<RangeSeekBarBase, Color>({
    name: 'rightThumbHighlight',
    valueConverter: (v) => new Color(v)
});
rightThumbHighlightProperty.register(RangeSeekBarBase);

export const rightThumbHighlightCssProperty = new CssProperty<Style, Color>({
    name: 'rightThumbHighlight',
    cssName: 'right-thumb-highlight-color',
    valueConverter: (v) => new Color(v)
});
rightThumbHighlightCssProperty.register(Style);
