<script setup>
import { defineProps } from 'vue';
import carta from './carta.vue'

const Props = defineProps({
  emails: Object
});

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div v-for="email in Props.emails" class="border-4 border-black rounded p-3">
          <carta :email="email"/>
        </div>
    </div>
</template>