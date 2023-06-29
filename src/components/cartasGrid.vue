<script setup>
import { defineProps } from 'vue';
import carta from './carta.vue'

const Props = defineProps({
  emails: Object,
  value: String
});


</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="" v-for="email in Props.emails">
          <carta :email="email" :value="value"/>
        </div>
    </div>

</template>