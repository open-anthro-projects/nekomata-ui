<script lang="ts">
    import { AppBar, themeStore, FlexBox, SvgIcon, Button, Drawer, Overlay} from 'nekomata-ui'

    let drawerVisible = false;
</script>

<style>
    :global(body) {
        margin: 0px;
        font-family: Roboto, sans-serif;
    }

    .nekomata-ui{
        --nm-ui-appbar-background-color: #1976d2;
        --nm-ui-appbar-color: white;
        --nm-ui-appbar-a-background-color: #1976d2;
        --nm-ui-appbar-a-color: white;
        --nm-ui-appbar-a-position: static;
        --nm-ui-overlay-transition-property: none;
        --nm-ui-overlay-cursor: auto;
    }

    @media only screen and (min-width: 600px){
        .nekomata-ui{
            --nm-ui-flex-box-row-min-height: 64px;
        }
    }

    .drawer{
        --nm-ui-overlay-display: block;
        --nm-ui-flex-box-column-align-items: stretch;
    }

    a{
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 500;
        font-weight: 500;
        letter-spacing: 0.0125em;
        text-decoration: inherit;
        text-transform: inherit;
        padding-left: 20px;
        padding-right: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        z-index: 1;
    }
</style>

<div class:drawer={drawerVisible === true} class="nekomata-ui">
    <AppBar>
        <FlexBox>
            <Button on:click={() => drawerVisible = !drawerVisible}>
                <SvgIcon d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon>
            </Button>
            <a href="/">Nekomata-ui</a>
        </FlexBox>
    </AppBar>
    <Overlay on:click={() => drawerVisible = !drawerVisible}/>
    <Drawer active={drawerVisible}>
        <FlexBox variant="column">
            <AppBar css_profile={"a"}>
                <FlexBox>
                    <Button on:click={() => drawerVisible = !drawerVisible}>
                        <SvgIcon d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon>
                    </Button>
                    <a href="/">Nekomata-ui</a>
                </FlexBox>
            </AppBar>
            <ul>
                <li>about</li>
            </ul>
        </FlexBox>
    </Drawer>
    <slot></slot>
</div>