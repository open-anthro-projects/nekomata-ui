<script lang="ts">
    let clazz = '';
    export {clazz as class}
    export let id:string = null;
    export let style:string = null;
    export let css_profile: 'default' | 'a' = 'default';
    export let d: string;
    export let viewBox = "0 0 24 24"
    export let data_testid:string = null;
</script>

<style>
    .nm-ui-svg-icon{
        height: var(--nm-ui-svg-icon-height, 1.5rem);
        width: var(--nm-ui-svg-icon-width, 1.5rem);
        fill: var(--nm-ui-svg-icon-fill, currentColor);
    }

    .nm-ui-svg-icon-a{
        height: var(--nm-ui-svg-icon-a-height, 1.5rem);
        width: var(--nm-ui-svg-icon-a-width, 1.5rem);
        fill: var(--nm-ui-svg-icon-a-fill, currentColor);
    }
</style>

<svg {id} data-testid={data_testid} 
class:nm-ui-svg-icon = {css_profile === 'default'}
class:nm-ui-svg-icon-a = {css_profile === 'a'}  
class="{clazz}" {style} 
focusable="false" {viewBox} 
aria-hidden="true">
    <path d={d} />
</svg>