<template>
  <!-- <div class="thead">
    <div class="header-space">&nbsp;</div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <TodoInfo :case-no="caseNo" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- <HelloWorld></HelloWorld> -->
        <AppraisalInfo :case-no="caseNo" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <PropertyInfo :case-no="caseNo" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <CheckingInfo :case-no="caseNo" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <AppraisalInfo :case-no="caseNo" />
      </div>
    </div>
    <!-- <div class="thead">
      <div class="footer-space">&nbsp;</div>
    </div> -->

    <div class="header">案號 : {{ caseNo }}</div>
    <div class="footer">案號 : {{ caseNo }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoInfo from './components/Todo/Info.vue'
import AppraisalInfo from './components/Appraisal/Info.vue'
import PropertyInfo from './components/Property/Info.vue'
import CheckingInfo from './components/Checking/Info.vue'
import HelloWorld from './components/Experimental/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoInfo,
    AppraisalInfo,
    PropertyInfo,
    CheckingInfo,
    HelloWorld
  },
  compatConfig: { MODE: 3 },
  setup() {
    const caseNo = ref('A1234567890')
    return {
      caseNo,
      HelloWorld
    }
  }
})
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

/* @page {
  margin: 2mm
} */

@media screen {

  .header,
  .footer {
    display: none;
  }
}

@media print {
  tfoot {
    visibility: hidden;
  }

  div#footer_wrapper {
    margin: 0px 2px 0px 7px;
    position: fixed;
    bottom: 0;
  }

  div#footer_content {
    font-weight: bold;
  }

  .header,
  .header-space,
  .footer,
  .footer-space {
    height: 100px;
  }

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



