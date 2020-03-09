<template>
  <a-layout id="main">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="bg">
      <div class="logo">借支报销</div>
      <a-menu theme="light" mode="inline" :selectedKeys="[this.$route.name]">
        <a-menu-item v-for="item in menuList" :key="item.name">
          <router-link :to="item.name">
            <a-icon :type="item.icon" />
            <span>{{item.title}}</span>
          </router-link>  
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="user">
          <a-avatar>香香</a-avatar>
          <span class="user-name">程香香</span>
          <a-icon type="logout" />
        </div>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      menuList: [{
        name: 'apply',
        title: '发起申请',
        icon: 'form'
      }, {
        name: 'applyer',
        title: '我发起的',
        icon: 'form'
      }, {
        name: 'approver',
        title: '我审批的',
        icon: 'form'
      }, {
        name: 'copyer',
        title: '抄送我的',
        icon: 'form'
      }, {
        name: 'draft',
        title: '草稿箱',
        icon: 'form'
      }, {
        name: 'datamgt',
        title: '数据管理',
        icon: 'copy'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  .bg {
    background: #fff;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 56px;
    line-height: 56px;
    color: #1890ff;
    font-size: 20px;
    text-align: center;
  }
  .header {
    height: 56px;
    line-height: 56px;
    background: #fff;
    padding: 0;
    display: flex;
    justify-content: space-between;
    .user {
      margin-right: 20px;
      .user-name {
        color: #000;
        margin: 0 10px;
      }
    }
  }
  .content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: calc(100vh - 104px);
  }
}
</style>
