<template>
  <div>
    <h1>Create Posts</h1>
    <Button label="Post Request" @click="fetchData"/>
  </div>

  <InputText type="text" v-model="title" placeholder="Title"/>
  <InputText type="text" v-model="content" placeholder="Content"/>

  <Card>
    <template #content>
      <p class="m-0">{{ posts }}</p>
    </template>
  </Card>
</template>

<script setup>
import {ref} from 'vue';

const posts = ref('');
const title = ref('');
const content = ref('');

const fetchData = async () => {
  const additional = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title.value,
      content: content.value
    })
  };

  try {
    const response = await fetch('http://localhost:3333/post/', additional);
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
</script>

<script>
export default {
  layout: 'default'
};
</script>

<style scoped>
</style>
