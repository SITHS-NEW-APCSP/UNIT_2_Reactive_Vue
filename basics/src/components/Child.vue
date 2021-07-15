<template>
  <div>
    <h3>{{ greeting }}</h3>
    <ul>
      <li v-for="flavor in icecream" :key="flavor">{{ flavor }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    greeting: String,
    icecream: Array,
  },
};
</script>

<style></style>
