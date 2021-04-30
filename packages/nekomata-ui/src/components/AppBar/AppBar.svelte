<script lang="ts">
  import type AppBarStyleProps from './AppBarStyleProps'
  import {buildCSS_StyleString} from './../../common'
  export let props: AppBarStyleProps
  let clazz = '';
  export {clazz as class}

  const cssVarKey = "--appbar-";

  $: style = buildCSS_StyleString(cssVarKey, props);
</script>

<style>
  header {
    width: var(--appbar-width, 100%);
    display: var(--appbar-display, flex);
    flex-shrink: var(--appbar-flexShrink, 0);
    flex-direction: var(--appbar-flexDirection, column);
    box-sizing: var(--appbar-boxSizing, border-box);
    z-index: var(--appbar-zIndex, 1100);
  }

  .position {
    top: var(--appbar-top, initial);
    left: var(--appbar-left, initial);
    right: var(--appbar-right, initial);
    bottom: var(--appbar-bottom, initial);
    position: var(--appbar-position, fixed);
  }

  .style {
    color: var(--appbar-color, initial);
    background-color: var(--appbar-backgroundColor, initial);
    transition: var(--appbar-transition, initial);
    box-shadow: var(--appbar-boxShadow, initial);
    border-width: var(--appbar-borderWidth, initial); 
    border-style: var(--appbar-borderStyle, initial); 
    border-color: var(--appbar-borderColor, initial);
    border-radius: var(--appbar-borderRadius, initial);
  }
</style>

<header data-testid="header" class="{clazz} style position" style={style}>
  <slot />
</header>