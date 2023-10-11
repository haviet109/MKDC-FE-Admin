<template>
  <a-table
    class="table-operation"
    :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
  >
    <template #headerCell="{ title, column }">
      <template v-if="column.dataIndex === 'operation'">
        <div style="text-align: right;">
          {{ title }}
        </div>
      </template>
    </template>
    <template #bodyCell="{ record, index, column}">
      <template v-if="column.dataIndex === 'status'">
        <template v-if="index === 0">
          <a-tag v-if="record.status === true" color="error">
            <template #icon>
              <StopOutlined />
            </template>
            <span>Từ chối</span>
          </a-tag>
        </template>
        <a-tag v-if="record.status === true && index !== 0" color="success">
          <template #icon>
            <CheckOutlined />
          </template>
          <span>Online</span>
        </a-tag>
        <a-tag v-if="record.status === false" color="default">
          <template #icon>
            <HourglassOutlined />
          </template>
          <span>Chờ duyệt</span>
        </a-tag>
      </template>

      <template v-else-if="column.dataIndex === 'operation'">
        <a-row justify="end">
          <a-col>
            <a-space>
              <a-tooltip title="Chỉnh sửa bài viết">
                <a-button class="btn-table-action">
                  <EditOutlined />
                </a-button>
              </a-tooltip>
              <a-tooltip title="Xóa bài viết">
                <a-button class="btn-table-action">
                  <DeleteOutlined />
                </a-button>
              </a-tooltip>
            </a-space>
          </a-col>
        </a-row>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import {
    StopOutlined,
    CheckOutlined,
    HourglassOutlined,
    EditOutlined,
    DeleteOutlined,
  } from '@ant-design/icons-vue';

  type Key = string | number;

  interface DataType {
    stt: number;
    key: Key;
    name: string;
    createdDate: string;
    status: boolean;
  }

    const columns = [
      {
        title: 'STT',
        dataIndex: 'stt',
        sorter: true,
      },
      {
        title: 'Tên bài viết',
        dataIndex: 'name',
        sorter: true,
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdDate',
        sorter: true,
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        filters: [
          { text: 'Online', value: true },
          { text: 'Chờ duyệt', value: false },
          { text: 'Từ chối', value: false },
        ],
      },
      {
        title: 'Thao tác',
        dataIndex: 'operation',
      },
    ];
  const pagination = {
    defaultPageSize: 20,
    showTotal: (total: number, range: number[]) => `${range[0]}-${range[1]} trong tổng số ${total} bản ghi`,
  };

  const data: DataType[] = [];

  for (let i = 0; i < 120; i++) {
    data.push({
      stt: i + 1,
      key: i,
      name: `Tên bài viết số ${i + 1}`,
      createdDate: '01/02/2023',
      status: i % 2 === 0 ? true : false,
    });
  }

  const state = reactive<{
    selectedRowKeys: Key[];
    loading: boolean;
  }>({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  });

  const onSelectChange = (selectedRowKeys: Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    state.selectedRowKeys = selectedRowKeys;
  };
</script>
