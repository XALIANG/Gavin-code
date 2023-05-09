<template>
    <el-form
        ref="loginFormRef" :model="loginForm"
        :rules="loginRules" size="large"
    >
        <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名：随便填">
                <template #prefix>
                    <el-icon class="el-input__icon"><user/></el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                v-model="loginForm.password" type="password"
                placeholder="密码：随便填" show-password
                autocomplete="new-password"
            >
                <template #prefix>
                    <el-icon class="el-input__icon"><lock/></el-icon>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
    <div class="login-btn">
        <el-button
            size="large" type="primary"
            :loading="loading" @click="login(loginFormRef)"
        > 登录 </el-button>
        <el-button size="large" @click="resetForm(loginFormRef)">重置</el-button>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {ElNotification} from 'element-plus';
import {GlobalStore} from '@/stores';
import {TabsStore} from '@/stores/modules/tabs';
import {HOME_URL} from '@/config/config';
import {pageLogin} from '@/api/login';

const router = useRouter();
// eslint-disable-next-line @babel/new-cap
const tabsStore = TabsStore();
// eslint-disable-next-line @babel/new-cap
const globalStore = GlobalStore();

// 定义 formRef（校验规则）
const loginFormRef = ref();
const loginRules = reactive({
    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
});

const loading = ref(false);
const loginForm = reactive({username: '', password: ''});
const login = formEl => {
    if (!formEl) {
        return;
    }
    formEl.validate(async valid => {
        if (!valid) {
            return;
        }
        loading.value = true;
        try {
            const {data} = await pageLogin();
            globalStore.setToken(data.token);
            tabsStore.closeMultipleTab();

            router.push(HOME_URL);
            // eslint-disable-next-line @babel/new-cap
            ElNotification({
                title: data.name,
                message: '欢迎登录 vue-diverse-admin',
                type: 'success',
                duration: 3000,
            });
        }
        finally {
            loading.value = false;
        }
    });
};

// resetForm
const resetForm = formEl => {
    if (!formEl) {
        return;
    }
    formEl.resetFields();
};
</script>

<style scoped lang="scss"></style>
