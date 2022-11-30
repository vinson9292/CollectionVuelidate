<template>
    <table>
        <AppraisalItem 
        v-for="(appraisalBy,index) in appraisalBys" 
        :Appraisal="appraisalBy"
        :addAppraisal="addAppraisal"
        :deleteAppraisal="deleteAppraisal"
        :saveAppraisal="saveAppraisal"
        :index="index"
        />
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AppraisalItem from './Item.vue'
export default defineComponent({
    name: 'AppraisalList',
    components: {
        AppraisalItem
    },
    props: ['appraisalBys','addAppraisal','deleteAppraisal','saveAppraisal']
})
</script>