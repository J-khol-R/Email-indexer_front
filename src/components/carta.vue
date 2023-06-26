<script setup>
import { onMounted } from 'vue';

let resultado = ""

const Props = defineProps({
  email: Object,
  value: String
});

function buscarYExtraerSubcadena(texto, palabra, longitud) {
  if (texto.includes(palabra)) {
    var indice = texto.indexOf(palabra);
    var subcadena = texto.substring(indice, indice + longitud);
    return subcadena;
  }
}

// let texto = "Este es un ejemplo de texto más largo.";
// let palabraBuscada = "ejemplo";
// let longitudSubcadena = 10;
onMounted(() =>{
  // let texto = "Who is going to send out the final proposal?  I would like to see the simple solution vs. the detailed / major system change solution.  I want to be able to take them back to management and justify what we are doing in your project.  Building a tool in-house which will calculate consumptions bands and other charges."
  // resultado = buscarYExtraerSubcadena(texto, "system", 35);
  
  // console.log(Props.email._source.content);
  console.log(Props.value);
  // console.log(resultado);
})
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div  class="col-span-1">
      <svg class="h-20 w-20 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>




      <!-- <img src="../assets/sobre.png" alt="sobre"> -->
      <p class="font-mono font-semibold text-white">{{ Props.email._source.date }}</p>
    </div>
    <div class="col-span-2 mt-8">
      <h4 class="font-mono text-white"><span class="font-extrabold text-pink-500">FROM: </span>{{ Props.email._source.from }}</h4>
      <h4 class="font-mono text-white" ><span class="font-extrabold text-pink-500">TO: </span>{{ Props.email._source.to }}</h4>
      <p class="font-mono text-white"><span class="font-extrabold text-pink-500">MESSAGE: </span>...{{ Props.email._source.content }}...</p>
    </div>
  </div>
</template>

<!-- <style>
.border-gradient {
  padding: 1rem;
  border: 1rem solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    repeating-linear-gradient(
        -45deg,
        #ff0000 0,
        #ff0000 12.5%,
        transparent 0,
        transparent 25%,
        #58a 0,
        #58a 37.5%,
        transparent 0,
        transparent 50%
      )
      0 / 5em 5em;
}
</style> -->

