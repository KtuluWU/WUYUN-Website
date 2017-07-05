<template>
  <div class="environment">
    <div class="content">
      <div class="firstTitle">
        <div class="logo-envir"></div>
        <div class="title bold">{{$t("Pages8")}}</div>
      </div>
      <div class="divider"></div>
      <div class="page-content">
        <div class="sidebar">
          <ul class="nav tabs">
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 1}" v-on:click="currentTab = 1"> {{$t("envirMenu1")}}</div>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 2}" v-on:click="currentTab = 2"> {{$t("envirMenu2")}}</div>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 3}" v-on:click="currentTab = 3"> {{$t("envirMenu3")}}</div>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 4}" v-on:click="currentTab = 4"> {{$t("envirMenu4")}}</div>
            </li>
          </ul>
        </div>
  
        <div class="contentEnvir">
          <Apache-page v-if="currentTab == 1"></Apache-page>
          <MySQL-page v-if="currentTab == 2"></MySQL-page>
          <PHP-page v-if="currentTab == 3"></PHP-page>
          <PhpMyAdmin-page v-if="currentTab == 4"></PhpMyAdmin-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Apache from '../Environment/Apache';
import MySQL from '../Environment/MySQL';
import PHP from '../Environment/PHP';
import PhpMyAdmin from '../Environment/PhpMyAdmin';

export default {
  name: 'environment',
  components: {
    'Apache-page': Apache,
    'MySQL-page': MySQL,
    'PHP-page': PHP,
    'PhpMyAdmin-page': PhpMyAdmin,
  },
  data() {
    return {
      currentTab: 1
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';
li {
  list-style-type: none;
}

.content {
  .firstTitle {
    display: flex;
    width: 300px;
    padding: 30px 0 0 30px;

    .logo-envir {
      background-image: url('../../assets/environment-logo.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 45px;
      height: 55px;
      margin-right: 5px;
    }
    .title {
      font-size: 28px;
      line-height: 2;
      color: $main-color;
    }
  }

  .divider {
    width: 95%;
    height: 1px;
    background: $icon-third-color;
    margin: 0 auto;
  }

  .page-content {
    display: flex;
    .sidebar {
      width: 20%;
      height: 100%;
      padding: 20px 0;
      text-align: left;
      border-right: 1px solid $icon-third-color;

      .nav {
        color: $main-color;
        .menu {
          margin-bottom: 20px;
          .menuTitle {
            cursor: pointer;
          }
          .menuTitle.active,
          .menuTitle:hover {
            color: $icon-third-color;
            text-decoration: underline;
          }
        }
      }
    }
    .contentEnvir {
      width: 50%;
      overflow: hidden;
      padding-left: 50px;
    }
  }
}
</style>