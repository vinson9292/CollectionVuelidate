<template>
    <div class="listBorder">
        <h4>案號 : {{ caseNo }}</h4>
        <PropertyList :properts="vm.properts" :deleteProperty="deleteProperty" />
        <button v-on:click="addProperty">add</button>
        <button v-on:click="saveProperty">save</button>
        <button v-on:click="deleteAllProperty">cleraAll</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import PropertyList from './PropertyList.vue'
import { Property } from '../types/Property'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
    name: 'PropertyInfo',
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
            properts: [new Property()]
        });
        const addProperty = async () => {
            console.log('addProperty');
            console.log('v$', v$)
            let response = await v$.value.$validate();
            if (response) {
                console.log(vm);
                vm.properts.push(new Property())
            }
        }
        const deleteAllProperty = () => {
            vm.properts = [];
            vm.properts.push(new Property());
        }
        const deleteProperty = (index: number) => {
            vm.properts.splice(index, 1);
        }
        const saveProperty = async () => {
            console.log('v$', v$)
            let response = await v$.value.$validate();
            if (response) {
                console.log(vm);
                vm.properts.push(new Property())
            }
        }
        const state = reactive(vm.properts[0])
        const rules = {
            type: { required }, // Matches properts.property.type
            area: { required }, // Matches properts.property.area
            price: { required }, // Matches properts.property.price
            envalue: { required }, // Matches properts.property.envalue
        }
        const v$ = useVuelidate(rules, state)
        return {
            vm,
            caseNo,
            ...toRefs(vm.properts),
            addProperty,
            deleteAllProperty,
            deleteProperty,
            saveProperty,
            v$
        }
    }
})
</script>
<style>
.listBorder {
    margin-top: 10px;
    border: 15px;
}
</style>