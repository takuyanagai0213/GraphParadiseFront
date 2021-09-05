<template>
  <Header />
  <section class="section">
    <div class="container">
      <h1 class="title">ユーザ管理</h1>
      <p class="subtitle">ユーザの閲覧・更新ができます</p>
    </div>
    <table>
      <thead>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
          <th>Qualification or relegation</th>
        </tr>
      </thead>
      <tbody>
        <div  v-for="user in users" :key="user.message">
          <tr>
            <th>1</th>
            <td>{{ user[0] }}</td>
            <td>{{ user[1] }}</td>
            <td>{{ user[2] }}</td>
          </tr>
        </div>
      </tbody>
    </table>
    <div class="content">
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" v-on:click="updateUser">更新</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">クリア</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Header from "./../../components/Header";
import client from "./../../grpc/client.js";

import {
  ListUserRequest,
  // ListUserResponse,
  // User,
} from "./../../grpc/user_pb";

export default {
  name: "app",
  components: {
    Header,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.get();
    },
    get() {
      const request = new ListUserRequest();
      client.listUser(request, {}, (err, res) => {
        console.log(err);
        this.users = res.array;
        console.log(res.array);
      });
    },
  },
};
</script>
