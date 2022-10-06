<template>
    <el-pagination
        v-model:currentPage="modelValue.page"
        class="pagination"
        background
        :page-size="modelValue.size"
        :page-sizes="[10, 20, 50, 100]"
        :total="modelValue.total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Pagination} from '../types/app';

export default defineComponent({
    name: 'custom-pagination',

    props: {
        modelValue: {
            type: Object as PropType<Pagination>,
            required: true,
        },
    },

    emits: ['update:modelValue', 'size-change', 'current-change'],

    setup(props, {emit}) {
        const handleSizeChange = (val: number) => {
            emit('update:modelValue', {
                ...props.modelValue,
                size: val,
            });
            emit('size-change', val);
        };

        const handleCurrentChange = (val: number) => {
            emit('update:modelValue', {
                ...props.modelValue,
                page: val,
            });
            emit('current-change', val);
        };

        return {
            handleSizeChange,
            handleCurrentChange,
        };
    },
});
</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 12px;
    text-align: right;
}
</style>