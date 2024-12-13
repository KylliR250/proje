<template>
  <div id="app" class="app-container">
    <h3 class="timer" style="color: black">
      Raisatud aeg: {{ formattedTime }}
    </h3>

    <router-link
        v-if="$route.path !== '/'"
        to="/"
        class="home-link">
      <img
          src="https://static.vecteezy.com/system/resources/previews/033/134/913/non_2x/funny-christmas-tree-weird-characters-for-christmas-fir-tree-for-xmas-greetings-cards-invitations-new-year-mood-illustration-isolated-on-transparent-background-png.png"
          alt="Home"
          class="home-image"
      />
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      timer: 0,
    };
  },
  mounted() {
    this.timerInterval = setInterval(() => {
      this.timer += 1;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
  computed: {
    formattedTime() {
      let hours = Math.floor(this.timer / 3600);
      let minutes = Math.floor((this.timer % 3600) / 60);
      let seconds = this.timer % 60;

      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    }
  },
  methods: {

    pad(value) {
      return value < 10 ? `0${value}` : value;
    }
  }
};
</script>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
}

.home-link {
  position: absolute;
  top: 20px;
  left: 20px;
  text-decoration: none;
}

.home-image {
  width: 100px;
  height: auto;
  transition: transform 0.3s ease;
}

.home-image:hover {
  transform: scale(1.1);
}

h3.timer {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.0rem;
  color: #333;
  margin: 0;
}
</style>
