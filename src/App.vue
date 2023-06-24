<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from './utils/axios';
import cartasGrid from './components/cartasGrid.vue';

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
 <!-- <div class="flex w-full h-screen justify-center items-center gap-20"> -->
  <!-- <div>
    <img src="./assets/buzon.png" alt="buzon" class="w-32 h-32">
  </div> -->
  <div class="container max-w-screen-lg mx-auto px-6">
   <cartasGrid :emails="emails.hits.hits"/>
   <p>hola</p>
 </div>
 <!-- </div> -->
 <!-- <div v-for="email in emails.hits.hits">{{ email._source.from }}</div> -->
 <!-- <div class="container max-w-screen-lg mx-auto px-6">
   <cartasGrid :emails="emails.hits.hits"/>
 </div> -->
</template>




