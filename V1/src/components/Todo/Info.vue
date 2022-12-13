<template>
    <div class="bd-example">
        <h4>待辦清單清單</h4>
        <TodoList :items="vm.items" :deleteItem="deleteItem" />
        <n-button type="primary" v-on:click="add">add</n-button>
        <n-button type="primary" v-on:click="save">save</n-button>
        <n-button type="primary" v-on:click="deleteAll">cleraAll</n-button>
        </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { NButton } from 'naive-ui'
import TodoList from './List.vue'
import { Todo } from '../../types/Todo'
import { useVuelidate } from '@vuelidate/core'
import { saveItems, readItems } from '../../utils/RecommentdationStore'

export default defineComponent({
    name: 'TodoInfo',
    components: {
        TodoList,
        NButton
    },
    props: {
        caseNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const vm = reactive<{ items: Array<Todo> }>({
            items: []
        });

        const add = async () => {
            let response = await v$.value.$validate();
            if (response) {
                vm.items.push(new Todo())
            }
        }
        const deleteAll = () => {
            vm.items = new Array<Todo>;
            vm.items.push(new Todo());
        }
        const deleteItem = (index: number) => {
            vm.items.splice(index, 1);
        }
        const save = async () => {
            let response = await v$.value.$validate();
            if (response) {
                saveItems('AppraisalInfo', vm.items);
                vm.items.push(new Todo())
            }
        }

        const v$ = useVuelidate();
        onMounted(() => {
            setTimeout(() => {
                vm.items = readItems('AppraisalInfo');
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
.bd-example{
    padding: 1.5rem;
    margin-right: 0;
    margin-left: 0;
    border-width: 1px;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}
.btn-group{
    margin: 0.25rem 0.125rem
}
</style>