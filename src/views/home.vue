<template>
  <div id="app" class="home">
    <el-container >
      <el-aside width="auto">
        <div class="logo"></div>
        <el-row class="tac" >
          <el-col :span="24">
            <el-menu
              default-active="2"
              :collapse="isCollapse"
              class="el-menu-vertical-demo el-menu-admin"
              background-color=#545c64
              active-text-color=#ffd04b
              text-color=#fff>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <template>
                  <el-menu-item index="1-2"><i class="el-icon-location"></i>1111111111111</el-menu-item>
                </template>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
    <el-container>
      <el-header>
        <div class="toggle-btn el-icon-setting" @click="toggletac"></div>
        <p class="system-title">电商后台管理系统</p>
        <div class="welcome">
          你好,{{$store.getters.getName}}
          <el-link type="primary" @click="Out">退出</el-link>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggletac () {
      this.isCollapse = !this.isCollapse
    },
    Out () {
      localStorage.removeItem('mytoken')
      localStorage.removeItem('userName')
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100%;
    background-color: #E5E5E5;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height:60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: white;
  }
  .toggle-btn {
    padding: 0 10px;
    margin-left: -20px;
    font-size: 36px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &:hover {
    background-color: #00635a;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
  .el-menu-vertical-demo{
    border:0;
  }
}
</style>
