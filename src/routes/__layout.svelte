<script lang="ts">
    import { AppBar, themeStore, Row, SvgIcon, Button, Drawer} from 'nekomata-ui'

    let drawerVisible = false;
</script>

<style>
    :global(body) {
        margin: 0px;
    }

    .nekomata-ui{
        --nm-ui-appbar-background-color: #1976d2;
        --nm-ui-appbar-color: white;
        --nm-ui-appbar-a-background-color: #1976d2;
        --nm-ui-appbar-a-color: white;
        --nm-ui-appbar-a-position: static;
    }
</style>

<div class="nekomata-ui">
    <AppBar>
        <Row>
            <Button on:click={() => drawerVisible = !drawerVisible}>
                <SvgIcon d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon>
            </Button>
        </Row>
    </AppBar>
    <Drawer active={drawerVisible}>
        <AppBar css_profile={"a"}>
            <Row>
                <Button on:click={() => drawerVisible = !drawerVisible}>
                    <SvgIcon d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon>
                </Button>
            </Row>
        </AppBar>
    </Drawer>
    <slot></slot>
</div>