Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    deleteGoals() {
      this.goals = [];
    },
    removeGoals(index) {
      this.goals.splice(index, 1);
    },
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    addCount(numb) {
      this.counter = this.counter + numb;
    },
    removeCount(numb) {
      this.counter = this.counter - numb;
    },
    showName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmName = this.name;
    },
  },
}).mount("#counter");
