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
    <label class="label">ユーザID</label>
    <div class="control">
      <input class="input" type="text"  name="name" v-model="user_id" placeholder="Text input">
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
    <p class="help is-danger">{{ message }}</p>
  </div>
  <div class="field">
    <label class="label">名前</label>
    <div class="control">
      <input class="input" type="text"  name="name" v-model="name" placeholder="Text input">
    </div>
  </div>
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" v-model="email" placeholder="Email input">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>
  <div class="field">
    <label class="label">ユーザコメント</label>
    <div class="control">
      <textarea class="textarea" v-model="profile" placeholder="Textarea"></textarea>
    </div>
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
import client from './../../grpc/client.js'
import Header from './../../components/Header'

export default {
  name: 'app',
  components : {
    Header
  },
  data() {
    return {
      info: [],
      message: null,
      user_id: null,
      name: null,
      password: null,
      email: null,
      profile: null,
    }
  },
  // computed() {

  // },
  methods: {
    createUser: async function() {
      await client.
        createUser(this.getUser(), (err, res) => {
          console.log(res);
        });
    },
    getUser() {
      const user = {
        'user_id': this.user_id,
        'user_name': this.name,
        'password': this.password,
        'email': this.email,
        'profice_text': this.profile
      };
      return user;
    },
  },
}
// User.prototype.def_s = new Object({
//   rooms: {},
//   room_name_list: []
// });
</script>