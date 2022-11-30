<template>
    <div class="listBorder">
        <h4>外部評估清單</h4>
        <CheckingList :items="vm.items" :deleteItem="deleteItem" />
        <button v-on:click="add">add</button>
        <button v-on:click="save">save</button>
        <button v-on:click="deleteAll">cleraAll</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import CheckingList from './List.vue'
import { Checking } from '../../types/Checking'
import { useVuelidate } from '@vuelidate/core'
import { saveItems, readItems } from '../../utils/RecommentdationStore'

export default defineComponent({
    name: 'CheckingInfo',
    components: {
        CheckingList
    },
    props: {
        caseNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const vm = reactive<{ items: Array<Checking> }>({
            items: []
        });

        const add = async () => {
            let response = await v$.value.$validate();
            if (response) {
                vm.items.push(new Checking())
            }
        }
        const deleteAll = () => {
            vm.items = new Array<Checking>;
            vm.items.push(new Checking());
        }
        const deleteItem = (index: number) => {
            vm.items.splice(index, 1);
        }
        const save = async () => {
            let response = await v$.value.$validate();
            if (response) {
                saveItems('CheckingInfo', vm.items);
                vm.items.push(new Checking())
            }
        }

        const v$ = useVuelidate();
        onMounted(() => {
            setTimeout(() => {
                vm.items = readItems('CheckingInfo');
            }, 500)
        });

        return {
            vm,
            ...toRefs(vm.items),
            add,
            deleteAll,
            deleteItem,
            save,
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