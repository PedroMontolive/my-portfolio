<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

export default{
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    },
    props: {

    },
    data() {
        return {
            list: '',
            dots: '',
            prev: '',
            next: '',
            items: '',
            refreshSlider: '',
            active: 0,
            lengthItems: 0,
            slideItem: [
                {
                    imagem: 'https://unsplash.it/1500/1500',
                    title: 'Imagem',
                    description: 'Imagem',
                },
                {
                    imagem: 'https://picsum.photos/1500/1500',
                    title: 'Imagem',
                    description: 'Imagem',
                },
                {
                    imagem: 'https://unsplash.it/1500/1500',
                    title: 'Imagem',
                    description: 'Imagem',
                },
                {
                    imagem: 'https://picsum.photos/1500/1500',
                    title: 'Imagem',
                    description: 'Imagem',
                },
                {
                    imagem: 'https://unsplash.it/1500/1500',
                    title: 'Imagem',
                    description: 'Imagem',
                },
                {
                    imagem: 'https://picsum.photos/1500/1500',
                    title: 'Imagem',
                    description: 'Imagem',
                },
            ],
        }
    },
    mounted() {
        this.list = document.querySelector('.slider-items .lista');
        this.items = document.querySelectorAll('.slider-items .lista .item-slider');
        this.dots = document.querySelectorAll('.slider-items .dots li');
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');
        this.lengthItems = this.items.length - 1;
        this.refreshSlider = setInterval(() => {
            this.onNext();
        }, 5000);
    },
    methods: {
        onNext() {
            if((this.active + 1) > this.lengthItems){
                this.active = 0;
            } else {
                this.active = this.active + 1
            }
            this.reloadSlider();
        },
        onPrev(){
            if ((this.active - 1) < 0) {
                this.active = this.lengthItems;
            } else {
                this.active = this.active - 1;
            }

            this.reloadSlider();
        },
        onDot(index){
            this.active = index;
            this.reloadSlider();
        },
        reloadSlider(){
            let checkLeft = this.items[this.active].offsetLeft;
            this.list.style.left = -checkLeft + 'px';
            
            let lastActiveDot = document.querySelector('.slider-items .dots li.active');
            lastActiveDot.classList.remove('active');
            this.dots[this.active].classList.add('active');
        }
    }
}
</script>

<template>
    <div class="slider-items w-full">
        <div class="lista">
            <div class="item-slider" v-for="(item, index) in slideItem" :key="index">
                <img :src="item.imagem" :alt="item.description">
            </div>
        </div>
        
        <!-- Button Prev and Next-->
        <div class="botoes">
            <button id="prev" @click="onPrev()">
                <ChevronLeftIcon class="pr-1"/>
            </button>
            <button id="next" @click="onNext()">
                <ChevronRightIcon class="pl-1"/>
            </button>
        </div>

        <ul class="dots">
            <li v-for="(item, index) in slideItem" :key="index" :class="{'active': index == active}" @click="onDot(index)"/>
        </ul>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped/>