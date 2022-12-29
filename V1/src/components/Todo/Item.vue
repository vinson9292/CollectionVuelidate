<template>
    <div>
        <div>
            <n-form inline v-if="index == 0">
                <n-space>
                    <n-form-item style="width:15px;">
                        <span>{{ index + 1 }}</span>
                    </n-form-item>
                    <n-form-item path="Todo.Title" label="類別">
                        <n-input type="text" v-model:value="Todo.Title" @blur="v$.Title.$touch" />
                    </n-form-item>
                    <n-form-item path="Todo.Decsription" label="描敍">
                        <n-input style="width:250px;" maxlength="40" type="text" v-model:value="Todo.Decsription"
                            @blur="v$.Decsription.$touch" />
                    </n-form-item>
                    <n-form-item style="width:120px;" path="Todo.StartTime" label="開始日期">
                        <n-date-picker v-model:value="Todo.StartTime" type="date" @blur="v$.StartTime.$touch" />
                    </n-form-item>
                    <n-form-item style="width:120px;" path="Todo.EndTime" label="結束日期">
                        <n-date-picker v-model:value="Todo.EndTime" type="date" @blur="v$.EndTime.$touch" />
                    </n-form-item>
                    <n-form-item>
                        <n-space>
                            <span>
                                <n-countdown ref="countdown" :duration="60 * 60 * 1000" :active="active" />
                            </span>
                            <n-button round size="tiny" @click="handleReset">
                                Reset
                            </n-button>
                            <n-switch v-model:value="active" />
                        </n-space>
                    </n-form-item>
                    <n-form-item>
                        <n-button secondary round type="primary" @click="showDSection"><i
                                class="fa-solid fa-circle-info fa-lg"></i></n-button>
                    </n-form-item>
                    <n-form-item>
                        <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
                            <template #trigger>
                                <n-button secondary round type="error">
                                    <i class="fa-solid fa-trash fa-lg"></i>
                                </n-button>
                            </template>
                            一切都將一去杳然，任何人都無法將其捕獲。
                        </n-popconfirm>
                    </n-form-item>
                    <n-form-item>
                        <n-button secondary round type="warning">
                            <i class="fa-solid fa-up-down-left-right fa-lg"></i>
                        </n-button>
                    </n-form-item>
                </n-space>
            </n-form>
            <n-form inline v-else>
                <n-space>
                    <div style="width:15px;">
                        <span>{{ index + 1 }}</span>
                    </div>
                    <n-input type="text" v-model:value="Todo.Title" @blur="v$.Title.$touch" />
                    <div class="input-errors" v-for="error of v$.Title.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <n-input style="width:250px;" maxlength="40" type="text" v-model:value="Todo.Decsription"
                        @blur="v$.Decsription.$touch" />
                    <div class="input-errors" v-for="error of v$.Decsription.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <n-date-picker style="width:120px;" v-model:value="Todo.StartTime" type="date"
                        @blur="v$.StartTime.$touch" />
                    <div class="input-errors" v-for="error of v$.StartTime.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <n-date-picker style="width:120px;" v-model:value="Todo.EndTime" type="date"
                        @blur="v$.EndTime.$touch" />
                    <div class="input-errors" v-for="error of v$.EndTime.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <n-space>
                        <span>
                            <n-countdown ref="countdown" :duration="60 * 60 * 1000" :active="active" />
                        </span>
                        <n-button round size="tiny" @click="handleReset">
                            Reset
                        </n-button>
                        <n-switch v-model:value="active" />
                    </n-space>
                    <n-button secondary round type="primary" @click="showDSection">
                        <i class="fa-solid fa-circle-info fa-lg"></i>
                    </n-button>
                    <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
                        <template #trigger>
                            <n-button secondary round type="error">
                                <i class="fa-solid fa-trash fa-lg"></i>
                            </n-button>
                        </template>
                        一切都將一去杳然，任何人都無法將其捕獲。
                    </n-popconfirm>
                    <n-button secondary round type="warning">
                        <i class="fa-solid fa-up-down-left-right fa-lg"></i>
                    </n-button>
                </n-space>
            </n-form>
        </div>
        <div v-show="isShowDSection" id="DSection" style="margin:5px;">
            <n-form-item path="Todo.Detail" label="詳細資訊">
                <n-input type="textarea" v-model:value="Todo.Detail" maxlength="500" show-count />
            </n-form-item>

        </div>
        <div v-show="isShowDSection">
            <n-upload action="/upload">
                <n-button>上传文件</n-button>
            </n-upload>
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'
import type { ITodo } from '../../types/Interface/ITodo'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import type { CountdownInst } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'

export default defineComponent({
    name: 'TodoItem',
    components: {
        // NButton
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
            Title: { required },
            Decsription: { required },
            StartTime: { required },
            EndTime: { required },
        }
        const isShowDSection = ref(false);
        const showDSection = () => {
            isShowDSection.value = !isShowDSection.value;
        }
        const v$ = useVuelidate(rules, state)
        const activeRef = ref(false)
        const countdownRef = ref<CountdownInst | null>()
        function handleReset() {
            countdownRef.value?.reset()
        }
        const fileListRef = ref<UploadFileInfo[]>([
        ])
        const handleDownload = (file: UploadFileInfo) => {
            message.success(`下载成功：${file.name}`)
        }
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
            showDSection,
            active: activeRef,
            countdown: countdownRef,
            handleReset,
            fileList: fileListRef,
            handleDownload
        }
    }
})
</script>
<style>
.n-form-item-feedback-wrapper {
    min-height: 0px !important;
}
</style>