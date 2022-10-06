<script lang="ts">
import {defineComponent, PropType, VNode, h} from 'vue';
import {createTablePopper} from 'element-plus/es/components/table/src/util';
import {ElTableColumn} from 'element-plus';
import type {Column} from '../types/app';
export default defineComponent({
    name: 'const-column',
    props: {
        columns: {
            type: Array as PropType<Column[]>,
            required: true,
        },
    },
    setup(props, {slots}) {

        const formatCellValue = (row: any, prop: string | undefined): string => {
            return row[prop ?? ''] || '-';
        };

        const handleMouseEnter = (e: Event, isNeedToopTip = false) => {
            if (!isNeedToopTip) {
                return;
            }
            const target = e.target as HTMLElement;
            const {offsetHeight, scrollHeight, innerText, textContent} = target;
            if (offsetHeight < scrollHeight) {

                createTablePopper(
                    target,
                    innerText || textContent || '',
                    {
                        placement: 'top',
                        strategy: 'fixed',
                    },
                    'light'
                );
            }
        };

        const genColDefaultSlot = (col: Column) => {
            const {showOverflowToolTip} = props;
            let {slot, isNeedTooltip, type} = col;

            if (type) {
                return null;
            }
            if (isNeedTooltip == null) {
                isNeedTooltip = !slot;
            }

            // 文字溢出展示 tooltip 规则：
            // 1、考虑表格组件的 showOverflowToolTip；
            // 2、考虑列配置的 isNeedTooltip。无 slot 的话，isNeedTooltip 默认为 true，否则默认为 false。
            const isShowTooltip = showOverflowToolTip && isNeedTooltip;

            return (slotProps: any) => h(
                'div',
                {
                    class: isShowTooltip ? 'text-overflow' : '',
                    onMouseenterCapture: (e: Event) => handleMouseEnter(e, isShowTooltip),
                },
                [slot ? (slots[slot]!)(slotProps) : h('span', null, formatCellValue(slotProps.row, col.prop))]
            );
        };


        const generateElement = (columns: Column[]): VNode[] => {
            return columns
                .filter(col => !col.hidden)
                .map(col => {
                    const {slot, header, children, ...restProps} = col;
                    const vnodeChildren: Record<string, any> = {};
                    if (children?.length) {
                        vnodeChildren.default = () => generateElement(children);
                    }
                    else {
                        vnodeChildren.default = genColDefaultSlot(col);
                        header ? vnodeChildren.header = header : null;
                    }
                    return h(ElTableColumn, {
                        ...restProps,
                    }, vnodeChildren);
                });
        };

        return () => generateElement(props.columns);
    },
});
    </script>