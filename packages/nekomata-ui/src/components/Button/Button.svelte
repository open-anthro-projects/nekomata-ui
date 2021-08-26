<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let clazz = '';
    export {clazz as class}
    export let id:string = null;
    export let style:string = null;
    export let data_testid:string = null;

    function click() {
        dispatch('click');
	  }

  </script>

<style>

  .nm-ui-icon-button {
    flex: var(--nm-ui-icon-button-flex, 0 0 auto);
    display: var(--nm-ui-icon-button-display, inline-flex);
    align-items: var(--nm-ui-icon-button-align-items, center);
    justify-content: var(--nm-ui-icon-button-justify-content, center);
    position: var(--nm-ui-icon-button-position, relative);
    box-sizing: var(--nm-ui-icon-button-box-sizing, border-box);
    outline: var(--nm-ui-icon-button-outline, 0);
    margin: var(--nm-ui-icon-button-margin, 0);
    transition: var(--nm-ui-icon-button-transition, background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms);
    cursor: var(--nm-ui-icon-button-cursor, pointer);
    user-select: var(--nm-ui-icon-button-user-select, none);
    vertical-align: var(--nm-ui-icon-button-vertical-align, middle);
    padding: var(--nm-ui-icon-button-padding, 12px);
    text-decoration: var(--nm-ui-icon-button-text-decoration, none);
    text-align: var(--nm-ui-icon-button-text-align, center);
    font-size: var(--nm-ui-icon-button-font-size, 1.75rem);
    overflow: var(--nm-ui-icon-button-overflow, visible);
  }

  .nm-ui-icon-button-style:hover {
    background-color: var(--nm-ui-icon-button-background-color-hover, rgba(0, 0, 0, 0.04));
  }

  .nm-ui-icon-button-style {
    border: var(--nm-ui-icon-button-border, 0px);
    color: var(--nm-ui-icon-button-color, inherit);
    border-radius: var(--nm-ui-icon-button-border-radius, 50%);
    background-color: var(--nm-ui-icon-button-background-color, transparent);
  }
</style>

<button on:click={click} {id} data-testid={data_testid} 
  class="nm-ui-icon-button nm-ui-icon-button-style {clazz} "
  style={style}>
  <slot />
</button>