<template>
  <a-config-provider
    :theme="{
      token: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontSizeHeading4: 18,
        fontSizeHeading5: 15,
        fontSizeXL: 18,
        fontSizeLG: 15,
        colorPrimary: '#354f8a',
        colorLinkHover: '#0958d9',
        borderRadius: 3,
        paddingLG: 16,
      },
    }"
  >
    <a-layout class="duchv mkdc-main">
      <a-layout-header class="app-header">
        <AppHeader />
      </a-layout-header>
      <a-layout>
        <a-layout-sider class="app-sidebar" width="260">
          <AppSidebar />
        </a-layout-sider>
        <a-layout>
          <RouterView />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup>
  import { RouterView  } from 'vue-router';
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/AppSidebar.vue';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
</style>
