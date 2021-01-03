<script lang="ts">
   interface AppBarProps {
    display?: String;
    flexDirection?: String;
    boxSizing?: String;
    width?: String;
    flexShrink?: String;
    position?: String;
    zIndex?: Number;
    top?: String;
    left?: String;
    right?: String;
    bottom?: String;
    backgroundColor?: String;
    color?: String;
    boxShadow?: String;
    transition?: String;
    borderWidth?: String;
    borderStyle?: String;
    borderColor?: String;
    borderRadius?: String;
  }

  export let props: AppBarProps

  function buildCSSStyleString(appBarProps:AppBarProps){
    let styleString = ""; 
    for (const key in appBarProps) {
        styleString = styleString + "--appbar-"+ `${key}`+ ": " + `${appBarProps[key]};` + " " 
    }
    return styleString;
  }

  let cssStyleString = buildCSSStyleString(props);
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
    position: var(--appbar-position, initial);
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

{#if cssStyleString == ""}
  <header title="header" class="{$$restProps.class || ''} style position">
    <slot />
  </header>
{:else}
  <header title="header" class="{$$restProps.class || ''} style position" style="{cssStyleString}">
    <slot />
  </header>
{/if}