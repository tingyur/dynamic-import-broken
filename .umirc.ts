import { defineConfig } from 'umi';

export default defineConfig({
  chainWebpack(config) {
    config.module
      .rule('html-file')
      .test(/.html$/)
      .use('html-loader')
      .loader('html-loader');
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index'
    }
  ],
});
