<template>
    <n-space>
        <div>
            <div>
                <n-form inline>
                    <div style="width:20%">
                        <n-input type="text" v-model:value="Todo.Title" @blur="v$.Title.$touch" />
                        <div class="input-errors" v-for="error of v$.Title.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div style="width:40%">
                        <n-input maxlength="40" type="text" v-model:value="Todo.Decsription"
                            @blur="v$.Decsription.$touch" />
                        <div class="input-errors" v-for="error of v$.Decsription.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div style="width:10%">
                        <n-date-picker v-model:value="Todo.StartTime" type="date" @blur="v$.StartTime.$touch" />
                        <div class="input-errors" v-for="error of v$.StartTime.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div style="width:10%">
                        <n-date-picker v-model:value="Todo.EndTime" type="date" @blur="v$.EndTime.$touch" />
                        <div class="input-errors" v-for="error of v$.EndTime.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div style="width:20%">
                        <n-button type="primary" @click="showDSection">
                            Detail
                        </n-button>
                        <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
                            <template #trigger>
                                <n-button type="error">
                                    Del
                                </n-button>
                            </template>
                            一切都將一去杳然，任何人都無法將其捕獲。
                        </n-popconfirm>
                    </div>
                </n-form>
            </div>
            <div v-show="isShowDSection"  id="DSection" style="width:90%">
                <n-input type="textarea" v-model:value="Todo.Detail" maxlength="500" show-count />
            </div>
        </div>

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
        const isShowDSection = ref(false);
        const showDSection = () => {
            isShowDSection.value = !isShowDSection.value;
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
            isShowDSection,
            showDSection
        }
    }
})
</script>
<style>

</style>