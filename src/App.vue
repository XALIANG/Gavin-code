<template>
    <div class="main">
        <note-header/>
        <!-- <main-body>
            <note-data/>
        </main-body>
        <login/> -->
        <div>
            <const-table
                :data="tableData"
                :column="currentColumns"
            >
                <template #alan="scope">
                    {{ scope.row.date }}
                </template>
                <template #alans="scope">
                    {{ scope.row.date }}
                </template>
                <template #btn>
                    <el-button type="warning">Warning</el-button>
                    <el-button type="danger">Danger</el-button>
                </template>
            </const-table>
        </div>
        <!-- <pagination v-model="page"/> -->
    </div>
</template>

<script setup lang="ts">
import noteHeader from '@/layout/header/index.vue';
import mainBody from '@/layout/body/index.vue';
import noteData from '@/views/noteData/index.vue';
import login from '@/views/login/index.vue';
import constTable from '@/components/table.vue';
import pagination from '@/components/table.vue';


let page = {
    page: 1,
    pageSize: 10,
    total: 2,
    size: 2,
};

const currentColumns = [
    {prop: 'date', label: 'Date', minWidth: '180'},
    {prop: 'name', label: 'Name', minWidth: '180'},
    {prop: 'address', label: 'Addresssadsa', minWidth: '180'},
    {slot: 'alan', label: 'Addresssadsa123', minWidth: '180'},
    {slot: 'alans', label: 'Addresssadsa123', minWidth: '180'},
    {slot: 'btn', label: '操作', minWidth: '280'},
];
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'alanasdasdsa',
        address: 'No. 189, Grove St, Los Angeles',
    },

];

</script>
<style>
.main{
    width: 100%;
}
</style>
