<template>
    <n-space>
        <tr class="table-primary">
            <td class="table-secondary">
                <input type="text" v-model="Todo.Title" @blur="v$.Title.$touch"/>
                <div class="input-errors" v-for="error of v$.Title.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <input type="text" v-model="Todo.Decsription" @blur="v$.Decsription.$touch"/>
                <div class="input-errors" v-for="error of v$.Decsription.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <!-- <input v-model="Todo.StartTime" @blur="v$.StartTime.$touch"> -->
                <n-date-picker  
                v-model:value="Todo.StartTime"
                type="date"
                 @blur="v$.StartTime.$touch"/>
                <div class="input-errors" v-for="error of v$.StartTime.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <n-date-picker  
                v-model:value="Todo.EndTime"
                type="datetime"
                 @blur="v$.EndTime.$touch"/>
                <div class="input-errors" v-for="error of v$.EndTime.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <n-button type="error" class="btn btn-primary" @click="delItem">Del</n-button>
            </td>
        </tr>
    </n-space>
</template>
<script lang="ts">
import { defineComponent, reactive ,ref} from 'vue'
import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'
import type { ITodo } from '../../types/Interface/ITodo'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default defineComponent({
    name: 'TodoItem',
    components: {
        NButton
    },
    props: {
        Todo: {
            type: Object as () => ITodo,
            required: true,
        },
        deleteItem: {
            type: Function,
            required: true
        },
        index: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const state = reactive(props.Todo)
        // const message = useMessage()
        const min = (param: number) =>
            helpers.withParams(
                { type: 'min', value: param },
                (value: number) => !helpers.req(value) || value > param
            )
        const rules = {
            Title: { required }, // Matches props.Todo.Title
            Decsription: { required }, // Matches props.Todo.Decsription
            StartTime: { required }, // Matches props.Todo.StartTime
            EndTime: { required }, // Matches props.Todo.EndTime
        }

        const v$ = useVuelidate(rules, state)
        const delItem = () => {
            if (window.confirm('確認要刪除?')) {
                props.deleteItem(props.index);
            }
        }
        return {
            state,
            delItem,
            v$,
            range: ref<[number, number]>([props.Todo.StartTime, Date.now()])
        }
    }
})
</script>
<style>

</style>