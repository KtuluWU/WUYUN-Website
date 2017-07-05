<template>
  <div class="vuejs">
    <div class="content">
      <div class="firstTitle">
        <div class="logo-vue"></div>
        <div class="title bold">{{$t("Pages6")}}</div>
      </div>
      <div class="divider"></div>
      <div class="page-content">
        <div class="sidebar">
          <ul class="nav tabs">
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 1}" v-on:click="currentTab = 1"> {{$t("vuejsMenu1")}}</div>
              <ul class="menuContent">
                <li v-on:click="currentTab = 1">
                  <a href="#titleIntro1" class="menuText">{{$t("vuejsMenuText1_1")}}</a>
                </li>
                <li v-on:click="currentTab = 1">
                  <a href="#titleIntro2" class="menuText">{{$t("vuejsMenuText1_2")}}</a>
                </li>
                <li v-on:click="currentTab = 1">
                  <a href="#titleIntro3" class="menuText">{{$t("vuejsMenuText1_3")}}</a>
                </li>
              </ul>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 2}" v-on:click="currentTab = 2"> {{$t("vuejsMenu2")}}</div>
              <ul class="menuContent">
                <li v-on:click="currentTab = 2">
                  <a href="#titleInstal1" class="menuText">{{$t("vuejsMenuText2_1")}}</a>
                </li>
                <li v-on:click="currentTab = 2">
                  <a href="#titleInstal1" class="menuText">{{$t("vuejsMenuText2_2")}}</a>
                </li>
              </ul>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 3}" v-on:click="currentTab = 3"> {{$t("vuejsMenu3")}}</div>
              <ul class="menuContent">
                <li class="menuText" v-on:click="currentTab = 3">{{$t("vuejsMenuText3_1")}}</li>
                <li class="menuText" v-on:click="currentTab = 3">{{$t("vuejsMenuText3_2")}}</li>
                <li class="menuText" v-on:click="currentTab = 3">{{$t("vuejsMenuText3_3")}}</li>
                <li class="menuText" v-on:click="currentTab = 3">{{$t("vuejsMenuText3_4")}}</li>
              </ul>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 4}" v-on:click="currentTab = 4"> {{$t("vuejsMenu4")}}</div>
            </li>
            <li class="menu">
              <div class="menuTitle bold" :class="{'active': currentTab == 5}" v-on:click="currentTab = 5"> {{$t("vuejsMenu5")}}</div>
              <ul class="menuContent">
                <li class="menuText" v-on:click="currentTab = 5">{{$t("vuejsMenuText5_1")}}</li>
                <li class="menuText" v-on:click="currentTab = 5">{{$t("vuejsMenuText5_2")}}</li>
                <li class="menuText" v-on:click="currentTab = 5">{{$t("vuejsMenuText5_3")}}</li>
              </ul>
            </li>
          </ul>
        </div>
  
        <div class="contentVue">
          <introduction-page v-if="currentTab == 1"></introduction-page>
          <installation-page v-if="currentTab == 2 "></installation-page>
          <creation-page v-if="currentTab == 3"></creation-page>
          <router-page v-if="currentTab == 4"></router-page>
          <program-page v-if="currentTab == 5"></program-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import introduction from '../vuejs/Introduction';
import installation from '../vuejs/Installation';
import creation from '../vuejs/Creation';
import router from '../vuejs/Router';
import program from '../vuejs/Program';


export default {
  name: 'vuejs',
  components: {
    'introduction-page': introduction,
    'installation-page': installation,
    'creation-page': creation,
    'router-page': router,
    'program-page': program,
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
    width: 150px;
    padding: 30px 0 0 30px;

    .logo-vue {
      background-image: url('../../assets/vue-logo-1.png');
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
    background: $icon-second-color;
    margin: 0 auto;
  }

  .page-content {
    display: flex;
    .sidebar {
      width: 20%;
      height: 100%;
      padding: 20px 0;
      text-align: left;
      border-right: 1px solid $icon-second-color;

      .nav {
        color: $main-color;

        .menu {
          margin-bottom: 20px;

          .menuTitle {
            cursor: pointer;
          }
          .menuContent {
            font-weight: 500;
            .menuText {
              text-decoration: none;
              color: $main-color;
              cursor: pointer;
            }
          }
          .menuTitle.active,
          .menuTitle:hover {
            color: $text-third-color;
            text-decoration: underline;
          }
          .menuText:hover {
            color: $text-third-color;
          }
        }
      }
    }

    .contentVue {
      width: 50%;
      overflow: hidden;
      padding-left: 50px;
    }
  }
}
</style>