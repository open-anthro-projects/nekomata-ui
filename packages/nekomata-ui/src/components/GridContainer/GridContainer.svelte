<script lang="ts">
   interface GridContainerProps {
    display?: String;
    backgroundColor?: String;
    color?: String;
    gridTemplateColumns?: String;
    gridTemplateRows?: String;
    gridTemplateAreas?: String;
    gap?: String;
    gap_MW_600px?: String;
    gap_Def?: String;
    justifyItems?: String;
    padding?: String;
    margin?: String;
    padding_MW_600px?: String;
    margin_MW_600px?: String;
    padding_Def?: String;
    margin_Def?: String;
    alignItems?: String;
    justifyContent?: String;
    alignContent?: String;
    gridAutoColumns?: String;
    gridAutoRows?: String;
    gridAutoFlow?: String;
  }

  export let props: GridContainerProps

  function buildCSSStyleString(gridContainerProps:GridContainerProps){
    let styleString = ""; 
    for (const key in gridContainerProps) {
        styleString = styleString + "--grid-container-"+ `${key}`+ ": " + `${gridContainerProps[key]};` + " " 
    }
    return styleString;
  }

  let cssStyleString = buildCSSStyleString(props);
</script>

<style>
 .grid-container{
    display: var(--grid-container-display, grid);
    background-color: var(--grid-container-backgroundColor, inherit);
    color: var(--grid-container-color, inherit);
    grid-template-columns: var(--grid-container-gridTemplateColumns, repeat(12, 1fr));
    grid-template-rows: var(--grid-container-gridTemplateRows, none);
    grid-template-areas: var(--grid-container-gridTemplateAreas, none);
    gap: var(--gap_Def, var(--grid-container-gap, 16px 16px));
    justify-items: var(--grid-container-justifyItems, stretch);
    padding: var(--grid-container-padding_Def, var(--grid-container-padding, 16px 16px 16px 16px));
    margin: var(--grid-container-margin_Def, var(--grid-container-margin, 0px 0px 0px 0px));
    align-items: var(--grid-container-alignItems, stretch);
    justify-content: var(--grid-container-justifyContent, initial);
    align-content: var(--grid-container-alignContent, initial);
    grid-auto-columns:var(--grid-container-gridAutoColumns, 1fr);
    grid-auto-rows: var(--grid-container-gridAutoRows, 1fr);
    grid-auto-flow: var(--grid-container-gridAutoFlow, row);
 }
 
 @media (min-width: 600px) {
    .grid-container{
      gap: var(--gap_MW_600px, var(--grid-container-gap, 16px 16px));
      padding: var(--grid-container-padding_MW_600px, var(--grid-container-padding, 24px 24px 24px 24px));
      margin: var(--grid-container-margin_MW_600px, var(--grid-container-margin, 0px 0px 0px 0px));
    }
  }

</style>

{#if cssStyleString == ""}
  <div title="grid-container" class="{$$restProps.class || ''} grid-container">
    <slot />
  </div>
{:else}
  <div title="grid-container" class="{$$restProps.class || ''} grid-container" style="{cssStyleString}">
    <slot />
  </div>
{/if}