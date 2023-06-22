<script>
import carta from './carta.vue';
export default {
  components: {
    carta
  }
}
</script>

<template>
    <div class="w-3/5 grid grid-cols-3 gap-3">
        <carta v-for="index in 8" :key="index" />
    </div>
</template>