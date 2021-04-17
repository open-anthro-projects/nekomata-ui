<script lang="ts">
    interface SVGProps {
        height?: String;
        width?: String;
        fill?: String;
        style?: String;
    }

    export let props: SVGProps;
    export let d: string;
    export let viewBox = "0 0 24 24"
    let clazz = '';
    export {clazz as class}

    function buildCSSStyleString(svgProps:SVGProps){
    let styleString = ""; 
    for (const key in svgProps) {
        if (key !== "style"){
            styleString = styleString + " --svgIcon-"+ `${key}`+ ": " + `${svgProps[key]};`;
        } else {
            styleString = styleString + ` ${svgProps[key]};`
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
    .svgIcon{
        height: var(--svgIcon-height, 1.5em);
        width: var(--svgIcon-width, 1.5em);
        fill: var(--svgIcon-fill, currentColor);
    }
</style>

<svg data-testid="svgIcon" class="{clazz} svgIcon" style={style} focusable="false" viewBox={viewBox} aria-hidden="true">
    <path d={d} />
</svg>
