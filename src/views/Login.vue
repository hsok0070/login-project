<template>
  <v-container fill-height style="max-width:450px">
    <v-layout align-center="align-center" row="row" wrap="wrap">
    <v-row>
        <v-col cols="12">
          <v-alert class="mb-3" type="error" :value="isLoginError">
            아이디와 비밀번호를 확인해주세요.
          </v-alert>
          <v-alert class="mb-3" type="success" :value="isLogin">
            로그인이 완료되었습니다.
          </v-alert>
            <v-card>
                <v-toolbar flat>
                    <v-toolbar-title>로그인</v-toolbar-title>
                </v-toolbar>
                <div class="pa-3">
                <v-text-field v-model="email" label="이메일"></v-text-field>
                <v-text-field v-model="password" type='password' label="패스워드"></v-text-field>
                <v-btn
                color='primary'
                depressed
                block
                large
                @click= "login({email, password})"
                >
                버튼
                </v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
</v-layout>
  </v-container>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
    data(){
        return {
            email: null,
            password: null
        }
    },
    computed: {
        ...mapState(['isLogin','isLoginError'])

    },
    methods: {
        ...mapActions(['login'])
        // login(){
            // 전체 유저에서 해당 이메일로 유저를 찾는다.
            /* let selectedUser = null
            this.allUsers.forEach(user => {
                if(user.email === this.email) selectedUser = user
            });
            selectedUser === null
            ? (this.isError = true)
            :selectedUser.password !== this.password 
                ? (this.isError = true)
                : (this.loginSuccess = true) */
            /* if(selectedUser === null) 
                alert('입력한 이메일이 없습니다.')
            else {
                selectedUser.password !== this.password 
                ? alert('이메일과 비밀번호가 일치하지 않습니다.')
                :alert('로그인이 완료되었습니다.')
                } */
                
                /* if(selectedUser.password !== this.password)
                    alert('이메일과 비밀번호가 일치하지 않습니다.')
                    else {
                        alert('로그인이 완료되었습니다.')
                    } */
                    
                
            
            // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.

            // console.log(this.email,this.password)
        //}
    },
}
</script>