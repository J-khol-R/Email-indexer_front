<script setup>
const Props = defineProps({
  email: Object
});
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="raw-span-2">
      <h4><span class="font-bold">FROM : </span>{{ Props.email._source.from }}</h4>
      <h4><span class="font-bold">TO : </span>{{ Props.email._source.to }}</h4>
      <p><span class="font-bold">MESSAGE : </span>{{ Props.email._source.content }}</p>
    </div>
    <div class="grid grid-rows-2">
      <img src="../assets/sello.png" alt="sello" class="w-12 h-12 ml-20 mt-5">
    </div>
  </div>
</template>

