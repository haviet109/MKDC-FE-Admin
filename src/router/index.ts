import { createRouter, createWebHistory } from 'vue-router';

import DashBoard from '../views/DashBoard.vue';
import ArticlePage from '../views/ArticlePage.vue';
import ArticleNew from '../views/ArticleNew.vue';
import NotificationPage from '../views/NotificationPage.vue';
import AddNew from '../views/AddNew.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/article',
      name: 'Quản lý bài viết',
      component: ArticlePage
    },
    
    {
      path: '/add-article',
      name: 'Thêm mới bài viết',
      component: ArticleNew
    },
    {
      path: '/notification',
      name: 'Thông báo',
      component: NotificationPage
    },
    {
      path: '/new',
      name: 'Thêm mới',
      component: AddNew
    }
  ]
});

export default router;
