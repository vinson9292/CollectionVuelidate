<template>
    <div class="bd-example">
        <h4>外部評估清單</h4>
        <AppraisalList :items="vm.items" :deleteItem="deleteItem" />
        <button class="btn btn-primary btn-group" v-on:click="add">add</button>
        <button class="btn btn-primary btn-group" v-on:click="save">save</button>
        <button class="btn btn-primary btn-group" v-on:click="deleteAll">cleraAll</button>
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
        const vm = reactive<{ items: Array<AppraisalBy> }>({
            items: []
        });

        const add = async () => {
            let response = await v$.value.$validate();
            if (response) {
                vm.items.push(new AppraisalBy())
            }
        }
        const deleteAll = () => {
            vm.items = new Array<AppraisalBy>;
            vm.items.push(new AppraisalBy());
        }
        const deleteItem = (index: number) => {
            vm.items.splice(index, 1);
        }
        const save = async () => {
            let response = await v$.value.$validate();
            if (response) {
                saveItems('AppraisalInfo', vm.items);
                vm.items.push(new AppraisalBy())
            }
        }

        const v$ = useVuelidate();
        onMounted(() => {
            setTimeout(() => {
                vm.items = readItems('AppraisalInfo');
            }, 500)
        });

        return {
            vm,
            ...toRefs(vm.items),
            add,
            deleteAll,
            deleteItem,
            save,
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

.bd-example {
    padding: 1.5rem;
    margin-right: 0;
    margin-left: 0;
    border-width: 1px;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}

.btn-group {
    margin: 0.25rem 0.125rem
}
</style>