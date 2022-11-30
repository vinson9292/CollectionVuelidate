<template>
  <div class="container">
    <h4>案號 : {{ caseNo }}</h4>
    <AppraisalInfo :case-no="caseNo" />
    <PropertyInfo :case-no="caseNo" />
    <!-- <PropertyInfo :case-no="caseNo" /> -->
    <!-- <CssGrid/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppraisalInfo from './components/AppraisalInfo.vue'
import AppraisalList from './components/AppraisalList.vue'
import PropertyInfo from './components/PropertyInfo.vue'
import PropertyList from './components/PropertyList.vue'
import CssGrid from './components/CssGrid.vue'
export default defineComponent({
  name: 'App',
  components: {
    AppraisalInfo,
    AppraisalList,
    PropertyInfo,
    PropertyList,
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



