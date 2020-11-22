<script lang="ts">
  import type { AppBarProps } from './types'
  import { buildCSSStyleString } from './functions'
  export let props: AppBarProps
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
    position: var(--appbar-position, "initial");
  }

  .style {
    color: var(--appbar-color, initial);
    background-color: var(--appbar-backgroundColor, initial);
    transition: var(--appbar-transition, initial);
    box-shadow: var(--appbar-boxShadow, initial);
  }
</style>

{#if cssStyleString == ""}
  <header class="style position">
    <slot />
  </header>
{:else}
  <header class="style position" style="{cssStyleString}">
    <slot />
  </header>
{/if}
