<template>
  <li>
    <span v-bind:class="{done: todo.dateOfRegistration!==''}">
      <div>
        <strong>Seat {{ index + 1 }} : </strong> {{ todo.title }}
        <strong>Date of registration: </strong>{{ todo.dateOfRegistration }}
      </div>
      <strong> Check in:  </strong>
      <input type="checkbox" v-if="todo.dateOfRegistration===''" v-on:change="changeRequired()">
    </span>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: false
    },
    index: Number
  },
  methods: {
    changeRequired() {
      if (this.todo.dateOfRegistration !== '') {
        this.todo.dateOfRegistration = '';
      } else {
        this.todo.dateOfRegistration = new Date();
      }
    }

  }
}
</script>

<style>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>