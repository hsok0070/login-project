<template>
  <v-container fill-height style="max-width:450px">
      <v-layout align-center row wrap>
            <v-row>
            <v-col cols="12">
                <v-card>
            <v-text-field 
            v-model="email" 
            label="이메일"
            >
            </v-text-field>
            <v-text-field 
            v-model="password"
            type='password'
            label="패스워드"
            >
            </v-text-field>
            </v-card>
            </v-col>
            </v-row>

      </v-layout>
  </v-container>
</template>


<script>
export default {
    data(){
        return {
            email: null,
            password: null
        }
    }
}
</script>