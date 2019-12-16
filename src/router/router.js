import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/vuex"

Vue.use(VueRouter);
const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    //이미 로그인 된 유저 차단.
    alert('이미 로그인을 하였습니다.')
    next('/')
  }else {
    next()
  }
}
const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false) {
    //아직 로그인 안된 유저 차단.
    alert('로그인 하세요.')
    next('login')
  }else {
    next()
  }
}
const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
    import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: onlyAuthUser,
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/MyPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
