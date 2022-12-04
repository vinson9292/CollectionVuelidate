<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <TodoInfo :case-no="caseNo" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Table></Table>
      </div>
    </div>
    <div class="row">
      <div class="col">

      </div>
    </div>
    <div class="row">
      <div class="col">

      </div>
    </div>
    <div class="row">
      <div class="col">

      </div>

    </div>

    <!--<h4>案號 : {{ caseNo }}</h4>
    <AppraisalInfo :case-no="caseNo" />
    <PropertyInfo :case-no="caseNo" />
    <CheckingInfo :case-no="caseNo" /> -->

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoInfo from './components/Todo/Info.vue'
import AppraisalInfo from './components/Appraisal/Info.vue'
import PropertyInfo from './components/Property/Info.vue'
import CheckingInfo from './components/Checking/Info.vue'
import Table from './components/bootstrap/table.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoInfo,
    AppraisalInfo,
    PropertyInfo,
    CheckingInfo,
    Table
  },
  compatConfig: { MODE: 3 },
  setup() {
    const caseNo = ref('A1234567890')
    return {
      caseNo,
      Table
    }
  }
})
</script>
<style>
</style>



