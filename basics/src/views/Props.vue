<template>
  <div>
    <h1>Child prop:</h1>
    <Child :greeting="greeting" :icecream="icecream" />
    <h1>EmittingChild prop ($emit):</h1>
    <EmittingChild :buttonText="buttonText" @event-emit="executeEvent" />
  </div>
</template>

<script>
import Child from "../components/Child";
import EmittingChild from "../components/EmittingChild";

export default {
  data() {
    return {
      greeting: "Welcome to Props",
      icecream: ["Chocolate", "Vanilla", "Strawberry", "Pistachio"],
      buttonText: "Emit Event from Child to Parent",
    };
  },
  components: {
    Child,
    EmittingChild,
  },
  methods: {
    executeEvent(msg) {
      alert(`Event emitted from child element with message: ${msg}`);
    },
  },
};
</script>

<style scoped>
h1 {
  font-style: italic;
}
</style>
