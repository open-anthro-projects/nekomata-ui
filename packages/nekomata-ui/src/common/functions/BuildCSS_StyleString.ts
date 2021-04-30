import type { StyleProps } from "../interfaces";

export default function buildCSS_StyleString(cssVarKey: String, styleProps: StyleProps):string{
    let styleString = ""; 
    for (const key in styleProps) {
        if (key !== "style"){
        styleString = styleString + " " + `${cssVarKey}` + `${key}`+ ": " + `${styleProps[key]};`;
        } else {
        styleString = styleString + ` ${styleProps[key]};`
        }
    }
    if (styleString === ""){
        return null;
    } else {
        return styleString;
    }
}