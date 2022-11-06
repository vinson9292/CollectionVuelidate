<template>
    <!-- <h2>Text Input</h2> -->
    <!-- <input v-model="text"> {{ text }} -->
    <h2>案號 : {{ caseNo }}</h2><br />
    <!-- <div >
        <label for="txtName">Name</label>
        <input id="txtName" type="text" placeholder="please input..." v-model="name" />
        <label for="txtAge">Age</label>
        <input id="txtAge" type="text" placeholder="please input..." v-model="age" />
        <label for="txtAddress">Address</label>
        <input id="txtAddress" type="text" placeholder="please input..." v-model="address" />
        <label v-if="name">Hello : {{ name }}</label> <label v-if="age != 0">Age : {{ age }}</label>
        <label v-if="address">Address : {{ address }}</label>
    </div> -->
    <div>
        <PropertyList :properts="properts" />
    </div>

</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import PropertyList from './PropertyList.vue'
import type { IProperty } from '../types/IProperty'
export default defineComponent({
    name: 'MainCase',
    components: {
        PropertyList
    },
    props: {
        caseNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const name = ref('');
        const age = ref(0);
        const address = ref('');
        const caseNo = props.caseNo;
        const properts = reactive<{ properts: IProperty[] }>({
            properts: [
                { ptype: "123", area: 123, price: 123, envalue: 123 },
                { ptype: "456", area: 456, price: 456, envalue: 456 },
                { ptype: "789", area: 789, price: 789, envalue: 789 },
            ]
        });
        return {
            caseNo,
            name,
            age,
            address,
            ...toRefs(properts)
        }
    }
})
</script>