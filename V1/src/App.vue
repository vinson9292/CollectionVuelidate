<template>
  <div class="container">
    <PropertyInfo :case-no="caseNo" />
    <PropertyInfo :case-no="caseNo" />
    <CssGrid/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PropertyInfo from './components/PropertyInfo.vue'
import PropertyList from './components/PropertyList.vue'
import CssGrid from './components/CssGrid.vue'
export default defineComponent({
  name: 'App',
  components: {
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

.wrapper1 {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.wrapper2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.wrapper3 {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}

.wrapper4 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.wrapper5 {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}

.wrapper6 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}

.wrapper7 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}

.wrapper8 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}

.box3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.wrapper10 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box11 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box22 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}


.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</style>



