<template>
  <Header/>
  <section class="section">
    <div class="container">
      <h1 class="title">
        ユーザ管理
      </h1>
      <p class="subtitle">
        ユーザの閲覧・更新ができます
      </p>
    </div>
    <div class="content" id="user_list">
    </div>
    <div class="content">
      <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" id="submit">更新</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">クリア</button>
          </div>
        </div>
    </div>
  </section>
</template>
<script>
import Header from './../components/Header'
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
  mounted() {
      this.getUser();
  },
  methods: {
    getUser: function() {
      axios
        .get('http://localhost:90/api/users',)
        .then(function(response) {
          console.log(response)
        })
    },
  }
}
</script>