<script lang="ts">
import {
    ElInput,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElForm,
    ElFormItem,
} from 'element-plus';
import {defineComponent, h, reactive} from 'vue';
import type {PropType, VNode} from 'vue';
import type {Option, QueryItem} from '@/types/app';

export default defineComponent({
    name: 'Query',

    props: {
        value: {
            type: Object,
            required: true,
        },
        config: {
            type: Array as PropType<Array<QueryItem<string>>>,
            required: true,
        },
    },

    emits: ['change'],

    setup(props, {emit, slots}) {
        const selectRemoteOptions: Record<string, Option[]> = reactive({});
        const fetchSelectOptions = () => {
            const {config} = props;
            const items = config.filter(item => {
                return item.type === 'select' && typeof item.options === 'function';
            });
            items.forEach(item => {
                // eslint-disable-next-line @typescript-eslint/ban-types
                (item.options as Function)().then((res: Option[]) => {
                    selectRemoteOptions[item.key as string] = res;
                });
            });
        };

        fetchSelectOptions();

        const syncProps = (key: string) => {
            return {
                modelValue: props.value[key],
                'onUpdate:modelValue': (val: unknown) => {
                    emit('change', key, val);
                },
            };
        };

        const genSelect = (item: QueryItem) => {
            const {key, options, props} = item;
            let children: Option[];

            if (selectRemoteOptions[key as string]) {
                children = selectRemoteOptions[key as string];
            }
            else if (Array.isArray(options)) {
                children = options;
            }
            else {
                children = [];
            }

            return h(ElSelect, {
                ...props,
                ...syncProps(key as string),
            }, {
                default: () => children.map(option => {
                    return h(ElOption, {
                        value: option.value,
                        label: option.label,
                    });
                }),
            });
        };

        const genInput = (item: QueryItem) => {
            const {key, props} = item;
            return h(ElInput, {
                ...props,
                ...syncProps(key as string),
            });
        };

        const genDatePicker = (item: QueryItem) => {
            const {key, props} = item;
            return h(ElDatePicker, {
                ...props,
                ...syncProps(key as string),
            });
        };

        const genComponent = (item: QueryItem): VNode | undefined => {
            const {type} = item;
            switch (type) {
                case 'select':
                    return genSelect(item);
                case 'input':
                    return genInput(item);
                case 'date-picker':
                    return genDatePicker(item);
            }
        };

        const generate = (): VNode => {
            const items = props.config.map(item => {
                const {label, slot} = item;
                if (slot) {
                    return h(ElFormItem, {label}, {
                        default: slots[slot as any],
                    });
                }
                return h(ElFormItem, {label}, {
                    default: () => genComponent(item),
                });
            });

            return h(ElForm, {
                inline: true,
                class: 'query',
            }, {
                default: () => [
                    items,
                    slots.btns?.(),
                ],
            });
        };

        return () => generate();
    },
});
</script>

<style lang="less" scoped>
.query {
    ::v-deep(.el-button--text) {
        color: var(--text-color-regular);
    }
    ::v-deep(.el-input) {
        width: 200px;
    }
    ::v-deep(.el-button) {
        margin-bottom: 20px;
        font-size: 14px;
    }
    ::v-deep(.el-button+.el-button) {
        margin-left: 20px;
    }
}
</style>
