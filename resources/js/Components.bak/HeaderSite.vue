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

        const menuItems = document.querySelectorAll('.menu-item a[href^="#"]');

        menuItems.forEach(item => {
            item.addEventListener('click', this.scrollOnClick);
        });
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
        scrollOnClick(event) {
            event.preventDefault();
            const element = event.target;
            const id = element.getAttribute('href');
            const to = document.querySelector(id).offsetTop;
            // const section = document.querySelector(id);

            window.scrollTo({
                top: to,
                behavior: 'smooth'
            })
        }
    }
}
</script>
<template>
    <header id="up" class="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover">
        <div class="flex items-center justify-center h-screen bg-black bg-opacity-50">
            <div translate="no" class="mx-2 text-center text-secondary-default">
                <h2 class="font-serif text-2xl text-tertiary-default xs:text-3xl md:text-4xl">
                    Hello, World.
                </h2>
                <h1 class="text-4xl font-extrabold xs:text-5xl md:text-6xl">
                    My Name is Pedro Emanuel
                </h1>
                <h3 class="font-serif text-2xl ">
                    I'am a <span id="text-write" class="text-tertiary-light"></span>
                </h3>
                <div class="flex flex-col mt-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 menu-item">
                    <a href="#about"
                        class="flex gap-4 px-4 py-2 text-white transition duration-500 border-4 text-1xl border-tertiary-default hover:border-tertiary-opaque">
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
    </header>
</template>
