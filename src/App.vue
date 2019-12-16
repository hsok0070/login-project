<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item router :to="{name: 'home'}" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLogin === false" router :to="{name: 'login'}" exact>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item v-else router :to="{name: 'login'}" exact>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLogin === true" router :to="{name: 'mypage'}" exact>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이 페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
         <v-menu offset-y v-if='isLogin'>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          dark
          v-on="on"
          icon
        >
          <i class="fas fa-bone"></i>
          <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item router to="{name: 'mypage'}">
          <v-list-item-title>마이페이지</v-list-item-title>
        </v-list-item>
        <v-list-item @click='$store.dispatch("logout")'>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
        
      </v-list>
    </v-menu>
        <v-btn text v-else router :to="{name: 'login'}">Loh In</v-btn>
        <v-btn text>test</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      ...mapState(['isLogin'])
    },
    /* methods: {
      ...mapActions(['logout'])
    }, */
  }
</script>