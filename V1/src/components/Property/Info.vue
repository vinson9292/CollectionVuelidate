<template>
    <div class="bd-example">
        <h4>不動產清單</h4>
        <PropertyList :properts="vm.properts" :deleteProperty="deleteProperty" />
        <n-button class="btn btn-primary btn-group" v-on:click="addProperty">add</n-button>
        <n-button class="btn btn-primary btn-group" v-on:click="saveProperty">save</n-button>
        <n-button class="btn btn-primary btn-group" v-on:click="deleteAllProperty">cleraAll</n-button>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import PropertyList from './List.vue'
import { Property } from '../../types/Property'
import { useVuelidate } from '@vuelidate/core'
import { saveItems, readItems } from '../../utils/RecommentdationStore'

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
        const vm = reactive<{ properts: Array<Property> }>({
            properts: []
        });

        const addProperty = async () => {
            let response = await v$.value.$validate();
            if (response) {
                vm.properts.push(new Property())
            }
        }
        const deleteAllProperty = () => {
            vm.properts = new Array<Property>;
            vm.properts.push(new Property());
        }
        const deleteProperty = (index: number) => {
            vm.properts.splice(index, 1);
        }
        const saveProperty = async () => {
            let response = await v$.value.$validate();
            console.log('response', response);
            console.log('v$.value.$errors', v$.value.$errors)
            if (response) {
                console.log(vm);
                saveItems('propertyList', vm.properts);
                vm.properts.push(new Property())
            }
        }

        const v$ = useVuelidate()
        onMounted(() => {
            setTimeout(() => {
                vm.properts = readItems('propertyList');
            }, 500)
        })

        // watch(() => vm.properts, savePropertys, { deep: true })
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

.bd-example {
    padding: 1.5rem;
    margin-right: 0;
    margin-left: 0;
    border-width: 1px;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}

.btn-group {
    margin: 0.25rem 0.125rem
}
</style>