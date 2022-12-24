<template>
  <n-message-provider>
    <div class="container">
      <div class="row">
        <div class="col">
          <TodoInfo :case-no="caseNo" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <!-- <AppraisalInfo :case-no="caseNo" /> -->
        </div>
      </div>
      <div class="row">
        <div class="col">
          <!-- <PropertyInfo :case-no="caseNo" /> -->
        </div>
      </div>
      <div class="row">
        <div class="col">
          <!-- <CheckingInfo :case-no="caseNo" /> -->
        </div>
      </div>
      <div class="row">
        <div class="col">
          <!-- <AppraisalInfo :case-no="caseNo" /> -->
        </div>
      </div>

      <div class="header">案號 : {{ caseNo }}</div>
      <div class="footer">案號 : {{ caseNo }}</div>
    </div>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoInfo from './components/Todo/Info.vue'
import AppraisalInfo from './components/Appraisal/Info.vue'
import PropertyInfo from './components/Property/Info.vue'
import CheckingInfo from './components/Checking/Info.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoInfo,
    AppraisalInfo,
    PropertyInfo,
    CheckingInfo
  },
  setup() {
    const caseNo = ref('A1234567890');
    return {
      caseNo
    }
  }
})
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

@media screen {

  .header,
  .footer {
    display: none;
  }
}

@media print {
  .header {
    display: block;
    position: fixed;
    top: 0;
  }

  .footer {
    margin: 0px 2px 0px 7px;
    display: block;
    position: fixed;
    bottom: 0;
  }
}
</style>



