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
    style?: String;
  }

  export let props: AppBarProps
  let clazz = '';
  export {clazz as class}

  function buildCSSStyleString(appBarProps:AppBarProps){
    let styleString = ""; 
    for (const key in appBarProps) {
        if (key !== "style"){
          styleString = styleString + " --appbar-"+ `${key}`+ ": " + `${appBarProps[key]};`;
        } else {
          styleString = styleString + `${appBarProps[key]};`
        }
    }
    if (styleString === ""){
      return null;
    } else {
      return styleString;
    }
  }

  $: style = buildCSSStyleString(props);
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