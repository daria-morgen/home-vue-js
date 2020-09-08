<template>
  <div>
    <li>
      <strong>{{ index + 1 }}</strong>
      {{ title }}
    </li>
  </div>
</template>

<script>
export default {
  props: ['title','index']
}

</script>