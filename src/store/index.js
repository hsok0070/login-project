import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "hoza", email: "hoza@naver.com", password: "1234" },
      { id: 2, name: "hozaa", email: "hozaa@naver.com", password: "1235" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // 로그인이 성공했을 때,
    loginSuccess(state) {
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인이 실패했을 때,
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    }
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      // 전체 유저에서 해당 이메일로 유저를 찾는다.  
      let selectedUser = null
        state
            .allUsers
            .forEach(user => {
                if (user.email === loginObj.email) 
                    selectedUser = user
            });
        selectedUser === null || selectedUser.password !== loginObj.password
            ? commit('loginError')
            : commit('loginSuccess')
      // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
    }
  },
  modules: {}
});
