<template>
  <div class="random-text-page">
    <h1 class="random-text">JÕULUKUUSK</h1>
    <p class="paragraph-text">
      Jõulude enimlevinud sümboli – jõulukuuse – ajaloolised juured ulatuvad tõenäoliselt iidsete egiptlaste ja hiinlaste aegadesse, kellele igihaljad puud ja oksad tähistasid igavest elu. Põhjarahvaste, nagu näiteks viikingite seas oli aga eelkristlikul ajaperioodil laialt levinud puude kummardamine. Lisaks korraldati keskaegses Euroopas 24. detsembril piiblinäidendeid, kus kujutatud «paradiisipuud» ehiti õunte ja armulaualeivaga.

      Esimesed teadaolevad pühadeaegsed väljakukuused kerkisid 1441. aastal Tallinnas ja Riias tegutsenud Mustpeade vennaskonna gildihoone ette. Pisut enam kui sada aastat hiljem kirjutas Tallinna kroonik Balthasar Russow, kuidas komme kuusk turuplatsil ehtida ning hiljem selle ümber tantsimiseks süüdata oli saanud siinmail üsna tavaliseks.

      Just 15. ja 16. sajandeid võib nimetada ka tänapäevase tubase jõulukuuse algusaegadeks. Peamiselt Saksamaalt ja selle mõju all olevatest maadest pärinenud komme levis järgnevate aastasadade jooksul rahvastiku rändamise tulemusel teistesse maadesse.

      Näiteks teisel pool Atlandi ookeani seadsid esimese teadaoleva jõulupuu 1781. aastal Kanadas üles Saksa kindral Friedrich Adolf Riedeseli ja tema naine. Vähem kui saja aasta pärast kujutati kaunistatud kuuski juba Ameerika jõulukaartidel.
    </p>

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
  background-color: limegreen;
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
