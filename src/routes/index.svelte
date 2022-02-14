<script lang="ts">
    import { GridContainer} from 'nekomata-ui';
</script>

<style>
    .grid {
		padding: 64px 0px 0px 0px;
        --nm-ui-grid-container-grid-template-areas:
		'. . w w w w w w w w . .'
        '. . b b b b b b b b . .';
	}

    h1{
        font-size:3.75em;
        margin: 60px 0px 0px 0px;
    }

    .item{
        grid-area: w;
    }

    @media only screen and (max-width: 600px){
        .grid {
            padding: 56px 0px 0px 0px;
            --nm-ui-grid-container-grid-template-areas:
		'w w w w w w w w w w w w'
        'b b b b b b b b b b b b';
        }
    }

    .box{
        grid-area: b;
    }
</style>

<svelte:head><title>Nekomata-ui</title></svelte:head>

<div class="grid">
    <GridContainer>
        <div class="item">
            <h1>Nekomata-ui</h1>
            <p>Svelte UI component library that focuses on delivering components and features that can be adaptable to your application needs.</p>
        </div>
        <div class="box">
        </div>
    </GridContainer>
</div>
