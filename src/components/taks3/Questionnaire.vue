<template>
  <div>
    <table class="blueTable">
      <tr v-for="(item) in questions">
        <th>{{ item.question }}
          <input :id="item.id" type="text" v-model="item.answer">
        </th>
        <VariantList v-bind:variants="variants"/>
      </tr>
    </table>
    <label> {{ count }}</label>
    <button v-on:click="checkAnswers">check answers</button>
  </div>
</template>

<script>
import VariantList from '@/components/taks3/VariantList'

export default {
  data() {
    return {
      questions: [
        {id: 0, question: 'Question 1', answer: '', rightAnswer: 3},
        {id: 1, question: 'Question 2', answer: '', rightAnswer: 2},
        {id: 2, question: 'Question 3', answer: '', rightAnswer: 1},
        {id: 3, question: 'Question 4', answer: '', rightAnswer: 1}
      ],
      variants: [
        {id: 0, variant: 'variant'},
        {id: 1, variant: 'variant'},
        {id: 2, variant: 'variant'},
        {id: 3, variant: 'variant'}
      ],
      count: 0
    }
  },
  methods: {
    checkAnswers() {
      // Подсчёт: все термины в вопросе определены верно – 1 балл.
      // Если не все термины определены верно, то:
      // за 1 термин – 0,25 балла,
      // за 2 термина – 0,5 баллов,
      // за три – 0,75 баллов.
      this.count = this.questions.filter(e=>e.answer===e.rightAnswer.toString()).length/this.variants.length;
    }
  },
  components: {VariantList}
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

table.blueTable {
  border: 1px solid #1C6EA4;
  background-color: #EEEEEE;
  width: 50%;
  text-align: center;
  border-collapse: collapse;
  margin: auto;
}

table.blueTable td, table.blueTable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}

table.blueTable tbody td {
  font-size: 13px;
}

table.blueTable tr:nth-child(even) {
  background: #D0E4F5;
}

table.blueTable thead {
  background: #1C6EA4;
  background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  border-bottom: 2px solid #444444;
}

table.blueTable thead th {
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}

table.blueTable thead th:first-child {
  border-left: none;
}

table.blueTable tfoot td {
  font-size: 14px;
}

table.blueTable tfoot .links {
  text-align: right;
}

table.blueTable tfoot .links a {
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>