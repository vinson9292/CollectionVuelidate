<template>
  <MainCase :case-no="caseNo" />
  <PropertyList />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MainCase from './components/MainCase.vue'
import PropertyList from './components/PropertyList.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainCase,
    PropertyList
  },
  setup() {
    const caseNo = ref('A1234567890')
    return {
      caseNo
    }
  }
})
</script>



