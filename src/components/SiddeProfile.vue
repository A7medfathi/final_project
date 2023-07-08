<template>
    <div class="col-lg-3">
            <ul class="text-start list-unstyled dashboard-list d-grid">
              <li class="mb-4">
                <router-link to="/profile" class="text-decoration-none text-gray"
                  ><i class="bi bi-columns-gap me-2"></i> Dashboard</router-link
                >
              </li>
              <li class="mb-4">
                <router-link to="/profile"
                  class="text-decoration-none text-gray"
                  ><i class="fas fa-user me-2"></i> Personal Info</router-link
                >
              </li>
              <li class="mb-4">
                <a
                  href="profile-reviews.html"
                  class="text-decoration-none text-gray"
                  ><i class="fas fa-heart me-2"></i> Reviews</a
                >
              </li>
              <li class="mb-4">
                <router-link to="/ChangePassword"
                  class="text-decoration-none text-gray"
                  ><i class="fas fa-lock me-2"></i> Change Password</router-link
                >
              </li>
              <li class="mb-4">
                <router-link @click="logout" to="/login" class="text-decoration-none text-gray"
                  ><i class="fas fa-sign-out-alt me-2"></i> Loggout</router-link
                >
              </li>
            </ul>
          </div>
</template>

<script>
import axios from 'axios';
export default {
methods:{
    logout() {
      axios
        .get(
          `http://127.0.0.1:8000/api/auth/client/logout`,
          {headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${this.$store.state.token}`
            }   
        }
        )
        .then((response) => {
          console.log(response);
          localStorage.removeItem("token")
          this.$store.state.token = localStorage.getItem("token");
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
}
}
</script>

<style>

</style>