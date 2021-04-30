<script lang="ts">
  import type RowStyleProps from './RowStyleProps'
  import {buildCSS_StyleString} from './../../common'

  export let props: RowStyleProps
  let clazz = '';
  export {clazz as class}

  const cssVarKey = "--row-";

  $: style = buildCSS_StyleString(cssVarKey, props);
</script>

<style>

  .row {
      display: var(--row-display, flex);
      position: var(--row-position, relative);
      align-items: var(--row-alignItems, center);
      padding: var(--row-padding_Def, var(--row-padding, 0px 16px 0px 16px));
      margin: var(--row-margin_Def, var(--row-margin, 0px 0px 0px 0px));
      min-height: var(--row-minHeight_Def, var(--row-minHeight, 56px));
      flex-wrap: var(--row-flexWrap, wrap);
  }

  @media (min-width: 0px) and (orientation: landscape){
    .row {
      min-height: var(--row-minHeight_FallB, var(--row-minHeight, 48px));
    }
  }

  @media (min-width: 600px) {
    .row {
      min-height: var(--row-minHeight_MW_600px, var(--row-minHeight, 64px));
      padding: var(--row-padding_MW_600px, var(--row-padding, 0px 24px 0px 24px));
      margin: var(--row-margin_MW_600px, var(--row-margin, 0px 0px 0px 0px));
    }
  }

</style>


 <div data-testid="row" class="{clazz} row" style={style}>
   <slot />
 </div>