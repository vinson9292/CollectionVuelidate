<template>
    <h2>案號 : {{ caseNo }}</h2><br />
    <div>
        <PropertyList :properts="vm.properts" />
        <button v-bind:click="addProperty">add</button>
        <button v-bind:click="deleteProperty">delete</button>
        <button v-bind:click="saveProperty">save</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import PropertyList from './PropertyList.vue'
import { Property } from '../types/Property'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

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
        const caseNo = props.caseNo;
        const vm = reactive({
            properts: [
                { type: "", area: 0, price: 0, envalue: 0 },
                { type: "456", area: 456, price: 456, envalue: 456 },
                { type: "789", area: 789, price: 789, envalue: 789 },
            ]
        });
        const addProperty = () => {
            console.log('addProperty');
            vm.properts.push(new Property())
        }
        const deleteProperty = (index: number): void => {
            console.log('property delete index', index);
            vm.properts.splice(index, 1);
        }
        const saveProperty = () => {
            v$.value.$validate();
        }
        // 回车的事件的回调函数,用来添加数据
        const add = () => {
            vm.properts.push(new Property())
            // 获取文本框中输入的数据,判断不为空
            //   const text = title.value
            //   if (!text.trim()) return
            //   // 此时有数据,创建一个todo对象
            //   const todo = {
            //     id: Date.now(),
            //     title: text,
            //     isCompleted: false,
            //   }
            //   // 调用方法addTodo的方法
            //   props.addTodo(todo)
            //   // 清空文本框
            //   title.value = ''
        }
        const state = reactive(vm.properts[0])
        const rules = {
            type: { required }, // Matches properts.property.type
            area: { required }, // Matches properts.property.area
            price: { required }, // Matches properts.property.price
            envalue: { required }, // Matches properts.property.envalue
        }
        const v$ = useVuelidate(rules, state)
        return {
            vm,
            caseNo,
            ...toRefs(vm.properts),
            addProperty,
            deleteProperty,
            saveProperty,
            v$
        }
    }
})
</script>