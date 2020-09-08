<template>
  <div>
    <h3>Задание 2</h3>
    <h4>
      Создать нумерованный список регистраций на конкретный авиарейс. Занятые места отмечать датой/временем регистрации,
      свободные места – соответствующими надписями «свободно». Предусмотреть возможность регистрации на этот авиарейс в
      процессе просмотра списка.
    </h4>
    <router-link to="/">Home</router-link>
    <hr>
    <SeatList
        v-bind:seats="seats"
        @remove-todo="checkIn"/>
  </div>
</template>
<script>
import SeatList from '@/components/taks2/SeatList'

export default {
  name: 'App',
  data() {
    return {
      seats: [{
        "id": 1,
        "title": "F1",
        "dateOfRegistration":new Date(),
        "completed": false
      },
        {
          "id": 2,
          "title": "F2",
          "dateOfRegistration":new Date(),
          "completed": false
        },
        {
          "id": 3,
          "title": "F3",
          "dateOfRegistration":'',
          "completed": false
        }],
      loading: true
    }
  },
  methods: {
    checkIn(id) {
      this.seats = this.seats.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.seats.push(todo)
    }
  },
  components: {
    SeatList
  }
}
</script>