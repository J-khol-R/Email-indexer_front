<script setup>
import axiosClient from '../utils/axios'
import cartasGrid from './cartasGrid.vue';
import { ref } from 'vue';

const emails = ref([])
let inputValue = ""
let Counter = 0
let pagInicio = 0
let pagFinal = 21

const fetchMails = async() => {
  try{
    const { data } = await axiosClient.post("/word/"+inputValue, {
        inicio: pagInicio,
        fin: pagFinal,
      })
    emails.value = data;
  }catch(err){
    console.log(err)
  }
}

function next(){
  Counter++
  console.log(Counter)                      
  pagFinal = (Counter * 21) + Counter - 1
  pagInicio = pagFinal-21
  fetchMails(pagInicio, pagFinal)
}

function prev(){
  if (Counter == 1) {
    fetchMails(pagInicio, pagFinal)
  }else{
    Counter--
    console.log(Counter)                      
    pagFinal = (Counter * 21) + Counter - 1
    pagInicio = pagFinal-21
    fetchMails(pagInicio, pagFinal)
  }
}


// const fetchMails = async(value) => {
//   try{
//     const { data } = await axiosClient.get("/word/"+inputValue)
//     emails.value = data;
//   }catch(err){
//     console.log(err)
//   }
// }

function enviarValor(){
    fetchMails(inputValue)
}

</script>

<template>
    <div class="flex flex-col items-center my-6">
        <h2 class="text-3xl font-extrabold tracking-widest mt-2 text-white font-mono">Search</h2>
        <div class="flex items-center">
            <svg class="h-40 w-40 text-pink-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
</svg>

            <div class="flex w-40">
                
                <input type="text" name="buscador" v-model="inputValue"
                placeholder="keyword" 
                class="border-4 
                border-white 
                rounded-full 
                w-120
                px-5
                py-1
                bg-transparent
                h-10
                placeholder-text-white"/>

                <button @click="enviarValor" 
                class="bg-transparent border-none cursor-pointer w-full h-full ml-2">
                <svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                </button>
            </div>
        </div>
        <!-- logo -->
        <!-- <svg class="h-16 w-16 text-pink-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> -->

        <!-- barra buscar -->
        <!-- <div class="flex w-40">
                
                <input type="text" name="buscador" v-model="inputValue"
                placeholder="keyword" 
                class="border-4 
                border-white 
                rounded-full 
                w-40
                px-5
                py-1
                bg-transparent"/>

                <button @click="enviarValor" 
                class="bg-transparent border-none cursor-pointer w-full h-full">
                <svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                </button>
        </div> -->


        <!-- <h2 class="text-xl font-extrabold tracking-widest mt-2 text-white font-mono">Search</h2> -->

        <!-- paginacion -->
        <div class="inline-flex mt-2 xs:mt-0">
    <!-- Buttons -->
            <button @click="prev" class="inline-flex items-center px-6 py-2 my-4 text-sm 
            font-medium rounded-l hover:bg-white">
            <svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
            
            </button>
            <button @click="next" class="inline-flex items-center px-6 py-2 my-4 text-sm 
            font-medium border-0 border-l
            rounded-r hover:bg-white">
            
            <svg class="h-8 w-8 text-pink-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
            </button>
        </div>
        <h2 v-if="emails && emails.hits && emails.hits.hits && emails.hits.total" 
        class="text-xl font-mono text-white mt-5">Resultados:{{ emails.hits.total.value }}</h2>
    </div>
    <!-- fin paginacion -->

    <!-- cartasGrid component -->
    <div v-if="emails && emails.hits && emails.hits.hits && inputValue" class="container mx-auto w-full mb-20 mt-20">
        <cartasGrid :emails="emails.hits.hits" :value="inputValue"/>
    </div>
    <div v-else class="flex justify-center items-center h-80">
        <svg class="h-24 w-24 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" /></svg>
    </div>

</template>