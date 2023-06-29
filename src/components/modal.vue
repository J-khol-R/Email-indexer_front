<script setup>
import { defineProps } from "vue";

const Props = defineProps({
  emails: Object,
  hola: Function
});

const handleCloseModal = () => {
    Props.hola()
}
</script>

<template>
  <div class="fixed top-0 left-0 z-10 grid place-items-center backdrop-filter backdrop-blur-lg w-screen h-screen bg-white bg-opacity-20">
    <div class="relative w-70vw max-w-1200px min-w-280px h-40vw max-h-800px min-h-240px rounded-2xl bg-gray-500">

        <div class="flex justify-center mt-7 overflow-hidden">
            <div class="w-55vw max-w-720px min-w-280px h-35vw max-h-500px min-h-150px overflow-auto">
                <p class="font-mono text-xl">
                    <span class="font-extrabold mt-1 text-2xl">From: </span> {{ Props.emails._source.from }}
                </p>
                <p class="font-mono mt-1 text-xl">
                    <span class="font-extrabold text-2xl">To: </span> {{ Props.emails._source.to }}
                </p>
                <p class="font-mono mt-8 ml-4 text-xl">
                    {{ Props.emails._source.content }}
                </p>
            </div>
        </div>
        <button @click="handleCloseModal" class="absolute top-7 right-5 cursor-pointer w-3vw h-3vw max-w-50 max-h-50 min-w-25 min-h-25">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="w-full h-full fill-white"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>

    </div>
  </div>
</template>

