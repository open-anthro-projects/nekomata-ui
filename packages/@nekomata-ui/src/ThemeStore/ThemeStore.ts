import { writable } from 'svelte/store';

export let themeKey = "nekomata-ui-theme"

export function changeThemeKey(key:string){
    themeKey = key;
}

function setTheme() {
    const { subscribe, set, update } = writable("light");

    return {
        subscribe,
        switchTheme: () => {
            update(theme => {
                if (theme === "light") {
                    document.documentElement.setAttribute('data-theme', 'dark')
                    window.localStorage.setItem(themeKey, "dark")
                    return "dark"
                } else {
                    document.documentElement.setAttribute('data-theme', 'light')
                    window.localStorage.setItem(themeKey, "light")
                    return "light"
                }
            })
        },
        setThemeOnLoad: () => {
            let theme  = window.localStorage.getItem(themeKey);
            if (theme === "light" || theme === "dark") {
                set(theme)
            } else {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
                set(theme) 
            }
        }
    };
}

export const theme = setTheme();