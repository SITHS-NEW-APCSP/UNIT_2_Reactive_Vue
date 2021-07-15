<template>
  <button @click="emitToParent">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "emittingChild",
  props: {
    buttonText: String,
  },
  methods: {
    emitToParent() {
      this.$emit("event-emit", "hamborger");
    },
  },
};
</script>