<template>
    <div>

        <div
            v-if="refresh"
            class="placeholder"
            :style="`height: ${height}px`"
        ></div>
        <el-table
            v-else
            :data="data"
            :height="height"
            v-bind="$attrs"
        >
            <const-column :columns="column">
                <template
                    v-for="name in slotName"
                    :key="name"
                    #[name]="scope"
                >
                    <slot :name="name" v-bind="scope"></slot>
                </template>
            </const-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed, PropType, ref} from 'vue';
import {ElTable} from 'element-plus';
import {useTableHeight} from '../hooks/useHeight';
import constColumn from './column.vue';
import type {Column} from '../types/app';

export default defineComponent({
    name: 'const-table',
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        column: {
            type: Array as PropType<Column[]>,
            required: true,
        },
        autoHeight: {
            type: Boolean,
            default: true,
        },
    },
    components: {constColumn},
    setup(props) {

        const elTable = ref<InstanceType<typeof ElTable>>();
        console.info('---', elTable);
        const refresh = ref(false);
        let height = ref();
        const slotName = computed(() => {
            const names = new Set<string>();
            props.column.forEach(col => {
                if (col.slot) {
                    names.add(col.slot);
                }
            });
            return Array.from(names);
        });

        if (props.autoHeight) {
            // 55 是 pagination 的高度
            const {height: tableHeight} = useTableHeight(elTable, 55);
            height = tableHeight;
        }


        return {
            elTable,
            refresh,
            height,
            slotName,
        };
    },
});
    </script>