<template>
    <div class="alan">
        <div class="h">
            <slot name="header"> </slot>
        </div>
        <div class="c">
            <slot name="content"> </slot>
        </div>

    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'alan-template',
    setup(props, {emit}) {

        return {
        };
    },
});
</script>
<style lang="scss" scoped>
.alan{
    width: 100%;
    // display:flex;
    // align-items: center;
    // flex-wrap: nowrap;
    .h,.c{
        width: 100%;
        margin-top: 30px;
    }
}
</style>