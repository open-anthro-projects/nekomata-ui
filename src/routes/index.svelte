<script lang="ts">
    import { GridContainer } from 'nekomata-ui'
</script>

<style>
    .grid {
		padding: 64px 0px 0px 0px;
        --nm-ui-grid-container-grid-template-areas:
		'. . w w w w w w w w . .';
	}

    .item{
        grid-area: w;
    }

    h1, p {
        text-align:center;
    }

    @media only screen and (max-width: 600px){
        .grid {
            padding: 56px 0px 0px 0px;
            --nm-ui-grid-container-grid-template-areas:
		'w w w w w w w w w w w w';
        }
    }
</style>

<svelte:head><title>Nekomata-ui</title></svelte:head>

<div class="grid">
    <GridContainer>
        <div class="item">
            <h1>Welcome to Nekomata-ui</h1>
            <p>This website is under construction!</p>
        </div>
    </GridContainer>
</div>
