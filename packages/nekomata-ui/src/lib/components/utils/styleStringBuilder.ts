export function writeStyleStringFrom(cssProps:Object):string{
    return Object.entries(cssProps).reduce((pair, [key, value]) => `${pair} ${key}: ${value}` + ';', '')
}