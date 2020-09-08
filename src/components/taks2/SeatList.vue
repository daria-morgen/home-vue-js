<template>
  <div> <!--требование к шаблону, должен быть один корневой тег-->
    <ul>
      <SeatItem
          v-for="(todo,i) in seats"
          v-bind:todo="todo"
          v-bind:index="i"
      />
    </ul>
  </div>
</template>

<script>
import SeatItem from '@/components/taks2/SeatItem'

export default {
  props: ['seats'],
  components: {SeatItem}
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>