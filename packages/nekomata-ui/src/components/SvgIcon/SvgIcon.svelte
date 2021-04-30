<script lang="ts">
    import type SVGStyleProps from './SVGStyleProps'
    import {buildCSS_StyleString} from './../../common'

    export let props: SVGStyleProps;
    export let d: string;
    export let viewBox = "0 0 24 24"
    let clazz = '';
    export {clazz as class}

    const cssVarKey = "--svgIcon-";

    $: style = buildCSS_StyleString(cssVarKey, props);
</script>

<style>
    .svgIcon{
        height: var(--svgIcon-height, 1.5em);
        width: var(--svgIcon-width, 1.5em);
        fill: var(--svgIcon-fill, currentColor);
    }
</style>

<svg data-testid="svgIcon" class="{clazz} svgIcon" style={style} focusable="false" viewBox={viewBox} aria-hidden="true">
    <path d={d} />
</svg>
