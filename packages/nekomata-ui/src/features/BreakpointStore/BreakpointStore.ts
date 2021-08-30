import { writable } from "svelte/store";
import { onDestroy } from "svelte";

const map = new Map<number, string>();

export function setBreakpoint(key:number, value:string){
    map.set(key,value);
}

function breakpointCheck(width:number) {
    let breakpoint = '';
    for (let entry of map.entries()){
        if (width > entry[0]){
            breakpoint = entry[1];
            break;
        }
    }
    if (breakpoint === ''){
        return null;
    } else {
        return breakpoint;
    }
}

export default function breakpoint(checkBreakpoint = breakpointCheck) {
  if (typeof window === "undefined"){
    return writable(null);
  } 

  const store = writable(checkBreakpoint(window.innerWidth));

  const onResize = ({ target }) => store.set(checkBreakpoint(target.innerWidth));

  window.addEventListener("resize", onResize);
  onDestroy(() => window.removeEventListener("resize", onResize));

  return {
    subscribe: store.subscribe
  };
}