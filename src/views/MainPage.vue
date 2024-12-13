<template>
  <div class="main-page">
    <h1 class="title1">TUJURIKKUJA</h1>
    <h1 class="title2">KOGU TÕDE JÕULUDEST</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/start">
            <button class="btn btn-thahtane"><b>TAHAN TEADA</b></button>
          </router-link>
        </li>
        <li>
          <button class="btn btn-eitaha" @click="showPopup"><b>EI TAHA TEADA</b></button>
        </li>
      </ul>
    </nav>

    <div v-if="isPopupVisible" class="modal">
      <div class="modal-content">
        <h2>{{ popupText }}</h2>
        <button class="close-btn" @click="closePopup">Sulge</button>
        <div class="style-controls">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      isPopupVisible: false,
      popupText: 'TAHAD KÜLL!',
      fontSize: 24,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style scoped>
.main-page {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-image: url('https://seattlerefined.com/resources/media/54fb05fa-0018-4f85-b1a4-b0565f19109a-full16x9_drseussthegrinchGRC_Tsr1Sheet_GrinchAndMax_RGB_1_rgb.jpg?1541794979681');
  background-size: cover;
  background-position: center;
  color: black;
  text-align: center;
  padding: 20px;
}

.title1 {
  font-size: 5rem;
  margin-top: 175px;
  font-weight: bold;
}

.title2 {
  font-size: 3rem;
  margin-bottom: 50px;
  font-weight: bold;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}

nav li {
  margin: 0;
}

button {
  font-size: 1.2rem;
  padding: 15px 30px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.btn-thahtane:hover {
  background-color: green;
}

.btn-eitaha:hover {
  background-color: red;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  font-size: 24px;
  margin-bottom: 50px;
}

.close-btn {
  padding: 10px 20px;
  background-color: #96d22b;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: darkgreen;
}

.style-controls {
  margin-top: 20px;
}

.style-controls label {
  font-size: 18px;
}

.style-controls input {
  padding: 5px;
  font-size: 16px;
  width: 60px;
  margin-left: 10px;
}
</style>