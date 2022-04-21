<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Basic Pager" />
        </ActionBar>
        <GridLayout paddingTop="30">
            <GridLayout class="page" columns="auto,*,auto" verticalAlignment="center">
                <Label :text="rangeSeekBarProp.valueMin" width="70" />
                <RangeSeekBar
                    col="1"
                    :minValue="rangeSeekBarProp.minValue"
                    :maxValue="rangeSeekBarProp.maxValue"
                    :valueMin="rangeSeekBarProp.valueMin"
                    :valueMax="rangeSeekBarProp.valueMax"
                    :minRange="rangeSeekBarProp.minRange"
                    :step="rangeSeekBarProp.step"
                    @valueChanged="valueChanged($event)"
                    @finalValueChanged="finalValueChanged($event)"
                    class="range-seek-bar"
                />
                <Label col="2" :text="rangeSeekBarProp.valueMax" width="70" />
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { RangeSeekBarEventData } from '@nativescript-community/ui-range-seek-bar';
export default {
    data() {
        return {
            rangeSeekBarProp: {
                minValue: 0,
                maxValue: 100,
                valueMin: 10,
                valueMax: 60,
                minRange: 10,
                step: 2.4
            }
        };
    },
    methods: {
        valueChanged(event: RangeSeekBarEventData) {
            Object.assign(this.rangeSeekBarProp, event.value);
        },
        finalValueChanged(event: RangeSeekBarEventData) {
            Object.assign(this.rangeSeekBarProp, event.value);
        }
    }
};
</script>

<style lang="scss" scoped>
.range-seek-bar {
    bar-color: #8990c4;
    bar-highlight-color: #2434ad;
    thumb-color: #1a246d;
    bar-height: 10;
    corner-radius: 30;
}
</style>
