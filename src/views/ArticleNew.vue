<template>
  <a-page-header
    class="js-mkdc-content-header"
    title="Quản lý nội dung bài viết"
    :breadcrumb="{ routes }"
    @back="() => null"
  />
  <div class="app-content">
    <div class="app-content__main">
      <a-row class="new-panel" :gutter="16">
        <a-col :span="6">
          <a-card title="MỤC LỤC">
            <a-steps
              direction="vertical"
              :items="[
                {
                  title: 'Thông tin chung',
                  description: 'Hiển thị nội dung chung',
                },
                {
                  title: 'Hình ảnh - Video',
                  description: 'Hiển thị hình ảnh - video',
                },
                {
                  title: 'Meta Data',
                  description: 'Cài đặt thông tin SEO',
                },
              ]"
            ></a-steps>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card title="THÔNG TIN BÀI VIẾT" class="new-panel__card">
            <template #extra>
              <a-space>
                <a-button type="primary" :icon="h(DiffOutlined)">Lưu và gửi duyệt</a-button>
                <a-button type="primary" :icon="h(SaveOutlined)">Lưu</a-button>
                <a-button type="default" :icon="h(UndoOutlined)">Hủy bỏ</a-button>
              </a-space>
            </template>
            <div class="new-panel__content">
              <a-form
                class="mkdc-form"
                ref="formRef"
                :label-col="{ span: 24 }"
                :wrapper-col="{ span: 24 }"
              >
                <div class="mkdc-form__content">
                  <a-divider orientation="left" orientationMargin="0">Thông tin chung</a-divider>
                  <a-form-item ref="name" label="Tên bài viết" name="name" required>
                    <a-input placeholder="Tên bài viết" />
                  </a-form-item>
                  <a-form-item ref="slug" name="slug" required>
                    <label class="mkdc-form__label">Slug (<span class="color-require">*</span>)</label>
                    <a-input placeholder="Slug bài viết" />
                  </a-form-item>
                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item ref="code" name="code" required>
                        <label class="mkdc-form__label">Mã nội dung (<span class="color-require">*</span>)</label>
                        <a-input placeholder="Mã nội dung" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <a-form-item ref="author" name="author" required>
                        <label class="mkdc-form__label">Tác giả (<span class="color-require">*</span>)</label>
                        <a-input placeholder="Tác giả" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item ref="category" name="category" required>
                        <label class="mkdc-form__label">Nhóm nội dung (<span class="color-require">*</span>)</label>
                        <a-select
                          ref="select"
                          placeholder="Chọn nhóm nội dung"
                        >
                        <a-select-option value="xh">Xã hội</a-select-option>
                        <a-select-option value="tg">Thế giới</a-select-option>
                        <a-select-option value="kd">Kinh doanh</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <a-form-item ref="publishdate" name="publishdate" required>
                        <label class="mkdc-form__label">Ngày đăng (<span class="color-require">*</span>)</label>
                        <a-date-picker placeholder="Chọn ngày" />
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-divider orientation="left" orientationMargin="0">Hình ảnh - Video</a-divider>
                  <a-row :gutter="16">
                    <a-col :span="8">
                      <a-card hoverable>
                        <template #cover>
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        </template>
                        <template #actions>
                          <a-button :icon="h(CloudUploadOutlined)">Upload ảnh</a-button>
                        </template>
                      </a-card>
                    </a-col>
                  </a-row>
                  <div class="card-images">
                    <a-card title="Danh sách ảnh liên quan">
                      <template #extra>
                        <a-button :icon="h(CloudUploadOutlined)">Upload ảnh</a-button>
                      </template>
                      <span>Card content</span>
                    </a-card>
                    <a-card title="Danh sách File liên quan">
                      <template #extra>
                        <a-button :icon="h(CloudUploadOutlined)">Upload file</a-button>
                      </template>
                      <span>Card content</span>
                    </a-card>
                    <a-card title="Danh sách video liên quan">
                      <template #extra>
                        <a-button :icon="h(CloudUploadOutlined)">Upload video</a-button>
                      </template>
                      <span>Card content</span>
                    </a-card>
                  </div>

                  <a-divider orientation="left" orientationMargin="0">Meta Data</a-divider>
                  <a-form-item ref="metaTitle" name="metaTitle" label="Tiêu đề">
                    <a-input placeholder="Tiêu đề trang" />
                  </a-form-item>
                  <a-form-item ref="metaKeyword" name="metaKeyword" label="Keyword">
                    <a-input placeholder="Nhập nhiều từ khóa. Ví dụ: Kinh doanh, ô tô, xe điện" />
                  </a-form-item>
                  <a-form-item ref="metaDescription" name="metaDescription" label="Description">
                    <a-input placeholder="Meta description" />
                  </a-form-item>
                </div>
              </a-form>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { h } from 'vue';
  import {
    SaveOutlined,
    DiffOutlined,
    UndoOutlined,
    CloudUploadOutlined,
  } from '@ant-design/icons-vue';

  const routes = [
    {
      path: '/dashboard',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/article',
      breadcrumbName: 'Bài viết',
    },
    {
      path: '/add-article',
      breadcrumbName: 'Thêm mới bài viết',
    },
  ];
</script>
