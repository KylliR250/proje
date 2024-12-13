<template>
  <div class="app-container">
    <div class="poem-container">
      <div
          v-for="(poem, index) in poems"
          :key="index"
          class="poem-card"
          :style="{ backgroundColor: poem.bgColor }"
      >
        <p class="poem-text">{{ poem.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      poems: [
        {
          text: `Küll on kena kelguga
                 trepist alla lasta!
                 Põnts-põnts kajavad
                 küünarnukid vasta!`,
          bgColor: '#f1f144'
        },
        {
          text: `Meil metsas sirgus kuuseke,
                 on metsas kodu tal.
                 Ta varsti paljas rootsuke
                 ja praksub ahju all.`,
          bgColor: '#46f114'
        },
        {
          text: `Jõulurahu saabund maale
                 linnas teda pole.
                 Keset linna sigin-sagin,
                 lärmi nii, mis kole.`,
          bgColor: '#f1f144'
        },
        {
          text: `Päkapikud, närakad,
                 keldris lasid kärakat.
                 Laste kommid ära sõid,
                 muudkui viina peale jõid.`,
          bgColor: '#46f114'
        },
        {
          text: `Jõuluvana, tore mees,
                 mantel seljas, habe ees.
                 Tuli külla, puges põhku,
                 peeretas ja lendas õhku.`,
          bgColor: '#f1f144'
        },
        {
          text: `Jõuluvana paks ja kole,
                 mingit ilu tal ei ole -
                 punanina, takust habe -
                 väljanägemine jube`,
          bgColor: '#46f114'
        },
        {
          text: `Tuleb meile jõulumees
                 lükkab saani enda ees.
                 Päkapikud närakad
                 panevad seal kärakat.`,
          bgColor: '#f1f144'
        },
        {
          text: `Päkapikud veavad saani,
                 jõulutaat, see täis on maani.
                 Jõulurahu ka ei kehti,
                 põder eile vorstiks tehti.`,
          bgColor: '#46f114'
        },
        {
          text: `Päkapikul jõuluime -
                 enne nägi, nüüd on pime.`,
          bgColor: '#f1f144'
        }
      ]
    };
  }
};
</script>

<style scoped>
.app-container {
  font-family: 'Arial', sans-serif;
  background: orangered;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.poem-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

.poem-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.poem-card:hover {
  transform: translateY(-5px);
}

.poem-text {
  font-size: 1.2em;
  color: black;
  line-height: 1.6;
  font-weight: bold;
}

@media (max-width: 600px) {
  .poem-text {
    font-size: 1em;
  }
}
</style>
