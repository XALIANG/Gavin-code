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