<template>
    <div class="header-container">
        <div>
            <p>{{ store.isUserName || 'xxx' }} 的笔记</p>
            <p>{{ currentTime }}</p>
        </div>
        <div class="note" @click="createNote">
            新建笔记
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue';
import {parseTime} from '../../utils/index';
import {useStore} from '../../store/index';
export default defineComponent({
    name: 'note-header',
    setup() {
        const store = useStore();
        let currentTime = ref();
        setInterval(() => {
            currentTime.value = parseTime(new Date());
        }, 1000);

        function createNote() {
            store.disable = false;
            store.drawer = true;
        }
        return {
            store,
            currentTime,
            parseTime,
            createNote,
        };
    },
});
</script>

<style lang="scss" scoped>
.header-container{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    background-color: var(--public-background);
    font-size: 20px;
    font-weight: bold;
}

.note{
    cursor: pointer;
    color: var(--public-white);
    margin: 20px 20px 0 0;
}
</style>