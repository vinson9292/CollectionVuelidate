<template>
    <!-- <h2>Text Input</h2> -->
    <!-- <input v-model="text"> {{ text }} -->
    <h2>案號 : {{caseNo}}</h2><br/>
    <label for="txtName">Name</label>
    <input id="txtName" type="text" placeholder="please input..." v-model="name"/>
    <label for="txtAge">Age</label>
    <input id="txtAge" type="text" placeholder="please input..." v-model="age"/>
    <label for="txtAddress">Address</label>
    <input id="txtAddress" type="text" placeholder="please input..." v-model="address"/>
    <label v-if="name">Hello : {{name}}</label>    <label v-if="age != 0">Age : {{age}}</label>
    <label v-if="address">Address : {{address}}</label>
</template>
<script lang="ts">
import { defineComponent,ref} from 'vue'
export default defineComponent({
    name: 'MainCase',
    props:{
        caseNo:{
            type:String,
            required:true
        }
    },
    setup(props) {        
        const name = ref('');
        const age = ref(0);
        const address = ref('');
        const caseNo = props.caseNo
        return {
            caseNo,
            name,
            age,
            address
        }
    }
})
</script>