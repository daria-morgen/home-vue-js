<template>
  <th>
    <ul>
      <Variant
          v-for="(item,i) in variants"
          v-bind:title="item.variant"
          v-bind:index="i"
      />
    </ul>
  </th>
</template>

<script>
import Variant from '@/components/taks3/Variant'

export default {
  props:['variants'],
  methods: {},
  components: {Variant}
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>