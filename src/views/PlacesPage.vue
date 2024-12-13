<template>
  <div class="gallery-container">
    <div class="gallery-grid">

      <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="gallery-item"
      >
        <img :src="item.image" :alt="'Image ' + (index + 1)" class="gallery-image" />
        <p class="image-caption">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        { image: 'https://www.nordicexperience.com/wp-content/uploads/2020/11/shutterstock_121813165-1024x682.jpg', text: 'Tallinna vanalinn' },
        { image: 'data:image/jpeg;base64,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', text: 'Rocca Al Mare Keskus' },
        { image: 'https://live.s3.teliahybridcloud.com/s3fs-public/styles/honorary_thumbnail_autoplay_gif/public/image_bank_foto/2023-01/J%C3%B5ulupeod%202022.%20Lapsed%20m%C3%A4ngimas.JPG?itok=FSU0p8xT', text: 'Jõulupeod' },
        { image: 'https://jõulumaa.ee/wp-content/uploads/2015/12/1455868_855184977932535_8598374717266612487_n.jpg', text: 'Jõulumaad' },
        { image: 'https://visitestonia.com/images/2859853/11083946_948380395172285_6402719409026064068_o.jpg', text: 'Ülemiste keskus' },
        { image: 'https://g-city.com/wp-content/uploads/2022/12/46-Kristiine-Keskus_0004_46-Kristiine-Keskus_1.jpg', text: 'Kristiine keskus' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Viru_Keskus_%282015%29.jpg/1200px-Viru_Keskus_%282015%29.jpg', text: 'Viru keskus' },
        { image: 'https://i0.wp.com/thehiddennorth.com/wp-content/uploads/2023/10/Rovaniemi.jpg?fit=1400%2C924&ssl=1', text: 'Rovaniemi' },

      ],
    };
  },
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: #f9f9f9;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

.gallery-item {
  text-align: center;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 5px solid #f1f1f1;
}

.image-caption {
  padding: 15px;
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Arial', sans-serif;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
