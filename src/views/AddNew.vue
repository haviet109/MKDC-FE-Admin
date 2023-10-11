<template>
  <a-page-header
    class="js-mkdc-content-header"
    title="Thêm mới hồ sơ"
    sub-title="Cán bộ xử lý: Nguyễn Văn B"
    :breadcrumb="{ routes }"
    @back="() => null"
  >
      <template #extra>
        <a-space>
          <a-button type="primary" :icon="h(DiffOutlined)">Lưu và gửi duyệt</a-button>
          <a-button type="primary" :icon="h(SaveOutlined)">Lưu</a-button>
          <a-button type="default" :icon="h(UndoOutlined)">Hủy bỏ</a-button>
        </a-space>
      </template>
  </a-page-header>
  <div class="app-content">
    <div class="app-content__main">
      <a-card>
        <a-steps
          progress-dot
          :current="0"
          :items="[
            {
              title: 'Thông tin hồ sơ',
            },
            {
              title: 'Thông tin cá nhân / Tổ chức',
            },
            {
              title: 'Tài liệu đính kèm',
            },
            {
              title: 'Thông tin đăng ký',
            },
          ]"
        ></a-steps>
        <a-form
          class="mkdc-form"
          ref="formRef"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
        >
          <div class="mkdc-form__content">
            <div class="mkdc-step">
              <FormSection1 />
            </div>

            <div class="mkdc-step">
              <a-divider orientation="left" orientationMargin="0">Thông tin cá nhân / Tổ chức</a-divider>
              <a-row :gutter="16">
                <a-col :span="8">
                  <a-form-item ref="loaidoituong" name="loaidoituong" required>
                    <label class="mkdc-form__label">Loại đối tượng (<span class="color-require">*</span>)</label>
                    <a-select
                      ref="select"
                      placeholder="Chọn loại đối tượng"
                    >
                      <a-select-option value="1">Cá nhân</a-select-option>
                      <a-select-option value="2">Tổ chức</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :span="8">
                  <a-form-item ref="tencanhantochuc" name="tencanhantochuc" required>
                    <label class="mkdc-form__label">Tên cá nhân / tổ chức (<span class="color-require">*</span>)</label>
                    <a-input-group compact>
                      <a-input style="width: calc(100% - 32px);" readonly />
                      <a-tooltip title="Chọn cá nhân / tổ chức">
                        <a-button @click="showDrawerCaNhanToChuc">
                          <template #icon><PlusOutlined /></template>
                        </a-button>
                      </a-tooltip>
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col :span="8">
                  <a-form-item ref="canhantochucdiachi" name="canhantochucdiachi">
                    <label class="mkdc-form__label">Địa chỉ</label>
                    <a-input placeholder="Địa chỉ" />
                  </a-form-item>
                </a-col>
              </a-row>
            </div>

            <div class="mkdc-step">
              <a-divider orientation="left" orientationMargin="0">Tài liệu đính kèm</a-divider>

            </div>
          </div>
        </a-form>
      </a-card>

      <!-- DRAWER TEMPLATE -->
      <a-drawer
        v-model:open="drawerCaNhanToChuc"
        class="custom-class"
        root-class-name="root-class-name"
        title="Lựa chọn cá nhân / tổ chức"
        placement="right"
        size="large"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, h } from 'vue';
  import {
    SaveOutlined,
    DiffOutlined,
    UndoOutlined,
    PlusOutlined,
  } from '@ant-design/icons-vue';

  import FormSection1 from '../components/FormSection1.vue';

  const routes = [
    {
      path: '/dashboard',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/new',
      breadcrumbName: 'Thêm mới',
    },
  ];

  const drawerCaNhanToChuc = ref<boolean>(false);
  const showDrawerCaNhanToChuc = () => {
    drawerCaNhanToChuc.value = true;
  };
</script>
