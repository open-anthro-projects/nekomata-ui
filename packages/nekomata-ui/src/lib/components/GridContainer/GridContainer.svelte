<script lang="ts">
  let clazz = '';
  export {clazz as class}
  export let id:string = null;
  export let style:string = null;
  /* istanbul ignore next */
  export let data_testid:string = null;
</script>

<style>
  .nm-ui-grid-container{
    display: var(--nm-ui-grid-container-display, grid);
    background-color: var(--nm-ui-grid-container-background-color, inherit);
    color: var(--nm-ui-grid-container-color, inherit);
    grid-template-columns: var(--nm-ui-grid-container-grid-template-columns, none);
    grid-template-rows: var(--nm-ui-grid-container-grid-template-rows, none);
    grid-template-areas: var(--nm-ui-grid-container-grid-template-areas, none);
    gap: var(--gap_Def, var(--nm-ui-grid-container-gap, 16px 16px));
    justify-items: var(--nm-ui-grid-container-justify-items, stretch);
    padding: var(--nm-ui-grid-container-padding, 16px 16px 16px 16px);
    margin: var(--nm-ui-grid-container-margin, 0px 0px 0px 0px);
    align-items: var(--nm-ui-grid-container-align-items, stretch);
    justify-content: var(--nm-ui-grid-container-justify-content, initial);
    align-content: var(--nm-ui-grid-container-align-content, initial);
    grid-auto-columns:var(--nm-ui-grid-container-grid-auto-columns, 1fr);
    grid-auto-rows: var(--nm-ui-grid-container-grid-auto-rows, 1fr);
    grid-auto-flow: var(--nm-ui-grid-container-grid-auto-flow, row);
  }
</style>

<div {id} data-testid={data_testid} class="{clazz} nm-ui-grid-container" {style}>
  <slot />
</div>