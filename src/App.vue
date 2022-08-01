<template>
  <div id="container">
      <div class="page-header">
        <h1 class="text-center">연락처 관리 애플리케이션</h1>
        <p>(Dynamic Component + EventBus + Axios) </p>
        <div class="btn-group">
          <router-link to="/home" class="btn btn-info menu">Home</router-link>
          <router-link to="/about" class="btn btn-info menu">About</router-link>
          <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link>
        </div>
      </div>
      <transition name="flip" mode="out-in">
        <router-view></router-view>
      </transition>
      <loading v-show="isloading"></loading>
      <!--
      <component :is="currentView"></component>
      <contactList></contactList>
      -->
  </div>
</template>

<script>
//import ContactList from './components/ContactList';
//import ContactForm from './components/ContactForm';
//import AddContact from './components/AddContact';
//import UpdateContact from './components/UpdateContact';
//import UpdatePhoto from './components/UpdatePhoto';
//import CONF from './Config.js';
//import eventBus from './EventBus.js';

import Loading from './components/Loading';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    //ContactList,
    //ContactForm,
    //AddContact,
    //UpdateContact,
    //UpdatePhoto,
    Loading
  },
  computed: mapState([ 'isloading' ])
  // computed: mapState([ 'currentView' ])
  /*
  data : function() {
    return {
      currentView : null,
      contact : { no:0, name:'', tel:'', address:'', photo:'' },
      contactlist : {
          pageno:1, pagesize: CONF.PAGESIZE, totalcount:0, contacts:[]
      }
    }
  },
  mounted : function() {
    this.fetchContacts();
    eventBus.$on("cancel", () => {
      this.currentView = null;
    });
    eventBus.$on("addSubmit", (contact) => {
      this.currentView = null;
      this.addContact(contact);
    });
    eventBus.$on("updateSubmit", (contact) => {
      this.currentView = null;
      this.updateContact(contact);
    });
    eventBus.$on("addContactForm", () => {
      this.currentView = 'addContact';
    });
    eventBus.$on("editContactForm", (no) => {
      this.fetchContactOne(no)
      this.currentView = 'updateContact';
    });
    eventBus.$on("deleteContact", (no) => {
      this.deleteContact(no);
    });
    eventBus.$on("editPhoto", (no) => {
      this.fetchContactOne(no)
      this.currentView = 'updatePhoto';
    });
    eventBus.$on("updatePhoto", (no, file) => {
      if (typeof file !=='undefined') {
        this.updatePhoto(no, file);
      }
      this.currentView = null;
    });
    eventBus.$on("pageChanged", (page)=> {
      this.pageChanged(page);
    });
  },
  methods : {
    pageChanged : function(page) {
      this.contactlist.pageno = page;
      this.fetchContacts();
    },
    fetchContacts : function() {
      this.contactlist.contacts = [];
      this.$axios.get(CONF.FETCH, {
        params : {
          pageno:this.contactlist.pageno,
          pagesize:this.contactlist.pagesize
        }
      })
      .then((response) => {
        //console.log(response.data);
        this.contactlist = response.data;
      })
      .catch((ex)=> {
        console.log('fetchContacts failed', ex);
        this.contactlist.contacts = [];
      })
    },
    addContact : function(contact) {
      //console.log("add!!")
      this.$axios.post(CONF.ADD,  contact)
      .then((response) => {
        if (response.data.status === "success") {
          this.contactlist.pageno = 1;
          this.fetchContacts();
        } else {
          console.log('연락처 추가 실패 : ' + response.data.message);
        }
      })
      .catch((ex)=> {
        console.log('addContact failed : ', ex);
      })
    },
    updateContact : function(contact) {
      this.$axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
      .then((response) => {
        if (response.data.status === "success") {
          this.fetchContacts();
        } else {
          console.log('연락처 변경 실패 : ' + response.data.message);
        }
      })
      .catch((ex) => {
        console.log('updateContact failed : ', ex);
      })
    },
    fetchContactOne : function(no) {
      this.$axios.get(CONF.FETCH_ONE.replace("${no}", no))
      .then((response) => {
        //console.log(response.data);
        this.contact = response.data;
      })
      .catch((ex)=> {
        console.log('fetchContactOne failed', ex);
      })
    },
    deleteContact : function(no) {
      this.$axios.delete(CONF.DELETE.replace("${no}", no))
      .then((response) => {
        //console.log(response);
        if (response.data.status === "success") {
          this.fetchContacts();
        } else {
          console.log('연락처 삭제 실패 : ' + response.data.message);
        }
      })
      .catch((ex) => {
        console.log('delete failed', ex);
      })
    },
    updatePhoto : function(no, file) {
      var data = new FormData();
      data.append('photo', file);
      this.$axios.post(CONF.UPDATE_PHOTO.replace("${no}", no), data)
      .then((response) => {
        if (response.data.status === "success") {
          this.fetchContacts();
        } else {
          console.log('연락처 사진 변경 실패 : ' + response.data.message);
        }
      })
      .catch((ex) => {
        console.log('updatePhoto failed', ex);
      });
    }
  }
  */
}
</script>

<style scoped>
  #container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .flip-enter-active {
    transition: all .4s ease-in-out;
  }
  .flip-leave-active {
    transition: all .4s ease-in-out;
  }
  .flip-enter, .flip-leave-to {
    transform: scaleY(0) translateZ(0);
    opacity: 0;
  }
</style>

<style>
  button {
    cursor: pointer;
    margin-right: 2px;
  }
  input[type=button] {
    cursor: pointer;
  }
</style>
