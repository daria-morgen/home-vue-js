<template>
  <div> <!--требование к шаблону, должен быть один корневой тег-->
    <FIO v-if="isEnable('FIO')"/>
    <Passport v-if="isEnable('Passport')"/>
    <Position v-if="isEnable('Position')"/>
    <Rate v-if="isEnable('Rate')"/>
    <button
        v-on:click="hasPrevious"
        :disabled="buttonNextIsActive"
    >previous
    </button>
    <button
        v-on:click="hasNext"
        :disabled="buttonPreviousIsActive"
    >next
    </button>
  </div>
</template>

<script>
import FIO from '@/components/taks1/FIO'
import Passport from '@/components/taks1/Passport'
import Position from '@/components/taks1/Position'
import Rate from '@/components/taks1/Rate'

export default {
  data() {
    return {
      templates: [
        {id: 0, template: 'FIO', enabled: true},
        {id: 1, template: 'Passport', enabled: false},
        {id: 2, template: 'Position', enabled: false},
        {id: 3, template: 'Rate', enabled: false}
      ],
      buttonNextIsActive: true,
      buttonPreviousIsActive: false
    }
  },
  methods: {
    isEnable(template) {
      return this.templates.find(e => e.template === template).enabled;
    },
    hasNext() {
      let currentIndex = this.templates.find(e => e.enabled).id;
      if (currentIndex !== this.templates.length - 1) {
        this.templates.find(e => e.id === currentIndex).enabled = false;
        this.templates.find(e => e.id === currentIndex + 1).enabled = true;
      } else if(currentIndex===this.templates.length - 1) {
        this.buttonNextIsActive = false;
        this.buttonPreviousIsActive = true;
      }
    },
    hasPrevious() {
      let currentIndex = this.templates.find(e => e.enabled).id;
      if (currentIndex !== 0) {
        this.templates.find(e => e.id === currentIndex).enabled = false;
        this.templates.find(e => e.id === currentIndex - 1).enabled = true;
      } else if(currentIndex===0) {
        this.buttonPreviousIsActive = false;
        this.buttonNextIsActive = true;
      }
    },
  },
  components: {FIO, Passport, Position, Rate}

}
</script>

<style scoped>

</style>