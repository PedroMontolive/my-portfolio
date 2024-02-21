<script setup >
import {
    PhUserCircle
} from "@phosphor-icons/vue";
</script>
<script>
export default {
    data() {
        return {
            imageurl: "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
        }
    },
}
</script>
<template>
    <section id="about">
        <div class="flex items-center h-screen bg-black bg-opacity-50 bg-stone-100">
            <div class="flex flex-col justify-center max-w-6xl py-4 mx-auto backdrop-blur-sm lg:py-6 md:px-6">
                <div class="px-4 mb-10 md:text-center md:mb-15">
                    <p class="mb-2 text-lg font-semibold text-white uppercase">
                        About <span class="text-tertiary-default">Me</span>
                    </p>
                    <h2 class="pb-2 text-2xl font-bold text-white md:text-4xl">
                        Let me introduce <span class="text-tertiary-default"> myself.</span>
                    </h2>
                    <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                        <div class="flex-1 h-2 bg-tertiary-light">
                        </div>
                        <div class="flex-1 h-2 bg-tertiary-dark">
                        </div>
                        <div class="flex-1 h-2 bg-tertiary-opaque">
                        </div>
                    </div>

                </div>
                <div class="flex flex-col justify-center max-w-[800px] ">
                    <div class="flex flex-row justify-center gap-4">
                        <img :src="imageurl" alt="Pedro Emanuel" class="w-20 h-20 rounded-full" />
                        <div class="">
                            <p class="pt-2 text-base text-white focus:outline-none dark:text-gray-200">
                                With more than 2 years of experience as a professional Back End developer,
                                I acquired the skills and knowledge necessary to make your project a success,
                                and add new capabilities and experience to your company.
                            </p>
                        </div>
                    </div>

                    <div class="p-4 text-sm font-semibold text-white backdrop-blur-sm">
                        <ul
                            class="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
                            <li>Back End Development</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>VueJs</li>
                            <li>jQuery</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="css"></style>

<!-- With more than 2 years of experience as a professional Back End developer, I acquired the skills and knowledge necessary to make your project a success, and add new capabilities and experience to your company. -->
