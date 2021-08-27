<template>
  <Header/>
  <section class="section">
    <div class="container">
      <h1 class="title">
        新規ユーザ登録画面
      </h1>
      <p class="subtitle">
        以下に名前とパスワードを入力して登録をしてください。
      </p>
    </div>
  <div class="field">
    <label class="label">名前</label>
    <div class="control">
      <input class="input" type="text"  name="name" v-model="name" placeholder="Text input">
    </div>
  </div>
  <div class="field">
    <label class="label">パスワード</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="password"  name="password" v-model="password" placeholder="パスワードを入力してください">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This パスワード is invalid</p>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" v-on:click="createUser">登録</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">クリア</button>
    </div>
  </div>
  </section>
</template>
<script>
import Header from './../../components/Header'
import axios from 'axios'

export default {
  name: 'app',
  components : {
    Header
  },
  data() {
    return {
      info: []
    }
  },
  computed() {

  },
  methods: {
    createUser: function() {
      axios
        .get('http://localhost:90/user/new?name=' + this.name + '&password=' + this.password,{
          name: "test",
          password: "sssss",
        })
        .then(function(response) {
          console.log(response)
        })
    },
  }
}
// User.prototype.def_s = new Object({
//   rooms: {},
//   room_name_list: []
// });
</script>