<script setup>
import TypeIt from 'typeit';
import {
    PhCaretDown,
    PhLinkedinLogo,
    PhGithubLogo,
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
        },
    }
}
</script>


<template>
    <section id="home">
        <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div
                class="relative z-20 flex items-center justify-center text-[#4fd8eb] min-w-full min-h-full bg-black bg-opacity-50">
                <div translate="no" class="mx-2 text-center">
                    <h2 class="text-2xl text-base-content font-fira xs:text-3xl md:text-4xl">
                        Hello, World.
                    </h2>
                    <h1 class="text-4xl font-extrabold xs:text-5xl md:text-6xl">
                        My Name is Pedro Emanuel
                    </h1>
                    <h3 class="text-2xl text-base-content font-fira ">
                        I'am a <span id="text-write" class="text-primary"></span>
                    </h3>
                    <div
                        class="flex flex-col mt-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 menu-item">
                        <a href="#about"
                            class="flex gap-4 px-4 py-2 text-base-content transition duration-500 border-4 text-1xl border-base-content hover:border-[#4fd8eb] hover:text-[#4fd8eb]">
                            More About Me
                            <PhCaretDown class="w-5 h-5" />
                        </a>
                    </div>

                    <div class="fixed inset-x-0 bottom-0 z-10 flex flex-row justify-center gap-5 p-2 mb-5 ">
                        <a href="https://www.linkedin.com/in/pedro-emanuel-monteiro-41a91a178/" target="_blank"
                            rel="noopener noreferrer">
                            <PhLinkedinLogo
                                class="w-8 h-8 transition duration-500 cursor-pointer hover:fill-tertiary-default fill-white" />
                        </a>
                        <a href="https://github.com/PedroMontolive" target="_blank" rel="noopener noreferrer">
                            <PhGithubLogo
                                class="w-8 h-8 transition duration-500 cursor-pointer hover:fill-tertiary-default fill-white" />

                        </a>
                    </div>
                </div>
            </div>
            <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src="video/playback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </header>
    </section>
</template>

<style>
/*  */
</style>
