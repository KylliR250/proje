<template>
  <form @submit.prevent="handleSubmit" class="row mb-4">
    <div class="col d-flex justify-content-end">
      <label for="expense-name" class="form-label">Kulutus</label>
      <input
          id="expense-name"
          v-model="newExpense.name"
          placeholder=""
          class="form-control"
          required
      />
    </div>

    <div class="col d-flex justify-content-end">
      <label for="expense-price" class="form-label">Hind</label>
      <input
          id="expense-price"
          v-model.number="newExpense.price"
          type="number"
          placeholder="Hind"
          class="form-control"
          required
      />
    </div>

    <div class="col d-flex justify-content-end">
      <label for="expense-quantity" class="form-label">Kogus</label>
      <input
          id="expense-quantity"
          v-model.number="newExpense.quantity"
          type="number"
          placeholder="Kogus"
          class="form-control"
          required
      />
    </div>

    <div class="col d-flex justify-content-end">
      <button class="btn btn-primary w-100">Lisa</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    onAddExpense: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      newExpense: {name: "", price: 0, quantity: 0},
    };
  },
  methods: {
    handleSubmit() {
      this.onAddExpense(this.newExpense);
      this.newExpense = {name: "", price: 0, quantity: 0};
    },
  },
};
</script>

<style scoped>
.form-label {
  display: block;
  text-align: left;
}

button {
  margin-top: 20px;
  color: white;
  background-color: chocolate;
}

button:hover {
  background-color: chocolate;
}
</style>
