<template>
  <div class="start-page">
    <h1></h1>
    <p></p>

    <div class="button-container">
      <router-link to="/expenses">
        <button class="btn">MIKS KÕIK NII KALLIS ON???</button>
      </router-link>
      <router-link to="/places">
        <button class="btn">NENDESSE KOHTADESSE DETSEMBRIS KÜLL EI LÄHE</button>
      </router-link>
      <router-link to="/poems">
        <button class="btn">JÕULUSALMID, MILLE PEALE KEEGI KINDLASTI SOLVUB</button>
      </router-link>
      <router-link to="/presents">
        <button class="btn">NEILE KINGITUSTE TEGEMIST EI ÕNNESTU VÄLTIDA</button>
      </router-link>
      <router-link to="/beginning">
        <button class="btn">KUIDAS SEE ÕUDUS ALGUSE SAI</button>
      </router-link>
      <router-link to="/letter">
        <button class="btn">TERAAPIANURK</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
};
</script>

<style scoped>
.start-page {
  background-color: #b7be19;
  color: white;
  text-align: center;
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

img {
  width: 150px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: darkred;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: -100px;
}

button {
  padding: 15px 30px;
  background-color: darkred;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button:hover {
  background-color: darkgreen;
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 255, 0, 0.5);
}


button:active {
  background-color: #b22222;
  transform: translateY(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

button::after {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
}

button:active::after {
  transform: scale(9);
  opacity: 0;
  animation: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
