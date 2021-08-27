<template>
  <Header/>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
    <div class="content" id="user_list">
    </div>
    <div class="content">
      <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" id="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
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
</script>