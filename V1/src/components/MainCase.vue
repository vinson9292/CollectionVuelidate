<template>
    <h2>案號 : {{ caseNo }}</h2><br />
    <div>
        <PropertyList :properts="vm.properts" />
        <button>add</button>
        <button v-bind:click="add">check</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import PropertyList from './PropertyList.vue'
import { Property } from '../types/Property'
export default defineComponent({
    name: 'MainCase',
    components: {
        PropertyList
    },
    props: {
        caseNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const caseNo = props.caseNo;
        const vm = reactive({
            properts: [
                { type: "", area: 0, price: 0, envalue: 0 },
                { type: "456", area: 456, price: 456, envalue: 456 },
                { type: "789", area: 789, price: 789, envalue: 789 },
            ]
        });
        const add = function (){
            vm.properts.push(new Property())
        }
        return {
            vm,
            caseNo,
            ...toRefs(vm.properts),
            add
        }
    }
})
</script>