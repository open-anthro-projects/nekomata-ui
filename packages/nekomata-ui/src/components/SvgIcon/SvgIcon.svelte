<script lang="ts">
    let clazz = '';
    export {clazz as class}
    export let id:string = null;
    export let style:string = null;
    export let d: string;
    export let viewBox = "0 0 24 24"
    export let data_testid:string = null;
</script>

<style>
    .nm-ui-svg-icon{
        height: var(--nm-ui-svgIcon-height, 1.5em);
        width: var(--nm-ui-svgIcon-width, 1.5em);
        fill: var(--nm-ui-svgIcon-fill, currentColor);
    }
</style>

<svg {id} data-testid={data_testid} class="{clazz} nm-ui-svg-icon" {style} focusable="false" {viewBox} aria-hidden="true">
    <path d={d} />
</svg>
