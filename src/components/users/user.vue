<template>
  <h1>User List</h1>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(user, index) in users" :key="index">
        <div class="card shadow-sm mb-2">
          <h4 class="card-text">{{ user.name }}</h4>
          <h6 class="card-text">{{ user.email }}</h6>
          <p class="card-text">{{ user.job }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../store/user.js";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(useUserStore, "users"),
  },
  async mounted() {
    await this.fetchUsers();
    console.log(this.users);
  },
  methods: {
    ...mapActions(useUserStore, ["signUp"]),
  },
};
</script>
