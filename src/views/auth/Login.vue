<template>
  <Header/>

<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="/login" method="post" class="box">
            <div class="field">
              <label for="" class="label">ユーザ名</label>
              <div class="control has-icons-left">
                <input type="text" name="username" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">パスワード</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
                <input type="submit" value="ログイン" class="button is-success">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import Header from './../../components/Header'
// import axios from 'axios'

export default {
  name: 'app',
  components : {
    Header
  },
  data() {
    return {
      message: null
    }
  },
  computed() {

  },
  methods: {
  }
}
</script>