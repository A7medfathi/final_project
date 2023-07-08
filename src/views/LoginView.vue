<template>
  <section class="login my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 box-shadow">
          <form @submit.prevent="login" class="contact-form">
            <div class="row">
              <div class="p-5">
                <h3 class="text-center pt-5">Login</h3>
                <div class="mb-3 text-start">
                  <label for="email" class="d-block mb-2">Email*</label>
                  <input
                    type="text"
                    v-model="user.email"
                    id="email"
                    class="w-100 ps-4"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3 text-start">
                  <label for="password" class="d-block mb-2">Password*</label>
                  <input
                    type="password"
                    v-model="user.password"
                    id="password"
                    class="w-100 ps-4"
                    placeholder="* * * * *"
                  />
                </div>
                <div class="mb-3 d-flex justify-content-between">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember Me</label>
                  </div>
                  <h5 class="fs-6">
                    <a href="" class="text-primary text-decoration-none"
                      >Forgot password?</a
                    >
                  </h5>
                </div>
                <button
                  type="submit"
                  class="w-100 bg-dark text-center text-white p-3"
                >
                  Login
                </button>
                <h5 class="fs-6 text-center mt-3">
                  <span class="text-gray">Dont't have an account ?</span>
                  <router-link to="/Register" class="text-dark text-decoration-none"
                    >Sign Up Free</router-link
                  >
                </h5>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6">
          <img
            class="img-fluid"
            src="img/login_image-2022-11-17-11-07-21-2774.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  created() {
    if (this.$store.state.token) {
      this.$router.push({ path: "/" });
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      var dataSent = this.user;
      // this.$store.state.id
      axios
        .post(`http://127.0.0.1:8000/api/auth/client/login`, {
          email: dataSent.email,
          password: dataSent.password,
        })
        .then((response) => {
          this.$store.state.token = response.data.data.token;
          localStorage.setItem("token", response.data.data.token);
          this.$store.state.user = response.data.data;
          this.$store.state.user = response.data.data;
        //   localStorage.setItem("user", JSON.parse(response.data.data));
          localStorage.setItem("user", JSON.stringify(this.$store.state.user));
          console.log(response.data.data.name);
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },
  },
};
</script>

<style></style>
