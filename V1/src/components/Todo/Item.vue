<template>
    <n-space>
        <tr>
            <td>
                <input type="text" v-model="Todo.Title" @blur="v$.Title.$touch" />
                <div class="input-errors" v-for="error of v$.Title.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <input type="text" v-model="Todo.Decsription" @blur="v$.Decsription.$touch" />
                <div class="input-errors" v-for="error of v$.Decsription.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <n-date-picker v-model:value="Todo.StartTime" type="date" @blur="v$.StartTime.$touch" />
                <div class="input-errors" v-for="error of v$.StartTime.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <n-date-picker v-model:value="Todo.EndTime" type="date" @blur="v$.EndTime.$touch" />
                <div class="input-errors" v-for="error of v$.EndTime.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </td>
            <td>
                <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
                    <template #trigger>
                        <n-button type="error" class="btn btn-primary">
                            Del
                        </n-button>
                    </template>
                    一切都将一去杳然，任何人都无法将其捕获。
                </n-popconfirm>
            </td>
        </tr>
    </n-space>

</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
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
        const message = useMessage()
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
        return {
            state,
            v$,
            handlePositiveClick() {
                props.deleteItem(props.index);
                message.info('完成');
            },
            handleNegativeClick() {
                message.info('取消')
            },
            range: ref<[number, number]>([props.Todo.StartTime, Date.now()]),


        }
    }
})
</script>
<style>

</style>