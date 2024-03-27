<script setup>
import NavBar from "@/Components/NavBar.vue";
import HeaderHome from "@/Components/HeaderHome.vue";
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
    <NavBar />
    <HeaderHome />
</template>
<style src="./style.scss" lang="scss" scoped />
