<template>
    <tr>
        <td>
            <input v-model="Checking.CheckingWith" @blur="v$.CheckingWith.$touch">
            <div class="input-errors" v-for="error of v$.CheckingWith.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="Checking.Price" @blur="v$.Price.$touch">
            <div class="input-errors" v-for="error of v$.Price.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="Checking.Date" @blur="v$.Date.$touch">
            <div class="input-errors" v-for="error of v$.Date.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <n-button class="btn btn-primary btn-group" @click="delItem">Del</n-button>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { IChecking } from '../../types/Interface/IChecking'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default defineComponent({
    name: 'CheckingItem',
    props: {
        Checking: {
            type: Object as () => IChecking,
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
        const state = reactive(props.Checking)
        const min = (param: number) =>
            helpers.withParams(
                { type: 'min', value: param },
                (value: number) => !helpers.req(value) || value > param
            )
        const rules = {
            CheckingWith: { required }, // Matches props.Checking.ApprisaledBy
            Price: { required, min: helpers.withMessage('必須大於11', min(11)) }, // Matches props.Checking.TotalPrice
            Date: { required }, // Matches props.Checking.ApprisaledBy
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