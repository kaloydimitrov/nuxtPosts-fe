<template>
  <div>
    <h1>Fetch Hello</h1>
    <Button label="Send Request" @click="fetchData"/>
  </div>
  <Card>
    <template #content>
      <p class="m-0">{{ hello }}</p>
    </template>
  </Card>
</template>

<script setup>
import {ref} from 'vue';

const hello = ref('');

const fetchData = async () => {
  const response = await fetch('http://localhost:3333/');
  const data = await response.json();
  hello.value = data;
};
</script>

<script>
export default {
  layout: 'default'
};
</script>

<style scoped>
</style>
