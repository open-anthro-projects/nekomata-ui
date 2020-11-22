import type { AppBarProps } from './types'

export function buildCSSStyleString(appBarProps:AppBarProps){
    let styleString = ""; 
    for (const key in appBarProps) {
        styleString = styleString + "--appbar-"+ `${key}`+ ": " + `${appBarProps[key]};` + " " 
    }
    return styleString;
}