<template>
    <n-button-group>
    <n-button @click="activate('top')">
      日歷
    </n-button>
  </n-button-group>
  <!-- <n-drawer v-model:show="active" :width="502" :heiht="666" :placement="placement">
    <n-drawer-content title="日歷">
      <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
        @update:value="handleUpdateValue">
        {{ year }}-{{ month }}-{{ date }}
      </n-calendar>
    </n-drawer-content>
  </n-drawer> -->
  <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
        @update:value="handleUpdateValue">
        {{ year }}-{{ month }}-{{ date }}
      </n-calendar>
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
import type { DrawerPlacement } from 'naive-ui'
import { isYesterday, addDays } from 'date-fns/esm'
import { useMessage } from 'naive-ui'

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
    const active = ref(false)
    const placement = ref<DrawerPlacement>('right')
    const activate = (place: DrawerPlacement) => {
      active.value = true
      placement.value = place
    }
    // const message = useMessage()
    return {

      caseNo,
      active,
      placement,
      activate,
      value: ref(addDays(Date.now(), 1).valueOf()),
      handleUpdateValue(
        _: number,
        { year, month, date }: { year: number; month: number; date: number }
      ) {
        // message.success(`${year}-${month}-${date}`)
      },
      isDateDisabled(timestamp: number) {
        if (isYesterday(timestamp)) {
          return true
        }
        return false
      }
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



