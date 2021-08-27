<template>
  <Header/>
  <div class="container">
    <form action="/login" method="post">
      ユーザ名:<input type="text" name="username">
      パスワード:<input type="password" name="password">
      <input type="submit" value="ログイン">
     </form>
  </div>
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