<template>
    <div class="noteData">
        <div
            v-for="note in noteData" :key="note.id"
            :style="{backgroundColor: note.backgroundColor,color: note.textColor}" class="note-text animate__animated"
            @click="hanleEditNote(note,'edit',note.id)"
        >{{ note.title }}</div>
    </div>

    <div>
        <el-drawer
            v-model="store.drawer" title="I am the title"
            :with-header="false"
        >
            <createNote ref="refCreateNote" :disables=" store.disable"/>
            <div class="footer">
                <el-button
                    :disabled=" store.disable" type="primary"
                    @click="createNoteData"
                >写好了</el-button>
                <el-button @click="closeNote">我再想想</el-button>
            </div>
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import {ref, reactive, toRefs} from 'vue';
import {useStore} from '../../store/index';
import createNote from '@/components/createNote/index.vue';
import {noteData} from './config';
import {dataModel} from './type';

const store = useStore();
const refCreateNote = ref();

// edit
function hanleEditNote(row: dataModel, type: string, idx:number) {
    store.drawer = true;
    if (type.includes('edit')) {
        store.disable = true;
    }
    const res =  noteData.find(res => [idx].includes(res.id));
    refCreateNote.value.noteForm = res ?? '';
    console.info(res);
}

function createNoteData() {
    noteData.push({
        id: Math.random() * 100,
        ...refCreateNote.value.noteForm,
    });
    closeNote();
}

function closeNote() {
    store.drawer = false;
    refCreateNote.value.restNoteForm();
}
</script>

<style lang="scss" scoped>
.noteData {
    width: 100%;
    height: 80px;
    display: flex;
    flex-wrap: wrap;

    div {
        width: 400px;
        height: 120px;
        border-radius: 20px;
        margin-left: 70px;
        margin-top: 20px;
    }

    div:hover {
        -webkit-animation-name: bounce;
        animation-name: bounce;
    }

    .note-text {
        text-indent: 10px;
        line-height: 120px;
        font-size: 30px;
        font-weight: bold;
    }

}

.footer {
    margin-top: 20px
}
</style>