<template>
  <div class="dashboard-container" />
</template>
<script lang="ts">
export default { name: "Dashboard" };
</script>

<script setup lang="ts">
// import {ref} from 'vue';
// import { useUserStore } from "@/store/modules/user";
// import { useTransition, TransitionPresets } from "@vueuse/core";

<<<<<<< HEAD
// import GithubCorner from "@/components/GithubCorner/index.vue";
// import SvgIcon from "@/components/SvgIcon/index.vue";
// import BarChart from "./components/BarChart.vue";
// import PieChart from "./components/PieChart.vue";
// import RadarChart from "./components/RadarChart.vue";

// const userStore = useUserStore();

// const date: Date = new Date();

// const greetings = computed(() => {
//   if (date.getHours() >= 6 && date.getHours() < 8) {
//     return "晨起披衣出草堂，轩窗已自喜微凉🌅！";
//   } else if (date.getHours() >= 8 && date.getHours() < 12) {
//     return "上午好🌞！";
//   } else if (date.getHours() >= 12 && date.getHours() < 18) {
//     return "下午好☕！";
//   } else if (date.getHours() >= 18 && date.getHours() < 24) {
//     return "晚上好🌃！";
//   } else if (date.getHours() >= 0 && date.getHours() < 6) {
//     return "偷偷向银河要了一把碎星，只等你闭上眼睛撒入你的梦中，晚安🌛！";
//   }else {
//     return '';
//   }
// });
=======
const userStore = useUserStore();
const date: Date = new Date();
const greetings = computed(() => {
  if (date.getHours() >= 6 && date.getHours() < 8) {
    return "晨起披衣出草堂，轩窗已自喜微凉🌅！";
  } else if (date.getHours() >= 8 && date.getHours() < 12) {
    return "上午好🌞！";
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    return "下午好☕！";
  } else if (date.getHours() >= 18 && date.getHours() < 24) {
    return "晚上好🌃！";
  } else if (date.getHours() >= 0 && date.getHours() < 6) {
    return "偷偷向银河要了一把碎星，只等你闭上眼睛撒入你的梦中，晚安🌛！";
  }else {
    return '';
  }
});
>>>>>>> 6cda3b4a52ce36a75e726229430f9e27087774ef

// const duration = 5000;

// // 收入金额
// const amount = ref(0);
// const amountOutput = useTransition(amount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// amount.value = 2000;

// // 访问数
// const visitCount = ref(0);
// const visitCountOutput = useTransition(visitCount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// visitCount.value = 2000;

// //消息数
// const messageCount = ref(0);
// const messageCountOutput = useTransition(messageCount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// messageCount.value = 2000;

// // 订单数
// const orderCount = ref(0);
// const orderCountOutput = useTransition(orderCount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// orderCount.value = 2000;
</script>



<style lang="scss" scoped>
.dashboard-container {
  position: relative;
  padding: 24px;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .github-corner {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    border: 0;
  }

  .data-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-weight: bold;
    color: var(--el-text-color-regular);
    background: var(--el-bg-color-overlay);
    border-color: var(--el-border-color);
    box-shadow: var(--el-box-shadow-dark);
  }

  .svg-icon {
    fill: currentcolor !important;
  }
}
</style>
