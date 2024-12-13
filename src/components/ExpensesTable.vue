<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <table class="table table-bordered">
      <thead style="color: blue">
      <tr style="background-color: lightblue">
        <th style="color: chocolate">Kulutus</th>
        <th style="color: chocolate">Hind</th>
        <th style="color: chocolate">Kogus</th>
        <th style="color: chocolate"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.name }}</td>
        <td>${{ item.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>
          <button
              @click="onRemoveExpense(item.name)"
              class="btn btn-warning btn-sm"
              style="color: maroon"
          >
            Remove
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
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

<style scoped>

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.min-vh-100 {
  min-height: 100vh;
}

.table {
  width: 80%;
  margin-top: 20px;
}

.table-bordered {
  border: 1px solid #ddd;
}

thead {
  font-weight: bold;
}
</style>
