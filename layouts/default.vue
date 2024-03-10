<template>
  <div class="card">
    <TabMenu :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span v-bind="props.icon"/>
            <span v-bind="props.label">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span v-bind="props.icon"/>
          <span v-bind="props.label">{{ item.label }}</span>
        </a>
      </template>
    </TabMenu>
  </div>

  <main>
    <slot/>
  </main>
</template>

<script setup>
import {ref} from "vue";

const items = ref([
  {label: 'Home', icon: 'pi pi-home', route: '/'},
  {label: 'Fetch Hello', icon: 'pi pi-angle-left', route: '/fetch-hello'},
  {label: 'Fetch Posts', icon: 'pi pi-arrow-left', route: '/fetch-posts'},
  {label: 'Create Posts', icon: 'pi pi-plus', route: '/create-posts'}
]);
</script>