<script setup>
import { defineProps } from "vue";
// import { showModal } from "./carta.vue";

const Props = defineProps({
  emails: Object,
  hola: Function
});

const handleCloseModal = () => {
    Props.hola()
}
</script>

<template>
  <!-- Modal toggle -->
  <div class="modal-container">
    <div class="modal-body">
        <button @click="handleCloseModal">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>



    </div>
  </div>
</template>

<style>
.modal-container {
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 10;

    display: grid;
    place-items: center;

    backdrop-filter: blur(5px);

    width: 100vw;
    height: 100dvh;
    background-color: rgba(255, 255, 255, 0.2);
}
.modal-body {
    position: relative;

    width: 70vw;
    max-width: 1200px;
    min-width: 280px;   
    height: 40vw;
    max-height: 800px;
    min-height: 240px; 
    
    border-radius: 25px;
    
    background-color: gray;
}
.modal-body>button {
    position: absolute;
    top: 7%;
    right: 5%;

    cursor: pointer;
}
.modal-body>button>svg {
    width: 20vw;
    height: 20vw;
    max-width: 50px;
    max-height: 50px;
    min-width: 25px;
    min-height: 25px;

    fill: white;

}
</style>
