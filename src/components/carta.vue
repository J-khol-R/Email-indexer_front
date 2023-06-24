<script setup>
const Props = defineProps({
  email: Object
});
</script>

<template>
   <h4>FROM : {{ Props.email._source.from }}</h4>
   <h4>TO : {{ Props.email._source.to }}</h4>
   <p>MESSAGE : {{ Props.email._source.content }}</p>
</template>

