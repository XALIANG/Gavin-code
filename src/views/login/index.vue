<template>
    <div v-if="value" class="login">
        <div class="login-form">
            <el-input
                v-model="userName"
                class="w-50 m-2"
                size="small"
                placeholder="Please Input"
            />
            <el-button @click="openNote">签收</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref, onMounted, nextTick} from 'vue';
import {useStore} from '../../store/index';
let userName = ref('');
let value = ref(true);
const store = useStore();


function openNote() {
    if (userName.value === '') {
        return;
    }
    value.value = false;
    const user = confusionCode(userName.value);
    store.isUserName = userName.value;
    sessionStorage.setItem('uid', user);
    sessionStorage.setItem('user', userName.value);
};


function confusionCode(u:string) {
    return 'xxxxxxxx-xxxx-xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0 | u.length;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

onMounted(() => {
    const uid =  sessionStorage.getItem('uid');
    if (uid) {
        console.info(value.value);
        nextTick(() => {
            value.value = false;
        });
    }
    value.value = true;
});

</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    padding-left: 35%;
    padding-top: 10%;


    .login-form{
        width: 400px;
        height: 200px;
        display: flex;
    }

}
</style>