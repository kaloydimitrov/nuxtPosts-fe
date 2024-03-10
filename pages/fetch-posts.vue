<template>
  <div>
    <h1>Fetch Posts</h1>
    <Button label="Send Request" @click="fetchData"/>
  </div>
  <Card>
    <template #content>
      <pre class="m-0">{{ posts }}</pre>
    </template>
  </Card>
</template>

<script setup>
import {ref} from 'vue';

const posts = ref('');

const fetchData = async () => {
  const response = await fetch('http://localhost:3333/post/');
  const data = await response.json();
  let result = '';

  for (const obj of data["data"]) {
    result += `Title: ${obj["title"]} (${obj["id"]})\nContent: ${obj["content"]}` + '\n\n';
  }

  posts.value = result;
};
</script>

<script>
export default {
  layout: 'default'
};
</script>

<style scoped>
</style>
