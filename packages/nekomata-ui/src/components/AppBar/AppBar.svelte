<script lang="ts">
  let clazz = '';
  export {clazz as class}
  export let id:string = null;
  export let style:string = null;
  export let variant: 'top' | 'bottom' = 'top';
  export let data_testid:string = null;
  
</script>

<style>
  .nm-ui-appbar-header {
    width: var(--nm-ui-appbar-width, 100%);
    display: var(--nm-ui-appbar-display, flex);
    flex-shrink: var(--nm-ui-appbar-flex-shrink, 0);
    flex-direction: var(--nm-ui-appbar-flex-direction, column);
    box-sizing: var(--nm-ui-appbar-box-sizing, border-box);
    z-index: var(--nm-ui-appbar-z-index, 1100);
    position: var(--nm-ui-appbar-position, fixed);
    left: var(--nm-ui-appbar-left, initial);
    right: var(--nm-ui-appbar-right, initial);
  }

  .nm-ui-appbar-top {
    top: var(--nm-ui-appbar-top, 0px);
  }

  .nm-ui-appbar-bottom {
    bottom: var(--nm-ui-appbar-bottom, 0px);
  }

  .nm-ui-appbar-style {
    color: var(--nm-ui-appbar-color, initial);
    background-color: var(--nm-ui-appbar-background-color, initial);
    transition: var(--nm-ui-appbar-transition, initial);
    box-shadow: var(--nm-ui-appbar-box-shadow, initial);
    border-width: var(--nm-ui-appbar-border-width, initial); 
    border-style: var(--nm-ui-appbar-border-style, initial); 
    border-color: var(--nm-ui-appbar-border-color, initial);
    border-radius: var(--nm-ui-appbar-border-radius, initial);
  }
</style>

<header {id} data-testid={data_testid} 
  class:nm-ui-appbar-top = {variant === 'top'} 
  class:nm-ui-appbar-bottom = {variant === 'bottom'} 
  class="nm-ui-appbar-header nm-ui-appbar-style  {clazz}" 
  style={style}>
  <slot />
</header>