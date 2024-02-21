<script setup>
import HeaderSite from "@/Components/HeaderSite.vue";
import AboutMe from "@/Components/AboutMe.vue";
import Story from "@/Components/Story.vue";
</script>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        const menuItems = document.querySelectorAll('.menu-item a[href^="#"]');

        menuItems.forEach(item => {
            item.addEventListener('click', this.scrollOnClick);
        });
    },
    methods: {
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
    <div class="bg-bkg-default">
        <nav id="nav"
            class="fixed inset-x-0 top-0 z-10 flex flex-row justify-between font-serif text-white bg-transparent menu-item backdrop-blur-sm">
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
                <a id="hide-after-click" href="#story"
                    class="p-2 mx-4 text-lg transition duration-500 border-b-2 border-transparent hover:border-b-2 hover:border-secondary-opaque">Story
                </a>
                <a id="hide-after-click" href="#skills"
                    class="p-2 mx-4 text-lg transition duration-500 border-b-2 border-transparent hover:border-b-2 hover:border-secondary-opaque">Skills
                </a>
                <a id="hide-after-click" href="#projects"
                    class="p-2 mx-4 text-lg transition duration-500 border-b-2 border-transparent hover:border-b-2 hover:border-secondary-opaque">Projects
                </a>
                <a id="hide-after-click" href="#contact"
                    class="p-2 mx-4 text-lg transition duration-500 border-b-2 border-transparent hover:border-b-2 hover:border-secondary-opaque">Contact
                    Me
                </a>
            </div>
        </nav>

        <HeaderSite />
        <AboutMe />
        <Story />
    </div>
</template>

<style>
/*  */
</style>


