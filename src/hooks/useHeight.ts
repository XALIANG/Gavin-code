/**
 * @file 自适应高度
 */
import {nextTick, ref, onMounted, onUnmounted, Ref} from 'vue';
import debounce from 'lodash/debounce';

export function useTableHeight(tableRef: Ref, offset: number = 0): any {
    const minHeight = 200;
    const height = ref(minHeight);
    const caculate = debounce(() => {
        const table = tableRef.value?.$el;
        const rect = table?.getBoundingClientRect();
        if (rect) {
            const {top} = rect;
            let value = window.innerHeight - top - offset;
            if (value < minHeight) {
                value = minHeight;
            }
            height.value = value;
        }
    }, 300);

    onMounted(() => {
        nextTick(caculate);
        window.addEventListener('resize', caculate);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', caculate);
    });

    return {height};
}