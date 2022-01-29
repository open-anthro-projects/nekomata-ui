<script lang="ts">
    let clazz = '';
    export {clazz as class};
    export let id:string = null;
	export let active = false;
    export let css_profile: 'default' | 'a' = 'default';
    export let style:string = null;
    export let data_testid:string = null;
</script>

<style>
    .nm-ui-accordion-panel {
        padding: var(--nm-ui-accordion-panel-padding, 0 18px);
        background-color: var(--nm-ui-accordion-panel-background-color, white);
        overflow: var(--nm-ui-accordion-panel-overflow, hidden);
        transition: var(--nm-ui-accordion-panel-transition, max-height 0.5s ease-out);
    }

    .nm-ui-accordion-panel-a {
        padding: var(--nm-ui-accordion-panel-a-padding, 0 18px);
        background-color: var(--nm-ui-accordion-panel-a-background-color, white);
        overflow: var(--nm-ui-accordion-panel-a-overflow, hidden);
        transition: var(--nm-ui-accordion-panel-a-transition, max-height 0.5s ease-out);
    }

    .nm-ui-accordion-panel-inactive{
        max-height: var(--nm-ui-accordion-panel-inactive-max-height, 0);
    }

    .nm-ui-accordion-panel-active{
        max-height: var(--nm-ui-accordion-panel-active-max-height, max-content);
    }

    .nm-ui-accordion-panel-inactive-a{
        max-height: var(--nm-ui-accordion-panel-inactive-a-max-height, 0);
    }

    .nm-ui-accordion-panel-active-a{
        max-height: var(--nm-ui-accordion-panel-active-a-max-height, max-content);
    }
</style>

<div {id} data-testid={data_testid} 
    class:nm-ui-accordion-panel = {css_profile === 'default'} 
    class:nm-ui-accordion-panel-a = {css_profile === 'a'}
    class:nm-ui-accordion-panel-active = {css_profile === 'default' && active == true}
    class:nm-ui-accordion-panel-active-a = {css_profile === 'a' && active == true}
    class:nm-ui-accordion-panel-inactive = {css_profile === 'default' && active == false}
    class:nm-ui-accordion-panel-inactive-a = {css_profile === 'a' && active == false}
    class="{clazz}"  
    style={style}>
        <slot/>
</div>