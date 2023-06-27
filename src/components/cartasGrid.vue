<script setup>
import { defineProps, ref } from 'vue';
// import modal from './modal.vue';
import carta from './carta.vue'



const Props = defineProps({
  emails: Object,
  value: String
});



</script>

<template>
    <!-- <modal v-if="showModal" :show="showModal"/> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="email in Props.emails">
          <carta :email="email" :value="value"/>
        </div>
    </div>

</template>