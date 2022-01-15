<script lang="ts">
  let clazz = '';
  export {clazz as class}
  export let id:string = null;
  export let style:string = null;
  export let variant: 'row' | 'column' = 'row';
  export let css_profile: 'default' | 'a' = 'default';
  /* istanbul ignore next */
  export let data_testid:string = null;
</script>

<style>
  .nm-ui-flex-box-row {
      flex-direction: var(--nm-ui-flex-box-row-flex-direction, row);
      display: var(--nm-ui-flex-box-row-display, flex);
      position: var(--nm-ui-flex-box-row-position, relative);
      align-items: var(--nm-ui-flex-box-row-align-items, center);
      padding: var(--nm-ui-flex-box-row-padding, 0px 16px 0px 16px);
      margin: var(--nm-ui-flex-box-row-margin, 0px 0px 0px 0px);
      min-height: var(--nm-ui-flex-box-row-min-height, 56px);
      flex-wrap: var(--nm-ui-flex-box-row-flex-wrap, wrap);
  }

  .nm-ui-flex-box-column {
      flex-direction: var(--nm-ui-flex-box-column-flex-direction, column);
      display: var(--nm-ui-flex-box-column-display, flex);
      position: var(--nm-ui-flex-box-column-position, relative);
      align-items: var(--nm-ui-flex-box-column-align-items, center);
      padding: var(--nm-ui-flex-box-column-padding, 0px 0px 0px 0px);
      margin: var(--nm-ui-flex-box-column-margin, 0px 0px 0px 0px);
      min-width: var(--nm-ui-flex-box-column-min-width, 100%);
      flex-wrap: var(--nm-ui-flex-box-column-flex-wrap, wrap);
  }

  .nm-ui-flex-box-row-a {
      flex-direction: var(--nm-ui-flex-box-row-a-flex-direction, row);
      display: var(--nm-ui-flex-box-row-a-display, flex);
      position: var(--nm-ui-flex-box-row-a-position, relative);
      align-items: var(--nm-ui-flex-box-row-a-align-items, center);
      padding: var(--nm-ui-flex-box-row-a-padding, 0px 16px 0px 16px);
      margin: var(--nm-ui-flex-box-row-a-margin, 0px 0px 0px 0px);
      min-height: var(--nm-ui-flex-box-row-a-min-height, 56px);
      flex-wrap: var(--nm-ui-flex-box-row-a-flex-wrap, wrap);
  }

  .nm-ui-flex-box-column-a {
      flex-direction: var(--nm-ui-flex-box-column-a-flex-direction, column);
      display: var(--nm-ui-flex-box-column-a-display, flex);
      position: var(--nm-ui-flex-box-column-a-position, relative);
      align-items: var(--nm-ui-flex-box-column-a-align-items, center);
      padding: var(--nm-ui-flex-box-column-a-padding, 0px 0px 0px 0px);
      margin: var(--nm-ui-flex-box-column-a-margin, 0px 0px 0px 0px);
      min-width: var(--nm-ui-flex-box-column-a-min-width, 100%);
      flex-wrap: var(--nm-ui-flex-box-column-a-flex-wrap, wrap);
  }
</style>

 <div {id} data-testid={data_testid}
  class:nm-ui-flex-box-row = {variant === 'row' && css_profile === 'default'}
  class:nm-ui-flex-box-row-a = {variant === 'row' && css_profile === 'a'}
  class:nm-ui-flex-box-column = {variant === 'column' && css_profile === 'default'}
  class:nm-ui-flex-box-column-a = {variant === 'column' && css_profile === 'a'}
  class="{clazz}" {style}>
   <slot />
 </div>