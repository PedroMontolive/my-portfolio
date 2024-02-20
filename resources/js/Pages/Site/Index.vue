<script setup>
import TypeIt from 'typeit';
import {
    PhCaretDown
} from "@phosphor-icons/vue";
</script>

<script>
export default {
    data() {
        return {
            stacks: [
                'Back End Developer',
                'Freelancer',
                'Software Architect',
                'Web Developer',
                'Coffee Lover',
            ]
        }
    },
    mounted() {
        const elemento = document.querySelector('#text-write');
        this.typeWrite(elemento, this.stacks);
    },
    methods: {
        typeWrite(elemento, stacks) {
            new TypeIt(elemento, {
                speed: 100,
                loop: true,
            }).type(stacks[0], { delay: 900 })
                .delete(18)
                .type(stacks[1], { delay: 900 })
                .delete(18)
                .type(stacks[2], { delay: 900 })
                .delete(18)
                .type(stacks[3], { delay: 900 })
                .delete(18)
                .type(stacks[4], { delay: 900 })
                .delete(18)
                .go();
        }
    }
}
</script>

<template>
    <div class="bg-bkg-default">
        <nav id="nav" class="fixed inset-x-0 top-0 z-10 flex flex-row justify-between font-serif text-white bg-transparent">
            <div class="p-4">
                <div class="text-2xl tracking-widest">
                    <a href="#"
                        class="p-2 transition duration-500 text-secondary-default hover:text-secondary-opaque">PEMTO</a>
                </div>
            </div>

            <div class="flex-row justify-between hidden p-4 text-secondary-default md:flex">
                <a id="hide-after-click" href="#about"
                    class="p-2 mx-4 text-lg transition duration-500 border-b-2 border-transparent hover:border-b-2 hover:border-secondary-opaque">About
                    Me</a>
                <a id="hide-after-click" href="#projects"
                    class="p-2 mx-4 text-lg transition duration-500 border-b-2 border-transparent hover:border-b-2 hover:border-secondary-opaque">Projects
                    Me</a>
            </div>
        </nav>

        <header id="up" class="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover">
            <div class="flex items-center justify-center h-screen bg-black bg-opacity-50"
                style="background:rgba(0,0,0,0.5);">
                <div class="mx-2 text-center text-secondary-default">
                    <h2 class="font-serif text-2xl text-tertiary-default xs:text-3xl md:text-4xl">
                        Hello, World.
                    </h2>
                    <h1 class="text-4xl font-extrabold leading-tight xs:text-5xl md:text-6xl">
                        My Name is Pedro Emanuel
                    </h1>
                    <h3 class="font-serif text-2xl leading-tight">
                        I'am a <span id="text-write" class="text-tertiary-light"></span>
                    </h3>
                    <div class="flex flex-col mt-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#about"
                            class="flex items-center gap-4 px-4 py-2 text-white transition duration-500 border-4 text-1xl border-tertiary-default hover:border-tertiary-opaque">
                            More About Me
                            <PhCaretDown />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
/*  */
</style>


