<template>
    <tr>
        <td>
            <input v-model="Appraisal.ApprisaledBy" @blur="v$.ApprisaledBy.$touch">
            <div class="input-errors" v-for="error of v$.ApprisaledBy.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="Appraisal.TotalPrice" @blur="v$.TotalPrice.$touch">
            <div class="input-errors" v-for="error of v$.TotalPrice.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <button class="btn btn-primary btn-group" @click="delItem">Del</button>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type {IAppraisalBy} from '../../types/Interface/IAppraisalBy'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default defineComponent({
    name: 'AppraisalItem',
    props: {
        Appraisal: {
            type: Object as () => IAppraisalBy,
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
        const state = reactive(props.Appraisal)
        const min = (param: number) =>
            helpers.withParams(
                { type: 'min', value: param },
                (value: number) => !helpers.req(value) || value > param
            )
        const rules = {
            ApprisaledBy: { required }, // Matches props.Appraisal.ApprisaledBy
            TotalPrice: { required, min: helpers.withMessage('必須大於11', min(11)) }, // Matches props.Appraisal.TotalPrice
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