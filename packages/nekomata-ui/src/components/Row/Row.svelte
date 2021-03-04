<script lang="ts">
  interface RowProps {
   display?: String;
   minHeight?: String;
   position?: String;
   alignItems?: String;
   padding?: String;
   margin?: String;
   flexWrap?: String;
   minHeight_MW_600px?: String;
   padding_MW_600px?: String;
   margin_MW_600px?: String;
   padding_Def?: String;
   margin_Def?: String;
   minHeight_Def?: String;
   minHeight_FallB?: String;
 }

 export let props: RowProps
 let clazz = '';
 export {clazz as class}

 function buildCSSStyleString(rowProps:RowProps){
  let styleString = ""; 
  for (const key in rowProps) {
    if (key !== "style"){
      styleString = styleString + " --row-"+ `${key}`+ ": " + `${rowProps[key]};`; 
    } else {
      styleString = styleString + ` ${rowProps[key]};`
    }
  }
  return styleString;
 }


 let cssStyleString = buildCSSStyleString(props);
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

{#if cssStyleString == ""}
 <div data-testid="row" class="{clazz} row">
   <slot />
 </div>
{:else}
 <div data-testid="row" class="{clazz} row" style="{cssStyleString}">
   <slot />
 </div>
{/if}