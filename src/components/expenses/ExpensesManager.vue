<template>
  <div>
    <AddExpensesForm @add-expense="addExpense" />

    <ExpensesTable :items="items" @remove-expense="removeExpense" />

    <ExpensesSummary :total="total" />
  </div>
</template>

<script>
import AddExpensesForm from './AddExpensesForm.vue';
import ExpensesTable from './ExpensesTable.vue';
import ExpensesSummary from './ExpensesSummary.vue';

export default {
  components: {
    AddExpensesForm,
    ExpensesTable,
    ExpensesSummary,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    total() {

      return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
  },
  methods: {
    addExpense(newExpense) {

      this.items.push(newExpense);
    },
    removeExpense(name) {

      this.items = this.items.filter(item => item.name !== name);
    },
  },
};
</script>
