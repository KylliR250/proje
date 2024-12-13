<template>
  <div class="app">
    <div class="container">
      <h1 class="title">AINULT VÄLTIMATUD KINGITUSED</h1>
      <div class="list-container">
        <ul class="recipient-list">
          <li v-for="(recipient, index) in recipients" :key="index">
            {{ recipient }}
          </li>
        </ul>
      </div>
      <form @submit.prevent="addRecipient">
        <input v-model="newRecipient" type="text" placeholder="Sisesta nimi" />
        <button type="submit">Lisa saaja</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipients: ['Jüri', 'Priit', 'Merike', 'Lea', 'Hanna', 'Joonas', 'Mehis', 'Kairi', 'Christo', 'Epp'],
      newRecipient: '',
    };
  },
  methods: {
    addRecipient() {
      if (this.newRecipient.trim()) {
        this.recipients.push(this.newRecipient.trim());
        this.newRecipient = '';
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: red;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: red;
}

.container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.list-container {
  margin-bottom: 20px;
  max-height: 200px;
  overflow-y: auto;
}

.recipient-list {
  list-style-type: none;
  padding-left: 0;
}

.recipient-list li {
  font-size: 18px;
  color: black;
  margin: 5px 0;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form input {
  width: 70%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  width: 25%;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: darkgreen;
  color: white;
  cursor: pointer;
}

form button:hover {
  background-color: darkgreen;
}
</style>
