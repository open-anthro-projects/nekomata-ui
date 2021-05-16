<script lang="ts">
  let clazz = '';
  export {clazz as class}
  export let id:string = null;
  export let style:string = null;
  export let data_testid:string = null;
</script>

<style>
  .row {
      display: var(--nm-ui-row-display, flex);
      position: var(--nm-ui-row-position, relative);
      align-items: var(--nm-ui-row-align-items, center);
      padding: var(--nm-ui-row-padding, 0px 16px 0px 16px);
      margin: var(--nm-ui-row-margin, 0px 0px 0px 0px);
      min-height: var(--nm-ui-row-min-height, 56px);
      flex-wrap: var(--nm-ui-row-flex-wrap, wrap);
  }
</style>

 <div {id} data-testid={data_testid} class="row {clazz}" {style}>
   <slot />
 </div>