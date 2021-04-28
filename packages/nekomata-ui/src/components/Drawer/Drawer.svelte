<script lang="ts">
    interface DrawerProps {
        left?: String;
        top?: String;
        bottom?: String;
        right?: String;
        width?: String;
        height?: String;
        transform?: String;
        activeTransform?: String;
        position: String;
        zIndex?: Number;
        flex?: String;
        display?: String;
        outline?: String;
        overflow?: String;
        flexDirection?: String;
        webkitOverflowScrolling?: String;
        backgroundColor?: String;
        transitionDuration?: String;
        transitionTimingFunction?: String;
        willChange?: String;
        transitionProperty?: String;
        style?: String;
    }

	export let active = false;
    export let variant: "modal" | "persistent" = "modal";
    export let anchor: "left" | "right" | "top" | "bottom" = "left";

    export let props: DrawerProps
    let clazz = '';
    export {clazz as class}

    function buildCSSStyleString(drawerProps: DrawerProps){
        let styleString = ""; 
        for (const key in drawerProps) {
            if (key !== "style"){
            styleString = styleString + " --drawer-"+ `${key}`+ ": " + `${drawerProps[key]};`;
            } else {
            styleString = styleString + ` ${drawerProps[key]};`
            }
        }
        if (styleString === ""){
            return null;
        } else {
            return styleString;
        }
    }

    $: style = buildCSSStyleString(props);

</script>

<style>

    .left{
        left: var(--drawer-left, 0);
        top: var(--drawer-top, 0);
        bottom: var(--drawer-bottom, 0);
        width: var(--drawer-width, 256px);
        transform: var(--drawer-transform, translate(-100%,0));
    }

    
    .right{
        right: var(--drawer-right, 0);
        top: var(--drawer-top, 0);
        bottom: var(--drawer-bottom, 0);
        width: var(--drawer-width, 256px);
        transform: var(--drawer-transform, translate(100%,0));
    }

    .top{
        left: var(--drawer-left, 0);
        top: var(--drawer-top, 0);
        right: var(--drawer-right, 0);
        height: var(--drawer-height, 256px);
        transform: var(--drawer-transform, translate(0,-100%));
    }

    .bottom{
        left: var(--drawer-left, 0);
        bottom: var(--drawer-bottom, 0);
        right: var(--drawer-right, 0);
        height: var(--drawer-height, 256px);
        transform: var(--drawer-transform, translate(0,0));
    }

    .active{
        transform: var(--drawer-activeTransform, translate(0,0));
    }
    
    .modal{
        z-index: var(--drawer-zIndex, 1200);
        position: var(--drawer-position, fixed);
    }

    .drawer{
        flex: var(--drawer-flex, 1 0 auto);
        display: var(--drawer-display, flex);
        outline: var(--drawer-outline, 0);
        overflow: var(--drawer-overflow, auto);
        flex-direction:  var(--drawer-flexDirection, column);
        -webkit-overflow-scrolling: var(--drawer-webkitOverflowScrolling, touch);
        background-color: var(--drawer-backgroundColor, #fff);
        transition-duration: var(--drawer-transitionDuration, 0.5s);
        transition-timing-function: var(--drawer-transitionTimingFunction, cubic-bezier(0.2, 0, 0.5, 1));
        will-change: var(--drawer-willChange, auto);
        transition-property: var(--drawer-transitionProperty, transform, visibility, width);
    }

</style>

<aside data-testid="drawer" class="{clazz} drawer" 
    class:left = {anchor === 'left'}
    class:right = {anchor === 'right'}
    class:top = {anchor === 'top'}  
    class:bottom = {anchor === 'bottom'}     
    class:active 
    class:modal = {variant === 'modal'}
    style={style}>
        <slot/>
</aside>