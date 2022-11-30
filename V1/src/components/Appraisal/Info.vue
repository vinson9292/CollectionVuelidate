<template>
    <div class="listBorder">
        <h4>外部評估清單</h4>
        <AppraisalList :appraisalBys="vm.appraisalBys" :deleteAppraisal="delete" />
        <button v-on:click="addAppraisal">add</button>
        <button v-on:click="saveAppraisal">save</button>
        <button v-on:click="deleteAllAppraisal">cleraAll</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import AppraisalList from './List.vue'
import { AppraisalBy } from '../../types/AppraisalBy'
import { useVuelidate } from '@vuelidate/core'
import { saveItems, readItems } from '../../utils/RecommentdationStore'

export default defineComponent({
    name: 'AppraisalInfo',
    components: {
        AppraisalList
    },
    props: {
        caseNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const caseNo = props.caseNo;
        const vm = reactive<{ appraisalBys: Array<AppraisalBy> }>({
            appraisalBys: []
        });

        const addAppraisal = async () => {
            let response = await v$.value.$validate();
            if (response) {
                vm.appraisalBys.push(new AppraisalBy())
            }
        }
        const deleteAllAppraisal = () => {
            vm.appraisalBys = new Array<AppraisalBy>;
            vm.appraisalBys.push(new AppraisalBy());
        }
        const deleteAppraisal = (index: number) => {
            vm.appraisalBys.splice(index, 1);
        }
        const saveAppraisal = async () => {
            let response = await v$.value.$validate();
            console.log('response', response);
            console.log('v$.value.$errors', v$.value.$errors)
            if (response) {
                console.log(vm);
                saveItems('appraisalList', vm.appraisalBys);
                vm.appraisalBys.push(new AppraisalBy())
            }
        }

        const v$ = useVuelidate();
        onMounted(() => {
            setTimeout(() => {
                vm.appraisalBys = readItems('appraisalList');
            }, 500)
        });

        // watch(() => vm.properts, saveAppraisals, { deep: true })
        return {
            vm,
            caseNo,
            ...toRefs(vm.appraisalBys),
            addAppraisal,
            deleteAllAppraisal,
            deleteAppraisal,
            saveAppraisal,
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
</style>