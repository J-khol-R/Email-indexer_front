<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from './utils/axios';
import cartasGrid from './components/cartasGrid.vue';
import buscador from './components/buscador.vue';

const emails = ref([])

const fetchMails = async() => {
  try{
    const { data } = await axiosClient.get("/word/you")
    emails.value = data;
  }catch(err){
    console.log(err)
  }
}

onMounted(() =>{
  fetchMails()
})
</script>

<template>
    <div class="border-gradient">
      <buscador />
      <div class="container max-w-screen-lg mx-auto">
          <cartasGrid :emails="emails.hits.hits"/>
      </div>
      
    </div>

 
</template>

<style>
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
</style>




