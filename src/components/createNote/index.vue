<template>
    <div class="createNote">
        <alan-template>
            <template #header>
                <el-form
                    :inline="true" :model="noteForm"
                    class="demo-form-inline"
                >
                    <el-form-item label="标题">
                        <el-input
                            v-model="noteForm.title"
                            :disabled="disables" size="small"
                        />
                    </el-form-item>
                    <el-form-item label="心情类型">
                        <el-select
                            v-model="noteForm.Notetype"
                            :disabled="disables"
                            size="small" width="200px"
                        >
                            <el-option label="Zone one" value="shanghai"/>
                            <el-option label="Zone two" value="beijing"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="颜色块">
                        <el-color-picker v-model="noteForm.backgroundColor" :disabled="disables"/>
                    </el-form-item>
                    <el-form-item label="标题颜色">
                        <el-color-picker
                            v-model="noteForm.textColor"
                            :disabled="disables"
                        />
                    </el-form-item>
                </el-form>

            </template>
            <template #content>
                <el-input
                    v-model="noteForm.text"
                    :disabled="disables"
                    :rows="2"
                    type="textarea"
                    placeholder="duke790"
                />
            </template>
        </alan-template>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from 'vue';
import alanTemplate from '../alanTemplate/index.vue';
export default defineComponent({
    name: 'create-note',
    comments: {
        alanTemplate,
    },
    props: {
        disables: Boolean,
    },
    setup(props, context) {
        let noteForm = ref({
            title: '',
            text: '',
            textColor: '',
            backgroundColor: '',
            Notetype: '',
        });

        function restNoteForm() {
            // eslint-disable-next-line guard-for-in
            for (const item in noteForm) {
                // eslint-disable-next-line no-undef
                noteForm[item] = '';
            }
        }
        return {
            noteForm,
            restNoteForm,
        };
    },
});
</script>
<style lang="scss" scoped>
.createNote{
    width: 100%;
}
</style>