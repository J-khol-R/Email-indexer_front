<script setup>
import { ref } from 'vue';
import modal from './modal.vue';

let resultado = ref("")
let showModal = ref(false)

const Props = defineProps({
  email: Object,
  value: String

});


//pasar una subcadena desde la palabra buscada
function buscarYExtraerSubcadena(texto, palabra, longitud) {
  if (texto.includes(palabra)) {
    var indice = texto.indexOf(palabra);
    var subcadena = texto.substring(indice, indice + longitud);
    return subcadena;
  }
}
//subcadena resultante
resultado.value = buscarYExtraerSubcadena(Props.email._source.content, Props.value, 50);


//mostrar la ventana modal
function handle(){
  showModal.value = !showModal.value
}


 

</script>

<template>
  <modal v-if="showModal" :hola="handle" :emails="Props.email"/>
  <div class="cursor-pointer grid grid-cols-3 gap-4" v-on:click="handle" >
    <div  class="col-span-1">
      <svg class="h-20 w-20 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
      <p class="font-mono font-semibold text-white">{{ Props.email._source.date }}</p>
    </div>
    <div class="col-span-2 mt-8">
      <h4 class="font-mono text-white"><span class="font-extrabold text-red-pink">FROM: </span>{{ Props.email._source.from }}</h4>
      <h4 class="font-mono text-white" ><span class="font-extrabold text-red-pink">TO: </span>{{ Props.email._source.to }}</h4>
      <p class="font-mono text-white"><span class="font-extrabold text-red-pink">MESSAGE: </span>...{{ resultado }}...</p>
    </div>
  </div>
</template>

