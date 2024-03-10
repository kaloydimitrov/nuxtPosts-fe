<template>
  <div>
    <h1>Fetch Posts</h1>
    <Button label="Send Request" @click="fetchData"/>
  </div>
  <Card>
    <template #content>
      <p class="m-0">{{ posts }}</p>
    </template>
  </Card>
</template>

<script setup>
import {ref} from 'vue';

const posts = ref('');

const fetchData = async () => {
  const response = await fetch('http://localhost:3333/post/');
  const data = await response.json();
  posts.value = data["data"]; //TODO: Loop all posts     |     data["data"][0]
};
</script>

<script>
export default {
  layout: 'default'
};
</script>

<style scoped>
</style>
