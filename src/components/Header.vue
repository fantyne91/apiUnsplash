<script setup>
import { useSearch } from "@/composables/searchImg.js"
 import {ref} from "vue"

const { buscarImg } = useSearch()
const inputValue= ref("")

// const enter = (e) => {
//     buscarImg(e.target.value)
// }
const ejecutaSearch = async () => {
    if (!inputValue.value.trim()) return
    await buscarImg(inputValue.value)
    inputValue.value = ""
}

</script>
<template>
    <nav class="header">
        <a href="/" class="logo">FindNow</a>
        <form class="search" @submit.prevent=ejecutaSearch>
            <input type="text" v-model="inputValue" placeholder="Buscar" />
            <button @click="enter" type="submit">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill="#e86565"
                            d="M50 0c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50-22.386-50-50-50z"></path>
                        <path fill="#8d2026"
                            d="M79.222 72.675c-1.415-1.415-3.45-1.802-5.225-1.199l-4.722-4.723c3.365-4.424 5.367-9.942 5.367-15.931 0-14.546-11.792-26.338-26.339-26.338-14.546 0-26.338 11.792-26.338 26.338 0 14.547 11.792 26.339 26.338 26.339 5.988 0 11.507-2.002 15.931-5.368l4.723 4.723c-.602 1.773-.215 3.81 1.199 5.224l8.923 8.923c3.492-2.502 6.655-5.435 9.396-8.733l-9.253-9.255z">
                        </path>
                        <path fill="#F5F5F5"
                            d="M68.535 63.464l-5.07 5.071 19.255 19.255c1.809-1.567 3.503-3.263 5.071-5.071l-19.256-19.255z">
                        </path>
                        <path fill="#ffffff"
                            d="M48.5 22c14.636 0 26.5 11.864 26.5 26.5 0 14.635-11.864 26.5-26.5 26.5s-26.5-11.865-26.5-26.5c0-14.636 11.864-26.5 26.5-26.5z">
                        </path>
                        <path fill="#e88282"
                            d="M48.5 27c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5z">
                        </path>
                        <path fill="#ffffff"
                            d="M38.189 53.379c-.499-.5-1.31-.5-1.81 0s-.5 1.311 0 1.811l5.431 5.43c.5.5 1.31.5 1.81 0 .5-.499.5-1.31 0-1.81l-5.431-5.431zm11.435 4.45l-10.454-10.454c-.495-.495-1.299-.495-1.794 0s-.495 1.299 0 1.794l10.454 10.454c.495.495 1.299.495 1.794 0s.495-1.298 0-1.794z">
                        </path>
                        <path fill="#EFC75E"
                            d="M79.606 70.485c-1.996-1.996-5.232-1.996-7.229 0l-1.892 1.892c-1.996 1.997-1.996 5.233 0 7.229l10.007 10.007c3.419-2.636 6.485-5.702 9.121-9.121l-10.007-10.007z">
                        </path>
                        <path fill="#D7B354"
                            d="M72.507 77.606c-1.993-1.993-1.995-5.223-.008-7.22l-.121.099-1.892 1.892c-1.996 1.997-1.996 5.233 0 7.229l10.007 10.007c.755-.582 1.491-1.187 2.211-1.81l-10.197-10.197z">
                        </path>
                        <path fill="#c14e4e"
                            d="M48.5 27c-6.701 0-12.684 3.067-16.627 7.873 3.71-3.044 8.454-4.873 13.627-4.873 11.874 0 21.5 9.626 21.5 21.5 0 5.173-1.829 9.917-4.873 13.627 4.806-3.943 7.873-9.926 7.873-16.627 0-11.874-9.626-21.5-21.5-21.5z">
                        </path>
                    </g>
                </svg>
            </button>
        </form>
        <div></div>
        <!-- <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="6" r="4" stroke="#242424" stroke-width="1.5"></circle>
                <path
                    d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                    stroke="#242424" stroke-width="1.5" stroke-linecap="round"></path>
            </g>
        </svg> -->
    </nav>
</template>
<style scoped lang="scss">
// import mixin
nav {
    z-index: 1000;
    padding: 8px clamp($spacing/2, 1vw, $spacing*3);
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: $spacing;

    .logo {
        font-weight: 700;
        font-size: 1.5rem;
        color: $branding-color;
    }
}

.search {
    @include flex(row, 56px);
    @include border(25px, 3px, $branding-color);
    padding: 4px;
    align-items: center;
    min-width: 200px;
    max-width: 300px;
    justify-content: space-between;
    background-color: $secondary-color;

    input {
        background-color: inherit;
        border: none;
        width: 80%;
    }

    input:focus-visible,
    input:active {
        outline: none;
        color: $branding-color;

    }

    button {
        background: none;
        border: none;
    }

    a {
        padding-left: $spacing;
    }

    svg {
        width: 28px;
        height: 28px;
    }
}

nav>svg {
    width: 22px;
    height: 22px;
    padding: 4px;
    cursor: pointer;
    @include border(25px, 3px, $branding-color);
    background-color: $secondary-color;
}

nav>a {
    font-weight: 500;
}

nav>a:hover {

    cursor: pointer;
    color: $branding-color;

}
      
</style>