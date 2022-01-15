<script lang="ts">
    import { GridContainer } from 'nekomata-ui'

    let panelList = new Array();

    let list = [{
		id: 0,
        style: "--max-height: 100%"
	}
    ,{
		id: 1,
        style: null
	}, {
		id: 2,
        style: null
	}, {
		id: 3,
        style: null
	}, {
		id: 4,
        style: null
	}, {
		id: 5,
        style: null
	}, {
		id: 6,
        style: "--max-height: 100%"
	}];


    function maxheight(panel: HTMLElement) {
        if (panel.style.getPropertyValue("--max-height")) {
            panel.style.setProperty("--max-height" , null);
        } else {
        panel.style.setProperty("--max-height" , panel.scrollHeight + "px");
        } 
    }

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

    .panel {
        padding: 0 18px;
        background-color: white;
        max-height: var(--max-height, 0);
        overflow: hidden;
        transition: max-height 0.5s ease-out;
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
        
        {#each list as item}

        <button on:click={() => maxheight(panelList[item.id])}>click me</button>

        <div class="panel" bind:this={panelList[item.id]} style={item.style}>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        {/each}
    </div>
    </GridContainer>
</div>
