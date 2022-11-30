<template>
  <div class="container">
    <TodoInfo :case-no="caseNo" />
    <h4>案號 : {{ caseNo }}</h4>
    <AppraisalInfo :case-no="caseNo" />
    <PropertyInfo :case-no="caseNo" />
    <CheckingInfo :case-no="caseNo" />
    <!-- <CssGrid/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoInfo from './components/Todo/Info.vue'
import AppraisalInfo from './components/Appraisal/Info.vue'
import PropertyInfo from './components/Property/Info.vue'
import CheckingInfo from './components/Checking/Info.vue'
import CssGrid from './components/CssGrid.vue'
export default defineComponent({
  name: 'App',
  components: {
    TodoInfo,
    AppraisalInfo,
    PropertyInfo,
    CheckingInfo,
    CssGrid
  },
  setup() {
    const caseNo = ref('A1234567890')
    return {
      caseNo
    }
  }
})
</script>
<style>
.container {
  width: 100%;
  height: 100%;
}
</style>



