<template>
  <div>
    <h3 class="mt-4" style="color: black">
      Kokku: €{{ total.toFixed(2) }}
    </h3>

    <p v-if="total > 2000" style="color: red;">
      <b>Kohutav! Täielik laristamine!</b>
    </p>
    <p v-else-if="total > 1500" style="color: darkorange;">
      <b>Liiga palju!</b>
    </p>
    <p v-else-if="total > 1000" style="color: orange;">
      <b>Kas palju pole juba!</b>
    </p>
    <p v-else-if="total > 500" style="color: forestgreen;">
      <b>Talutav!</b>
    </p>
    <p v-else style="color: limegreen;">
      <b>Veel pole hullu!</b>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>

