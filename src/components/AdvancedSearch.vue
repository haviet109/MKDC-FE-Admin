<template>
  <div class="advanced-search">
    <a-collapse ghost>
      <a-collapse-panel header="Tìm kiếm nâng cao">
        <a-form
          ref="formRef"
          name="advanced_search"
          class="ant-advanced-search-form"
        >
          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item
                name="Nhóm bài viết"
                label="Nhóm bài viết"
              >
                <a-select
                  ref="select"
                  show-search
                  placeholder="Chọn nhóm bài viết"
                >
                  <a-select-option value="nhom1">Nhóm bài viết 1</a-select-option>
                  <a-select-option value="nhom2">Nhóm bài viết 2</a-select-option>
                  <a-select-option value="nhom3">Nhóm bài viết 3</a-select-option>
                  <a-select-option value="nhom4">Nhóm bài viết 4</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="Loại bài viết"
                label="Loại bài viết"
              >
                <a-input placeholder="Loại bài viết"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="Ngày tạo"
                label="Ngày tạo"
              >
                <a-range-picker />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="Trạng thái"
                label="Trạng thái"
              >
                <a-input placeholder="Trạng thái"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item
                name="Nhóm bài viết"
                label="Nhóm bài viết"
                :label-col="{span: 24}"
              >
                <a-select
                  ref="select"
                  show-search
                  placeholder="Chọn nhóm bài viết"
                >
                  <a-select-option value="nhom1">Nhóm bài viết 1</a-select-option>
                  <a-select-option value="nhom2">Nhóm bài viết 2</a-select-option>
                  <a-select-option value="nhom3">Nhóm bài viết 3</a-select-option>
                  <a-select-option value="nhom4">Nhóm bài viết 4</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="Loại bài viết"
                label="Loại bài viết"
                :label-col="{span: 24}"
              >
                <a-input placeholder="Loại bài viết"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="Ngày tạo"
                label="Ngày tạo"
                :label-col="{span: 24}"
              >
                <a-range-picker />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="Trạng thái"
                label="Trạng thái"
                :label-col="{span: 24}"
              >
                <a-input placeholder="Trạng thái"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="end">
            <a-col>
              <a-space>
                <a-button :icon="h(SyncOutlined)">Xóa bộ lọc</a-button>
                <a-button type="primary" :icon="h(SearchOutlined)">Tìm kiếm</a-button>
              </a-space>
            </a-col>
          </a-row>
        </a-form>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script lang="ts" setup>
  import { h } from 'vue';
  import {
    SyncOutlined,
    SearchOutlined,
  } from '@ant-design/icons-vue';
</script>
