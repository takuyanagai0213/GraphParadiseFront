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
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text"  name="name" placeholder="Text input">
    </div>
  </div>
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text"  name="user_name" placeholder="Text input" value="bulma">
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>
  
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
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
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="password"  name="password" placeholder="パスワードを入力してください" value="">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This パスワード is invalid</p>
  </div>
  
  <div class="field">
    <label class="label">Subject</label>
    <div class="control">
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" placeholder="Textarea"></textarea>
    </div>
  </div>
  
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox">
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>
  
  <div class="field">
    <div class="control">
      <label class="radio">
        <input type="radio" name="question">
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question">
        No
      </label>
    </div>
  </div>
  
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" v-on:click="createUser">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
  </section>
</template>
<script>
import Header from './../components/Header'

export default {
  name: 'app',
  components : {
    Header
  },
  computed() {

  },
  methods: {
    createUser: function() {
      console.log('push')
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
      // $('input[name="password"]')
      // const post_data = {
      //   name: $('input[name="name"]').val(),
      //   password: $('input[name="password"]').val(),
      // }
    // $.ajax({
    //   url: 'http://localhost:90/user/new',
    //   type: "get",
    //   data: post_data,
    //   dataType: 'json',
    // }).then(this.responseData.bind(this));
    // },
    },
    responseData: function(message) {
      console.log(message)
    }
  }
}
// User.prototype.def_s = new Object({
//   rooms: {},
//   room_name_list: []
// });
</script>