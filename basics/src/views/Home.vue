<template>
  <div class="container">
    <h1>API Example</h1>
    <!-- this 'p' element contains the dynamically-changing `apiData` property -->
    <!-- of the page's data object. It changes on reload and on pressing the button -->
    <p>{{apiData}}</p>
    <!-- we link the button's click event to our defined fetch method -->
    <button @click="fetchData">Fetch API</button>
    <hr>
    <h1>Hello {{ student }}</h1>
    <button v-on:click="changeStudent">Change Student</button>
    <h3>{{ animal }}</h3>
    <button @click="changeAnimal">Change Animal</button>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
    <h2 v-if="isLoggedIn">Welcome</h2>
    <h2 v-else>Please Login</h2>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      student: "Harry",
      animals: ["horse", "savva(monky)", "pig", "Zebra", "lion"],
      animal: "",
      isLoggedIn: false,
      apiData: null,
    };
  },
  methods: {
    changeStudent: function () {
      this.student = "Charlene";
    },
    changeAnimal: function () {
      let number = Math.floor(Math.random() * 5);
      this.animal = this.animals[number];
    },
    login: function () {
      this.isLoggedIn = true;
    },
    logout: function () {
      this.isLoggedIn = false;
    },
    fetchData: function () {
      // using axios for api fetch requests (works similarly to fetch())
      axios
        .get("https://api.quotable.io/random")
        .then((response) => (this.apiData = response.data));
        // after getting the response, we set the `apiData` property of the 
        // data object to the response's data
      console.log("Fetched from API!");
    },
  },
  created() {},
  mounted() {
    this.fetchData();
    this.changeAnimal();
  },
  beforeCreate() {},
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
button {
  font-size: 2rem;
}
</style>
