<template>
  <div class="container">
    <!-- <button class="btn btn-primary btn-lg" type="button">Call Me <font-awesome-icon :icon="['fas', 'phone']" />
    </button>
    <TodoInfo :case-no="caseNo" />
    <h4>案號 : {{ caseNo }}</h4>
    <AppraisalInfo :case-no="caseNo" />
    <PropertyInfo :case-no="caseNo" />
    <CheckingInfo :case-no="caseNo" /> -->
    <!-- <CssGrid/> -->
    <h2 class="b">Bootstrap test</h2>
    <!-- <Table></Table> -->
    <Form></Form>
    <h2>File input</h2>
    <FileInput></FileInput>
    <h2>Select</h2>
    <Select></Select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoInfo from './components/Todo/Info.vue'
import AppraisalInfo from './components/Appraisal/Info.vue'
import PropertyInfo from './components/Property/Info.vue'
import CheckingInfo from './components/Checking/Info.vue'
import CssGrid from './components/CssGrid.vue'
import Table from './components/bootstrap/table.vue'
import Form from './components/bootstrap/form.vue'
import FileInput from './components/bootstrap/FileInput.vue'
import Select from './components/bootstrap/Select.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoInfo,
    AppraisalInfo,
    PropertyInfo,
    CheckingInfo,
    CssGrid,
    Table,
    Form,
    FileInput,
    Select
  },
  compatConfig: { MODE: 3 },
  setup() {
    const caseNo = ref('A1234567890')
    return {
      caseNo,
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



