<template>
    <div class="">
        <h2>願望清單</h2>
        <h4>
        <div style="width:90%">
                {{day1.mantra }}
        </div>
        </h4>
        <TodoList :items="vm.items" :deleteItem="deleteItem" />
        <n-button type="primary" v-on:click="add">add</n-button>
        <n-button type="primary" v-on:click="save">save</n-button>
        <n-button type="primary" v-on:click="deleteAll">cleraAll</n-button>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import { NButton } from 'naive-ui'
import TodoList from './List.vue'
import { Todo } from '../../types/Todo'
import { useVuelidate } from '@vuelidate/core'
import { saveItems, readItems } from '../../utils/RecommentdationStore'
import prays from '../../data/pray.json'

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
        const prayForToday = prays;
        const day1 = prayForToday.prays[Math.floor(Math.random() * 15)];
        console.log(prays);
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
            console.log('response', response);
            console.log('vm.items', vm.items);
            if (response) {
                saveItems('TodoInfo', vm.items);
            }
        }
        watch(vm, async () => {
            let response = await v$.value.$validate();
            if (response) {
                saveItems('TodoInfo', vm.items);
            }
        })
        const v$ = useVuelidate();
        onMounted(() => {
            setTimeout(() => {
                vm.items = readItems('TodoInfo');
            }, 500)
        });

        return {
            vm,
            ...toRefs(vm.items),
            add,
            deleteAll,
            deleteItem,
            save,
            v$,
            day1
        }
    }
})
</script>