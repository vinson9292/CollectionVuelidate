<template>
    <div>
        <h2>願望清單</h2>
        <h4>
            {{ pray.mantra }}
        </h4>
        <n-button strong secondary round type="primary" @click="activate">
            日日是好日，毎日が素敵で素晴らしい日である，良い日になるように、毎日努力することが大切だ,どんな日でも大切な日なので、そのままを受け入れよう
        </n-button>
        <div v-show="active">
            <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
                @update:value="handleUpdateValue">
                {{ year }}-{{ month }}-{{ date }}
            </n-calendar>
        </div>
        <div style="margin:5px;">
            <TodoList :items="vm.items" :deleteItem="deleteItem" />
        </div>
        <n-space>
            <n-button type="success" v-on:click="add"><i class="fa-solid fa-plus"></i>&nbsp; Add</n-button>
            <n-button type="info" v-on:click="save"><i class="fa-solid fa-floppy-disk"></i>&nbsp; Save</n-button>
            <n-button type="warning" v-on:click="deleteAll"><i class="fa-solid fa-circle-xmark"></i>&nbsp; Clera
                All</n-button>
        </n-space>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch, ref } from 'vue'
import { NButton } from 'naive-ui'
import TodoList from './List.vue'
import { Todo } from '../../types/Todo'
import { useVuelidate } from '@vuelidate/core'
import { saveItems, readItems } from '../../utils/RecommentdationStore'
import prays from '../../data/pray.json'
import { isYesterday, addDays } from 'date-fns/esm'
import { useMessage } from 'naive-ui'

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
        const active = ref(false)
        const activate = () => {
            active.value = !active.value;
        }
        const vm = reactive<{ items: Array<Todo> }>({
            items: []
        });
        const getTimeString = (): string => {
            let currenTime = new Date();
            let hour = currenTime.getHours();
            let min = currenTime.getMinutes();
            let sec = currenTime.getSeconds();
            let timeString = hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
            return timeString;
        }
        const prayForToday = prays.prays.filter(x => getTimeString() > x.startTime && getTimeString() < x.endTime);
        const pray = prayForToday[Math.floor(Math.random() * prayForToday.length)];
        const add = async () => {
            let response = await v$.value.$validate();
            if (response) {
                vm.items.push(new Todo());
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
            vm.items.forEach((e,i)=>{e.Sort = i});
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
            pray,
            getTimeString,
            active,
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
<style scope>
.row-item {
    margin-bottom: 5px;
}
</style>
