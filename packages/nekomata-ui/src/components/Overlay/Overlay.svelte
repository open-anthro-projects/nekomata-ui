<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let clazz = '';
    export {clazz as class}
    export let id:string = null;
    export let style:string = null;
    export let css_profile: 'default' | 'a' = 'default';
    export let data_testid:string = null;
    
    function click() {
        dispatch('click');
	}

</script>

<style>
    .nm-ui-overlay{
        position: var(--nm-ui-overlay-position, fixed); 
        display: var(--nm-ui-overlay-display, none);
        width: var(--nm-ui-overlay-width, 100%);
        height: var(--nm-ui-overlay-height, 100%);
        top: var(--nm-ui-overlay-top, 0);
        left: var(--nm-ui-overlay-left, 0);
        right: var(--nm-ui-overlay-right, 0);
        bottom: var(--nm-ui-overlay-bottom, 0);
        background-color: var(--nm-ui-overlay-background-color, rgba(0,0,0,0.5));
        z-index: var(--nm-ui-overlay-z-index, 1150);
        cursor: var(--nm-ui-overlay-cursor, pointer);
        transition-duration: var(--nm-ui-overlay-transition-duration, 0.5s);
        transition-timing-function: var(--nm-ui-overlay-transition-timing-function, cubic-bezier(0.2, 0, 0.5, 1));
        transition-property: var(--nm-ui-overlay-transition-property, display);
    }

    .nm-ui-overlay-a{
        position: var(--nm-ui-overlay-position-a, fixed); 
        display: var(--nm-ui-overlay-display-a, none);
        width: var(--nm-ui-overlay-a-width, 100%); 
        height: var(--nm-ui-overlay-a-height, 100%); 
        top: var(--nm-ui-overlay-a-top, 0);
        left: var(--nm-ui-overlay-a-left, 0);
        right: var(--nm-ui-overlay-a-right, 0);
        bottom: var(--nm-ui-overlay-a-bottom, 0);
        background-color: var(--nm-ui-overlay-a-background-color, rgba(0,0,0,0.5));
        z-index: var(--nm-ui-overlay-a-z-index, 1150);
        cursor: var(--nm-ui-overlay-a-cursor, pointer);
        transition-duration: var(--nm-ui-overlay-a-transition-duration, 0.5s);
        transition-timing-function: var(--nm-ui-overlay-a-transition-timing-function, cubic-bezier(0.2, 0, 0.5, 1));
        transition-property: var(--nm-ui-overlay-a-transition-property, display);
    }
</style>

<div on:click={click} {id} data-testid={data_testid} 
class:nm-ui-overlay = {css_profile === 'default'}
class:nm-ui-overlay-a = {css_profile === 'a'}
class="{clazz}"
style={style}>
<slot/>
</div>