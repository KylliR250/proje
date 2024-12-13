<template>
  <div class="random-text-page">
    <h1 class="random-text">JA NII SEE KÕIK ALGAS</h1>
    <p class="paragraph-text">
      Jõuluvana või jõulutaat ei ole eesti laste kodudes just väga ammune külaline. Teada on, et arvatavasti päris esimene jõulutaat käis eesti lastel külas 1896. aastal Pärnumaal Audru-Malla koolimajas – seega siis 124 aastat tagasi. Kas see imelik "jõuluonu" ka lastele kingitusi tõi, seda me kahjuks ei tea, kuid kingitusi toov jõulumees sai saksa eeskujul Eestis laiemalt tuttavaks tõepoolest alles 19. sajandi lõpus. Ka sõna "jõulumees" on otsetõlge saksa keelest – Weinachtsmann.

      Varem pandi kingitused kas kuuse alla või lauale. 1882. aastal said eesti lugejad näha, kuidas senitundmatu tegelane – jõulumees võiks välja näha. Jakob Kõrv jutustas eesti keeles ümber Dickensi jõulujutu ja kuigi selles loos iseenesest jõuluvana ei mainitud, oli raamatukese kaanele tema pilt ära trükitud.

      Kui keegi on juhtunud nägema Mark Soosaare filmi "Jõulud Vigalas", mis kajastab 1905. aasta traagilisi sündmusi Läänemaal, siis on seal episood, kuidas kunstnik Ants Laikmaa (Laipmann) teeb oma venna, Bernhard Laipmanni lastele jõuluvana ja toob kinke. Tolleaegne jõulumees meenutas välimuselt veel vägagi sellist metsikuvõitu tegelast, midagi näärisoku ja mardisandi vahepealset.

      Päriselt kodunenud oli jõuluvana Eestis 1920. aastateks.
    </p>

    <div class="button-container">
      <router-link to="/santa">
        <button class="btn">Jõuluvana</button>
      </router-link>
      <router-link to="/tree">
        <button class="btn">Jõulukuusk</button>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomTextPage',
};
</script>

<style scoped>
.random-text-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: orange;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.random-text {
  font-size: 3rem;
  color: darkgreen;
  font-weight: bold;
  transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
  margin-bottom: 20px;
}

.random-text:hover {
  transform: scale(1.2);
  color: #f44336;
}

.paragraph-text {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allows buttons to wrap if necessary */
  gap: 15px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  background-color: darkgreen; /* Green button background */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #388e3c;
}
</style>
