<template>
  <HeaderNotAuth/>

<section class="hero is-primary has-background-light">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form  v-on:submit.prevent="login" method="post" class="box">
            <div class="field">
              <label for="" class="label">ユーザ名</label>
              <div class="control has-icons-left">
                <input type="text" name="username" class="input" required  v-model="user.userId">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">パスワード</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required v-model="user.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
                <button type="submit" value="ログイン" class="button is-success">ログイン</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import HeaderNotAuth from './../../components/HeaderNotAuth'
// import axios from 'axios'

export default {
  name: 'app',
  components : {
    HeaderNotAuth
  },
  data() {
    return {
        user: {},
        message: null
    }
  },
  computed() {

  },
  methods: {
  }
}
</script>