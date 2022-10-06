<template>
    <div class="body-container">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue';
export default defineComponent({
    name: 'main-body',
    setup() {
        const body  = ref('body');
        return {
            body,
        };
    },
});
</script>

<style lang="scss" scoped>
   </style>