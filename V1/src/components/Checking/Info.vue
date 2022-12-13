<template>
    <div class="bd-example">
        <h4>檢核清單</h4>
        <CheckingList :items="vm.items" :deleteItem="deleteItem" />
        <n-button class="btn btn-primary btn-group" v-on:click="add">add</n-button>
        <n-button class="btn btn-primary btn-group" v-on:click="save">save</n-button>
        <n-button class="btn btn-primary btn-group" v-on:click="deleteAll">cleraAll</n-button>
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