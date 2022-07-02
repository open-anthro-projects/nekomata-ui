<script lang="ts">
    let clazz = '';
    export {clazz as class}
    export let id:string = null;
	export let active = false;
    export let variant = "modal";
    export let anchor: "left" | "right" | "top" | "bottom" = "left";
    export let style:string = null;
    export let data_testid:string = null;
</script>

<style>

    .nm-ui-drawer-left{
        left: var(--nm-ui-drawer-left, 0);
        top: var(--nm-ui-drawer-top, 0);
        bottom: var(--nm-ui-drawer-bottom, 0);
        width: var(--nm-ui-drawer-width, 256px);
        
    }

    .nm-ui-drawer-inactive-left{
        transform: var(--nm-ui-drawer-transform, translate(-100%,0));
    }
    
    .nm-ui-drawer-right{
        right: var(--nm-ui-drawer-right, 0);
        top: var(--nm-ui-drawer-top, 0);
        bottom: var(--nm-ui-drawer-bottom, 0);
        width: var(--nm-ui-drawer-width, 256px);
    }

    .nm-ui-drawer-inactive-right{
        transform: var(--nm-ui-drawer-transform, translate(100%,0));
    }

    .nm-ui-drawer-top{
        left: var(--nm-ui-drawer-left, 0);
        top: var(--nm-ui-drawer-top, 0);
        right: var(--nm-ui-drawer-right, 0);
        height: var(--nm-ui-drawer-height, 256px);
       
    }
    
    .nm-ui-drawer-inactive-top{
        transform: var(--nm-ui-drawer-transform, translate(0,-100%));
    }

    .nm-ui-drawer-bottom{
        left: var(--nm-ui-drawer-left, 0);
        bottom: var(--nm-ui-drawer-bottom, 0);
        right: var(--nm-ui-drawer-right, 0);
        height: var(--nm-ui-drawer-height, 256px);
    }

    .nm-ui-drawer-inactive-bottom{
        transform: var(--nm-ui-drawer-transform, translate(0, 100%));
    }

    .nm-ui-drawer-active{
        transform: var(--nm-ui-drawer-active-transform, translate(0,0));
    }
    
    .nm-ui-drawer-modal{
        z-index: var(--nm-ui-drawer-z-index, 1200);
        position: var(--nm-ui-drawer-position, fixed);
    }

    .nm-ui-drawer{
        flex: var(--nm-ui-drawer-flex, 1 0 auto);
        display: var(--nm-ui-drawer-display, flex);
        outline: var(--nm-ui-drawer-outline, 0);
        overflow: var(--nm-ui-drawer-overflow, auto);
        -webkit-overflow-scrolling: var(--nm-ui-drawer-webkit-overflow-scrolling, touch);
        background-color: var(--nm-ui-drawer-background-color, #fff);
        transition-duration: var(--nm-ui-drawer-transition-duration, 0.5s);
        transition-timing-function: var(--nm-ui-drawer-transition-timing-function, cubic-bezier(0.2, 0, 0.5, 1));
        will-change: var(--nm-ui-drawer-will-change, auto);
        transition-property: var(--nm-ui-drawer-transition-property, transform, visibility, width);
    }

</style>

<aside {id} data-testid={data_testid} class="{clazz} nm-ui-drawer" 
    class:nm-ui-drawer-left = {anchor === 'left'}
    class:nm-ui-drawer-right = {anchor === 'right'}
    class:nm-ui-drawer-top = {anchor === 'top'}  
    class:nm-ui-drawer-bottom = {anchor === 'bottom'}     
    class:nm-ui-drawer-active = {active === true}
    class:nm-ui-drawer-inactive-left = {active === false && anchor === 'left'}
    class:nm-ui-drawer-inactive-right = {active === false && anchor === 'right'}
    class:nm-ui-drawer-inactive-top = {active === false && anchor === 'top'}
    class:nm-ui-drawer-inactive-bottom = {active === false && anchor === 'bottom'}
    class:nm-ui-drawer-modal = {variant === 'modal'}
    {style}>
        <slot/>
</aside>