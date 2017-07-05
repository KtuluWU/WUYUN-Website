<template>
  <div class="contact">
    <toast ref="toast"></toast>
    <div class="content">
      <div class="title bold">{{$t("Pages5")}}</div>
      <div class="tip">{{$t("contactTip")}}</div>
      <div class="container">
        <form>
          <div class="titles">{{$t("contactLastname")}}
            <span class="muststar">*</span>
          </div>
          <input class="inputText" v-model="lastName" :maxlength="maxlen_short"></input>
  
          <div class="titles">{{$t("contactFirstname")}}
            <span class="muststar">*</span>
          </div>
          <input class="inputText" v-model="firstName" :maxlength="maxlen_short"></input>
  
          <div class="titles">{{$t("contactPhone")}}
          </div>
          <input class="inputText" v-model="phoneNumber" :maxlength="maxlen_short"></input>
  
          <div class="titles">{{$t("contactEmail")}}
            <span class="muststar">*</span>
          </div>
          <input class="inputText" v-model="email" :maxlength="maxlen_short"></input>
  
          <div class="Text">
            <div class="titles">{{$t("contactTextTitle")}}</div>
            <textarea class="TextArea" v-model="message" :maxlength="maxlen_message"></textarea>
            <div class="remain">{{counttextarea}} </div>
          </div>
        </form>
        <div class="buttonEnvoyer">
          <button class="buttonContact bold" type="submit" v-on:click="confirm()">
            <!--<img src="../../assets/mail-white.png" class="icon"></img>-->
            <i class="material-icons icon">mail</i>
            <div>{{$t("contactButton")}}</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import toast from '../Toast';
import { mapGetters } from 'vuex';

export default {
  name: 'contact',
  components: {
    toast,
  },
  data() {
    return {
      lastName: "",
      firstName: "",
      phoneNumber: "",
      email: "",
      message: "",

      maxlen_message: 1000,
      maxlen_short: 20,
      maxlen_long: 40,
    }
  },
  methods: {
    confirm() {
      if (!this.lastName) {
        alert(this.$t("contactAlert1"));
      }
      else if (!this.firstName) {
        alert(this.$t("contactAlert2"));
      }
      else if (!this.email) {
        alert(this.$t("contactAlert3"));
      }
      else
        this.sendMessage();
    },
    sendMessage() {

      console.log({
        LastName: this.lastName,
        FirstName: this.firstName,
        Phone: this.phoneNumber,
        Email: this.email,
        Message: this.message.replace(/\n/g, "<br/>") + "<br/>"
      });
      this.$refs.toast.setMessage("Envoi en cours");
      this.$store.dispatch('sendContactForm', {
        LastName: this.lastName,
        FirstName: this.firstName,
        Phone: this.phoneNumber,
        Email: this.email,
        Message: this.message.replace(/\n/g, "<br/>") + "<br/>"
      })

    }
  },
  computed: {
    counttextarea() {
      var num = 0;
      num = this.maxlen_message - this.message.length;
      return num + "/" + this.maxlen_message + " car.";
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';
.contact {
  background: $backgourd-page-color;
  padding-top: 60px;
  padding-bottom: 20px;
  background: url('../../assets/sky-cloud.png');
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    text-align: left;
    width: 50%;
    margin-bottom: 50px;
    padding: 64px 0;
    border-radius: 5px;
    box-shadow: 3px 3px 30px 0px $shadow-color;

    .title {
      text-align: center;
      color: $main-color;
      font-size: 32px;
    }

    .tip {
      text-align: center;
      font-size: 15px;
      color: $tip-color;
      margin-bottom: 20px;
    }

    .container {
      form {
        max-width: 60%;
        margin: auto;
        padding-top: 10px;

        .titles {
          font-weight: 700;
          font-size: 15px;

          .muststar {
            color: $tip-color;
          }
        }

        .inputText {
          width: 100%;
          height: 25px;
          font-size: 15px;
          line-height: 1.42857143;
          color: #555;
          background-image: none;
          background-color: rgba(256, 256, 256, 0.6);
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 15px;
        }

        .Text {
          .TextArea {
            height: 114px;
            width: 100%;
            font-size: 15px;
            line-height: 1.42857143;
            background-image: none;
            background-color: rgba(256, 256, 256, 0.6);
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .remain {
            font-size: 15px;
            color: $main-color;
            float: right;
          }
        }
      }
      .buttonEnvoyer {
        margin: 30px 20%;

        .buttonContact {
          display: flex;
          align-items: center;
          padding: 20px 30px;
          font-size: 15px;
          color: $text-second-color;
          background: $button-color;
          border-radius: 3px;
          border: 1px solid $button-color;
          cursor: pointer;
          transition: 0.5s;

          .icon {
            width: 22px;
            height: 22px;
            margin-right: 5px;
          }
        }

        .buttonContact:focus,
        .buttonContact:hover {
          background-color: $button-second-color;
        }
      }
    }
  }
}
</style>