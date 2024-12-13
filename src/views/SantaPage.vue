<template>
  <div class="random-text-page">
    <h1 class="random-text">JÕULUVANA</h1>
    <p class="paragraph-text">
      Jõuluvana või jõulutaat ei ole eesti laste kodudes just väga ammune külaline. Teada on, et arvatavasti päris esimene jõulutaat käis eesti lastel külas 1896. aastal Pärnumaal Audru-Malla koolimajas – seega siis 124 aastat tagasi. Kas see imelik "jõuluonu" ka lastele kingitusi tõi, seda me kahjuks ei tea, kuid kingitusi toov jõulumees sai saksa eeskujul Eestis laiemalt tuttavaks tõepoolest alles 19. sajandi lõpus. Ka sõna "jõulumees" on otsetõlge saksa keelest – Weinachtsmann.

      Varem pandi kingitused kas kuuse alla või lauale. 1882. aastal said eesti lugejad näha, kuidas senitundmatu tegelane – jõulumees võiks välja näha. Jakob Kõrv jutustas eesti keeles ümber Dickensi jõulujutu ja kuigi selles loos iseenesest jõuluvana ei mainitud, oli raamatukese kaanele tema pilt ära trükitud.

      Kui keegi on juhtunud nägema Mark Soosaare filmi "Jõulud Vigalas", mis kajastab 1905. aasta traagilisi sündmusi Läänemaal, siis on seal episood, kuidas kunstnik Ants Laikmaa (Laipmann) teeb oma venna, Bernhard Laipmanni lastele jõuluvana ja toob kinke. Tolleaegne jõulumees meenutas välimuselt veel vägagi sellist metsikuvõitu tegelast, midagi näärisoku ja mardisandi vahepealset.

      Päriselt kodunenud oli jõuluvana Eestis 1920. aastateks.
    </p>


  </div>
</template>

<script>
export default {
  name: 'SantaPage',
};
</script>

<style scoped>
.random-text-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hotpink;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.random-text {
  font-size: 3rem;
  color: black;
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


</style>
