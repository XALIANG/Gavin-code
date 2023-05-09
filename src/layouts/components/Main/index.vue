<template>
    <Tabs v-if="themeConfig.tabs"/>
    <el-main>
        <router-view v-slot="{Component, route}">
            <component
                :is="Component" v-if="isRouterShow"
                :key="route.path"
            />
        </router-view>
    </el-main>
</template>

<script setup>
import {ref, computed, onBeforeUnmount, provide} from 'vue';
import {GlobalStore} from '@/stores';
import Tabs from '@/layouts/components/Tabs/index.vue';
const globalStore = GlobalStore();
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);

// 刷新当前页面
const isRouterShow = ref(true);
const refreshCurrentPage = val => {
    isRouterShow.value = val;
};
provide('refresh', refreshCurrentPage);

// 监听窗口大小变化，折叠侧边栏
// const screenWidth = ref(0);
// const listeningWindow = () => {
//     screenWidth.value = document.body.clientWidth;
//     if (!isCollapse.value && screenWidth.value < 1200) {
//         globalStore.setThemeConfig({...themeConfig.value, isCollapse: true});
//     }
//     if (isCollapse.value && screenWidth.value > 1200) {
//         globalStore.setThemeConfig({...themeConfig.value, isCollapse: false});
//     }
// };
// window.addEventListener('resize', listeningWindow);
// onBeforeUnmount(() => {
//     window.removeEventListener('resize', listeningWindow);
// });
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
