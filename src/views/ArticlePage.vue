<template>
  <a-page-header
    class="js-mkdc-content-header"
    title="Quản lý nội dung bài viết"
    @back="() => null"
  />
  <div class="app-content">
    <div class="app-content__header">
      <a-card>
        <a-input-search placeholder="Tìm kiếm bài viết theo từ khóa ..." enter-button />
        <AdvancedSearch />
      </a-card>
    </div>
    <div class="app-content__main">
      <a-card class="app-content__card">
        <div class="app-data">
          <a-row class="app-data__header" justify="end">
            <a-col>
              <a-space>
                <a-button type="primary" :icon="h(PlusOutlined)" @click="$router.push('/add-article')">Thêm mới</a-button>
                <a-button :icon="h(MinusCircleOutlined)">Từ chối</a-button>
                <a-button :icon="h(CheckCircleOutlined)">Phê duyệt</a-button>
              </a-space>
            </a-col>
          </a-row>
          <div class="app-data__content">
            <DataTable />
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import AdvancedSearch from '../components/AdvancedSearch.vue';
  import DataTable from '../components/DataTable.vue';
  import { h } from 'vue';
  import {
    PlusOutlined,
    MinusCircleOutlined,
    CheckCircleOutlined,
  } from '@ant-design/icons-vue';
</script>
