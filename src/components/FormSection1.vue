<template>
  <a-divider orientation="left" orientationMargin="0">Thông tin hồ sơ</a-divider>
    <a-row :gutter="16">
      <a-col :span="4">
        <a-form-item ref="mahoso" name="mahoso" required>
          <label class="mkdc-form__label">Mã hồ sơ (<span class="color-require">*</span>)</label>
          <a-input placeholder="Mã hồ sơ" />
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="mabiennhan" name="mabiennhan">
          <label class="mkdc-form__label">Mã biên nhận</label>
          <a-input placeholder="Mã biên nhận" />
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="soden" name="soden">
          <label class="mkdc-form__label">Số đến</label>
          <a-input placeholder="Số đến" />
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="ngaynop" name="ngaynop">
          <label class="mkdc-form__label">Ngày nộp</label>
          <a-date-picker placeholder="Nhập ngày (yyyy-MM-dd)" />
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="ngaytiepnhan" name="ngaytiepnhan" required>
          <label class="mkdc-form__label">Ngày tiếp nhận (<span class="color-require">*</span>)</label>
          <a-date-picker placeholder="Nhập ngày (yyyy-MM-dd)" />
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="ngaytraketqua" name="ngaytraketqua">
          <label class="mkdc-form__label">Ngày trả kết quả</label>
          <a-date-picker placeholder="Nhập ngày (yyyy-MM-dd)" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-form-item ref="loaicapphep" name="loaicapphep" required>
          <label class="mkdc-form__label">Loại cấp phép (<span class="color-require">*</span>)</label>
          <a-select
            ref="select"
            placeholder="Chọn loại cấp phép"
            v-model:value="select1"
          >
            <a-select-option value="1">Cấp giấy phép thăm dò khoáng sản</a-select-option>
            <a-select-option value="2">Cấp phép thăm dò khoáng sản gia hạn</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="hinhthucnophoso" name="hinhthucnophoso">
          <label class="mkdc-form__label">Hình thức nộp hồ sơ</label>
          <a-select
            ref="select"
            placeholder="Chọn hình thức nộp hồ sơ"
            v-model:value="select2"
          >
            <a-select-option value="1">Trực tiếp</a-select-option>
            <a-select-option value="2">Trực tuyến</a-select-option>
            <a-select-option value="3">Bưu điện</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item ref="hinhthucnhanhoso" name="hinhthucnhanhoso">
          <label class="mkdc-form__label">Hình thức nhận hồ sơ</label>
          <a-select
            ref="select"
            placeholder="Chọn hình thức nhận hồ sơ"
            v-model:value="select3"
          >
            <a-select-option value="1">Trực tiếp</a-select-option>
            <a-select-option value="2">Trực tuyến</a-select-option>
            <a-select-option value="3">Bưu điện</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item ref="coquantiepnhan" name="coquantiepnhan">
          <label class="mkdc-form__label">Cơ quan tiếp nhận</label>
          <a-select
            ref="select"
            placeholder="Chọn cơ quan tiếp nhận"
            v-model:value="select4"
          >
            <a-select-option value="1">Sở tài nguyên và môi trường X</a-select-option>
            <a-select-option value="2">UBND tỉnh X</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const select1 = ref('1');
  const select2 = ref('1');
  const select3 = ref('1');
  const select4 = ref('1');
</script>
