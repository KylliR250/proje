<template>
  <div class="container mt-5">

    <h1 class="text-center mb-4 text-primary">MAHAVISATUD RAHA</h1>

    <div class="card p-4 mb-4 shadow-sm">
      <h4 class="mb-3 text-muted"></h4>
      <AddExpensesForm @add-expense="addExpense" />
    </div>

    <div class="card p-4 mb-4 shadow-sm">
      <h4 class="mb-3 text-muted"></h4>
      <ExpensesTable :items="shopItems" @remove-expense="removeExpense" />
    </div>

    <div class="card p-4 mb-4 shadow-sm">
      <h4 class="mb-3 text-muted"></h4>
      <ExpensesSummary :total="shopTotal" />
    </div>
  </div>
</template>

<script>

import AddExpensesForm from "@/components/expenses/AddExpensesForm.vue";
import ExpensesTable from "@/components/expenses/ExpensesTable.vue";
import ExpensesSummary from "@/components/expenses/ExpensesSummary.vue";

import {fetchItems, addItem, removeItem, fetchTotal} from "@/api/expenses.js";

export default {
  components: {
    AddExpensesForm,
    ExpensesTable,
    ExpensesSummary,
  },
  data() {
    return {
      shopItems: [],
      shopTotal: 0,
    };
  },
  methods: {
    fetchShop() {
      Promise.all([fetchItems(), fetchTotal()])
          .then(([items, total]) => {
            this.shopItems = items.data;
            this.shopTotal = total.data;
          });
    },

    addExpense(expense) {
      addItem(expense).then(this.fetchShop);
    },

    removeExpense(name) {
      removeItem(name).then(this.fetchShop);
    },
  },
  mounted() {
    this.fetchShop();
  },
};
</script>

<style scoped>

.container {
  max-width:1100px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
}

.card .table {
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

.card h4 {
  font-size: 1.25rem;
}

.card p {
  font-size: 1rem;
  color: white;
}

.text-primary {
  color: #007bff;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.text-muted {
  color: white;
}

.shadow-sm {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
