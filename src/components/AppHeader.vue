<template>
  <div class="app-header__inner">
    <div class="app-header__left">
      <a-button class="hmenu-button" type="text" @click="toggleSystemMenu">
        <MenuUnfoldOutlined v-if="state.systemMenu.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a class="logo" href="/">
        <img src="@/assets/logo.svg" alt="Logo">
      </a>
    </div>
    <div class="app-header__right">
      <a-dropdown>
        <div class="header-information" @click.prevent>
          <a class="header-information__link" href="/">
            <BellOutlined />
          </a>
          <span class="header-information__count">11</span>
        </div>
        <template #overlay>
          <div class="header-alert">
            <div class="header-alert__header">
              <h3 class="header-alert__title">Alerts</h3>
              <div class="header-alert__function">
                <a class="header-alert__action" href="javascript:;"><FilterOutlined /></a>
                <a class="header-alert__action active" href="javascript:;"><CheckCircleOutlined /></a>
              </div>
            </div>
            <div class="header-alert__content">
              <a-space direction="vertical" style="width: 100%">
                <a-alert class="header-alert__empty" message="Alerts about your account will show here" type="info" />
                <a-alert message="Informational Notes" type="info" closable show-icon />
                <a-alert message="Informational Notes" type="info" closable show-icon />
                <a-alert message="Informational Notes" type="info" closable show-icon />
                <a-alert message="Alert Message Text" type="success" closable show-icon />
              </a-space>
            </div>
          </div>
        </template>
      </a-dropdown>
      <a-dropdown>
        <a class="header-user" @click.prevent>
          <div class="header-user__avatar">
            <img src="@/assets/user-avatar.svg" alt="Avatar">
          </div>
          <div class="header-user__name">MKDC</div>
        </a>
        <template #overlay>
          <ul class="header-user__menu">
            <li class="header-user__menu-item">
              <a class="header-user__menu-link" href="javascript:;">
                <span class="header-user__menu-icon"><UserAddOutlined /></span>
                <span>Trang cá nhân</span>
              </a>
            </li>
            <li class="header-user__menu-item">
              <a class="header-user__menu-link" href="javascript:;">
                <span class="header-user__menu-icon"><SettingOutlined /></span>
                <span>Trang chủ</span>
              </a>
            </li>
            <li class="header-user__menu-item">
              <a class="header-user__menu-link" href="javascript:;">
                <span class="header-user__menu-icon"><ScheduleOutlined /></span>
                <span>Lịch cá nhân</span>
              </a>
            </li>
            <li class="header-user__menu-item">
              <a class="header-user__menu-link" href="javascript:;">
                <span class="header-user__menu-icon"><ClockCircleOutlined /></span>
                <span>Lịch sử hoạt động</span>
              </a>
            </li>
            <li class="header-user__menu-item">
              <a class="header-user__menu-link" href="javascript:;">
                <span class="header-user__menu-icon"><FileTextOutlined /></span>
                <span>Đơn yêu cầu</span>
              </a>
            </li>
          </ul>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {
    BellOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserAddOutlined,
    SettingOutlined,
    ScheduleOutlined,
    ClockCircleOutlined,
    FileTextOutlined,
    FilterOutlined,
    CheckCircleOutlined,
  } from '@ant-design/icons-vue';
  import { state } from '../data/states';

  const toggleSystemMenu = () => {
    state.systemMenu.collapsed = !state.systemMenu.collapsed;
  };
</script>
