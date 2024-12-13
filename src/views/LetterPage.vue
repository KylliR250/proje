<template>
  <div class="letter-page">
    <h1>ÜKSKÕIK, KAS SIND PAHANDAS JÕULUMEES VÕI PÄKAPIKK</h1>
    <div class="paper">

      <div class="image-container">
        <img src="https://static.vecteezy.com/system/resources/previews/034/794/259/non_2x/christmas-cartoon-bad-santa-criminal-with-mugshot-vector.jpg" alt="Picture" class="letter-image" />
      </div>


      <textarea
          v-model="letter"
          class="letter-input"
          placeholder="Kirjuta kõik, mis hingel. Sõima, kiru või solva, keegi ei saa teada..."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letter: '',
    };
  },
};
</script>

<style scoped>
.letter-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: orangered;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.paper {
  display: flex;
  background-color: white;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  align-items: center;
}

.image-container {
  margin-right: 20px;
}

.letter-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
}

.letter-input {
  width: 100%;
  height: 400px;
  padding: 15px;
  font-size: 1.2rem;
  color: #333;
  background-color: white;
  border: 2px solid orangered;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  resize: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-input::placeholder {
  text-align: center;
  line-height: 150%;
}

.letter-input:focus {
  outline: none;
  border-color: #4CAF50;
}

@media (max-width: 768px) {
  .paper {
    width: 90%;
    flex-direction: column;
  }

  .image-container {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .letter-input {
    height: 300px;
  }
}
</style>
