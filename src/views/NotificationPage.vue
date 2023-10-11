<template>
  <a-page-header
    class="js-mkdc-content-header"
    title="Notification page"
    :breadcrumb="{ routes }"
    @back="() => null"
  />
  <div class="app-content">
    <div class="app-content__main">
      <a-card class="app-content__card">
        <a-divider orientation="left" orientationMargin="0">Simple</a-divider>
        <a-space>
          <a-button type="primary" @click="() => open('topLeft')">
            <RadiusBottomleftOutlined />
            topLeft
          </a-button>
          <a-button type="primary" @click="() => open('topRight')">
            topRight
          </a-button>
          <a-button type="primary" @click="() => open('bottomLeft')">
            bottomLeft
          </a-button>
          <a-button type="primary" @click="() => open('bottomRight')">
            bottomRight
          </a-button>
        </a-space>
        <a-divider orientation="left" orientationMargin="0">Notification with icon</a-divider>
        <a-space>
          <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
          <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
          <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
          <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
        </a-space>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    RadiusBottomleftOutlined,
  } from '@ant-design/icons-vue';
  import { NotificationPlacement, notification } from 'ant-design-vue';

  const open = (placement: NotificationPlacement) => openNotification(placement);
  const openNotification = (placement: NotificationPlacement) => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  const openNotificationWithIcon = (type: string) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

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
