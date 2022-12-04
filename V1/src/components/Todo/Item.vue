<template>
    <tr class="table-primary">
        <td class="table-secondary">
            <input v-model="Todo.Title" @blur="v$.Title.$touch">
            <div class="input-errors" v-for="error of v$.Title.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="Todo.Decsription" @blur="v$.Decsription.$touch">
            <div class="input-errors" v-for="error of v$.Decsription.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="Todo.StartTime" @blur="v$.StartTime.$touch">
            <div class="input-errors" v-for="error of v$.StartTime.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="Todo.EndTime" @blur="v$.EndTime.$touch">
            <div class="input-errors" v-for="error of v$.EndTime.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <button type="button" class="btn btn-primary" @click="delItem">Del</button>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type {ITodo} from '../../types/Interface/ITodo'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default defineComponent({
    name: 'TodoItem',
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
        const min = (param: number) =>
            helpers.withParams(
                { type: 'min', value: param },
                (value: number) => !helpers.req(value) || value > param
            )
        const rules = {
            Title: { required }, // Matches props.Todo.Title
            Decsription: { required }, // Matches props.Todo.Decsription
            StartTime: { required, min: helpers.withMessage('必須大於11', min(11)) }, // Matches props.Todo.StartTime
            EndTime: { required, min: helpers.withMessage('必須大於11', min(11)) }, // Matches props.Todo.EndTime
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
            v$
        }
    }
})
</script>