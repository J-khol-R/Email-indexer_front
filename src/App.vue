<script setup>
import { onMounted } from 'vue';
import buscador from './components/buscador.vue';

onMounted(()=>{
  document.body.classList.add('bg-darkBg');
})

</script>

<template>
  <buscador/>
</template>




