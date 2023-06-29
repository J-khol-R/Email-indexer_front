<script setup>
import axiosClient from "../utils/axios";
import cartasGrid from "./cartasGrid.vue";
import { ref, computed } from "vue";

const emails = ref([]);
let inputValue = ref("");
let Counter = 1;
let pagInicio = 0;
let pagFinal = 21;
let load = false


//llamada a la api
const fetchMails = async () => {
  try {
    const { data } = await axiosClient.post("/word/" + inputValue.value, {
      inicio: pagInicio,
      fin: pagFinal,
    });
    emails.value = data;
  } catch (err) {
    console.log(err);
  }
};


//boton next
function next() {
  Counter++;
  pagFinal = Counter * 21 + Counter - 1;
  pagInicio = pagFinal - 21;
  fetchMails(pagInicio, pagFinal);
}

//boton prev
function prev() {
  if (Counter == 1) {
    fetchMails(pagInicio, pagFinal);
  } else {
    Counter--;
    pagFinal = Counter * 21 + Counter - 1;
    pagInicio = pagFinal - 21;
    fetchMails(pagInicio, pagFinal);
  }
}

//accion del buscado
function enviarValor() {
  fetchMails();
  load = true
  Counter = 1
}
</script>





<template>
  <div class="flex flex-col items-center my-6">
    <h2
      class="text-3xl font-extrabold tracking-widest mt-2 text-white font-mono"
    >
      Search
    </h2>
    <div class="flex items-center w-1/3 h-auto grid grid-cols-2 gap-4 place-items-center" style="grid-template-columns: repeat(2, 20%)">
     
      <svg class="w-10vw h-10vw max-w-100 max-h-100 min-w-100 min-h-100 fill-red-pink mr-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M168.8 462.3c-7.9-4-11.1-13.6-7.2-21.5L192 380.2l0-44.2c0-4.2 1.7-8.3 4.7-11.3L256 265.4V242.2L139.2 344C87.8 395.3 0 358.9 0 286.3c0-41.1 30.6-75.8 71.4-80.9l159.9-23.9-49.6-41.3c-5.1-4.2-7-11.1-4.9-17.4l13.9-41.7-29-58.1c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l32 64c1.9 3.8 2.2 8.2 .9 12.2l-12.5 37.6L256 160.5V137.9c0-14.9 10.1-27.3 23.8-31V63.7c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2V107c13.7 3.6 23.8 16.1 23.8 31v22.6l45.4-37.8L352.8 85.1c-1.3-4-1-8.4 .9-12.2l32-64c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-29 58.1 13.9 41.7c2.1 6.2 .1 13.1-4.9 17.4l-49.6 41.3 159.9 23.9c22.5 2.8 41.8 14.6 54.7 31.4c-2.7 2.6-5.2 5.4-7.3 8.6c-8.6-12.9-23.3-21.5-40-21.5s-31.4 8.5-40 21.5c-8.6-12.9-23.3-21.5-40-21.5c-21.7 0-40 14.3-45.9 34.1c-10.7 3.2-19.8 10.1-25.9 19.2l-40.2-35v23.1l32.4 32.4c-.3 2-.4 4.1-.4 6.2c0 16.7 8.5 31.4 21.5 40c-4 2.6-7.5 5.9-10.6 9.5L320 310.6v50c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50l-32 32 0 41.4c0 2.5-.6 4.9-1.7 7.2l-32 64c-4 7.9-13.6 11.1-21.5 7.2zM512 256c8.8 0 16 7.2 16 16v16h48V272c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V480H528v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V480H448v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V480H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V400H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V320H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V272c0-8.8 7.2-16 16-16s16 7.2 16 16v16h48V272c0-8.8 7.2-16 16-16zm16 112h48V320H528v48zm0 80h48V400H528v48zM448 320v48h48V320H448zm0 80v48h48V400H448z"/></svg>
      <div class="flex w-40 w-full ml-7">
        <input
          type="text"
          name="buscador"
          v-model="inputValue"
          placeholder="keyword"
          class="border-4 border-white rounded-full w-120 px-5 py-1 bg-transparent h-10 placeholder-text-white text-white text-base sm:text-xl placeholder-white font-mono focus:outline-none"
        />

        <button
          @click="enviarValor"
          class="bg-transparent border-none cursor-pointer w-full h-full ml-4 transition duration-300 font-medium text-base sm:text-xl hover:opacity-50"
        >
          <!-- <svg
            class="h-8 w-8 text-pink-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
            />
          </svg> -->
          <svg class="w-12 h-12 ml-1/4 fill-red-pink" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
      </div>
    </div>

    <!-- paginacion -->

    <!-- Buttons -->
    <div class="inline-flex mt-2 xs:mt-0">
      <button
        @click="prev"
        class="hover:bg-white hover:bg-opacity-50 inline-flex items-center px-6 py-2 my-4 text-sm font-medium rounded-l"
      >
        <svg
          class="h-8 w-8 text-red-pink"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>
      <button
        @click="next"
        class="hover:bg-white hover:bg-opacity-50 inline-flex items-center px-6 py-2 my-4 text-sm font-medium border-0 border-l rounded-r"
      >
        <svg
          class="h-8 w-8 text-red-pink"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
    <!-- Buttons -->

    <!-- Resultados -->
    <h2
      v-if="emails && emails.hits && emails.hits.hits && emails.hits.total"
      class="text-xl font-mono text-white mt-5"
    >
      Resultados:{{ emails.hits.total.value }}
    </h2>
    <!-- Resultados -->

  </div>
  <!-- fin paginacion -->

  <!-- cartasGrid component -->
  <div
    v-if="emails && emails.hits && emails.hits?.hits"
    class="container mx-auto w-full mb-20 mt-20"
  >
    <cartasGrid :emails="emails.hits.hits" :value="inputValue" />
  </div>
  <div v-else class="flex justify-center items-center h-80">
    <div v-if="load">
      <svg xmlns="http://www.w3.org/2000/svg" 
        class="h-24 w-24 fill-red-pink animate-spin"
        width="15"
        height="15" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
    </div>
    </div>
</template>


