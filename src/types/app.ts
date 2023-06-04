import {VNode} from 'vue';

export interface Column {
    [key: string]: any;
    label?: string;
    /** 是否文字溢出截断，无 slot 默认为 true，有 slot 默认为 false */
    isNeedTooltip?: boolean;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 自定义头部 */
    header?: (data: {
        column: any;
        $index: number;
    }) => VNode;
    /** 自定义插槽 */
    slot?: string;
    prop?: string;
    width?: string | number;
    minWidth?: string | number;
    children?: Column[];
}


export interface Pagination {
    page: number;
    pageSize: number;
    total: number;
    size: number;
}

export interface Option {
    label:string,
    value:string | number
}

export interface FormItemRule{}

interface SyncPropsType{}

export interface QueryItem<KeyType = string> {
    label: string;
    type?: 'select' | 'input' | 'date-picker' | 'switch' | 'radio';
    /** 可传入自定义渲染函数 */
    slot?: string | ((syncProps: SyncPropsType, props: any) => VNode);
    key?: KeyType;
    options?: Option[] | (() => Promise<Option[]>);
    /** 透传给组件的 props */
    props?: Record<string, any>;
    /** 根据条件，决定是否展示表单项 */
    isShow?: boolean | ((value: Record<string, any>) => boolean);
    /** 是否必填 */
    required?: boolean;
    /** 表单规则 */
    rules?: FormItemRule | FormItemRule[];
}