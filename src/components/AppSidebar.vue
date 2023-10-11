<template>
  <div
    class="main-sidebar"
    :class="{ 'main-sidebar--system': state.systemMenu.collapsed }"
  >
    <div class="main-sidebar__system">
      <ul class="menu-finance">
        <li class="menu-finance__item">
          <a class="menu-finance__link">
            <span class="menu-finance__label">System 1</span>
            <FundOutlined />
          </a>
        </li>
        <li class="menu-finance__item">
          <a class="menu-finance__link">
            <span class="menu-finance__label">System 2</span>
            <BugOutlined />
          </a>
        </li>
        <li class="menu-finance__item">
          <a class="menu-finance__link menu-finance__link--no-bg">
            <span class="menu-finance__label">System 3</span>
            <PlusOutlined />
          </a>
        </li>
      </ul>
    </div>
    <div class="main-sidebar__menu">
      <div class="sidebar-header">
        <div class="sidebar-header__title">Contributor</div>
        <div class="sidebar-header__icon">
          <PlusCircleOutlined />
        </div>
      </div>
      <div class="sidebar-menu">
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          :theme="theme"
          :items="items"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { h, ref } from 'vue';
  import {
    FundOutlined,
    BugOutlined,
    PlusOutlined,
    PlusCircleOutlined,
    DashboardOutlined,
    FundProjectionScreenOutlined,
    StockOutlined,
    AreaChartOutlined,
  } from '@ant-design/icons-vue';
  import type { MenuTheme } from 'ant-design-vue';
  import { state } from '../data/states';

  const theme = ref<MenuTheme>('dark');
  const selectedKeys = ref(['1']);
  const openKeys = ref(['1']);

  const items = ref([
    {
      key: '1',
      icon: () => h(DashboardOutlined),
      label: 'Quản lý nội dung',
      title: 'Quản lý nội dung',
      children: [
        {
          key: 'qlnd1',
          label: h('a', { href: '/article' }, 'Bài viết'),
          title: 'Bài viết',
        },
        {
          key: 'qlndaddnew',
          label: h('a', { href: '/add-article' }, 'Thêm mới bài viết'),
          title: 'Thêm mới bài viết',
        },
        {
          key: 'qlnd2',
          label: h('a', { href: '/notification' }, 'Notification'),
          title: 'Notification',
        },
        {
          key: 'qlnd3',
          label: h('a', { href: '/new' }, 'Thêm mới'),
          title: 'Thêm mới',
        },
        {
          key: 'qlnd4',
          label: 'Thuộc tính',
          title: 'Thuộc tính',
        },
        {
          key: 'qlnd5',
          label: 'Bộ thuộc tính',
          title: 'Bộ thuộc tính',
        },
        {
          key: 'qlnd6',
          label: 'Bình luận',
          title: 'Bình luận',
        },
        {
          key: 'qlnd7',
          label: 'Đánh giá',
          title: 'Đánh giá',
        },
        {
          key: 'qlnd8',
          label: 'Phân loại',
          title: 'Phân loại',
        },
      ],
    },
    {
      key: '2',
      icon: () => h(FundProjectionScreenOutlined),
      label: 'Quản lý sản phẩm',
      title: 'Quản lý sản phẩm',
      children: [
        {
          key: 'qlsp1',
          label: 'Option 1',
          title: 'Option 1',
        },
        {
          key: 'qlsp2',
          label: 'Option 2',
          title: 'Option 2',
        },
        {
          key: 'qlsp3',
          label: 'Option 3',
          title: 'Option 3',
        },
        {
          key: 'qlsp4',
          label: 'Option 4',
          title: 'Option 4',
        },
      ],
    },
    {
      key: '3',
      icon: () => h(StockOutlined),
      label: 'Cài đặt hệ thống',
      title: 'Cài đặt hệ thống',
      children: [
        {
          key: 'cdht1',
          label: 'Option 1',
          title: 'Option 1',
        },
        {
          key: 'cdht2',
          label: 'Option 2',
          title: 'Option 2',
        },
        {
          key: 'cdht3',
          label: 'Option 3',
          title: 'Option 3',
        },
        {
          key: 'cdht4',
          label: 'Option 4',
          title: 'Option 4',
        },
      ],
    },
    {
      key: '4',
      icon: () => h(AreaChartOutlined),
      label: 'Quản lý người dùng hệ thống',
      title: 'Quản lý người dùng hệ thống',
      children: [
        {
          key: 'qlnd1',
          label: 'Option 1',
          title: 'Option 1',
        },
        {
          key: 'qlnd2',
          label: 'Option 2',
          title: 'Option 2',
        },
        {
          key: 'qlnd3',
          label: 'Option 3',
          title: 'Option 3',
        },
        {
          key: 'qlnd4',
          label: 'Option 4',
          title: 'Option 4',
        },
      ],
    },
  ]);
</script>
