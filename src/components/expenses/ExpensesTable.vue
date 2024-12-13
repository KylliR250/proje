<template>
  <table class="table">
    <thead style="color: white">
    <tr style="background-color: lightgrey">
      <th style="color: chocolate; text-align: left;">Kulutus</th>
      <th style="color: chocolate; text-align: left;">Hind</th>
      <th style="color: chocolate; text-align: left;">Kogus</th>
      <th style="color: chocolate"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item.name">
      <td>{{ item.name }}</td>
      <td>€{{ item.price }}</td>
      <td>{{ item.quantity }}</td>
      <td>
        <button
            @click="onRemoveExpense(item.name)"
            class="btn btn-warning btn-sm"
            style="color: chocolate"
        >
          Eemalda
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    onRemoveExpense: {
      type: Function,
      required: true,
    },
  },
};
</script>