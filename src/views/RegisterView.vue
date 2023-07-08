<template>
  <section class="signup my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <form @submit.prevent="singup" method="post" class="text-gray contact-form">
            <div class="row">
              <div class="box-shadow p-5">
                <h3 class="text-center text-dark pt-5">Create Account</h3>
                <div class="row text-start">
                  <div class="mb-3 d-flex justify-content-between">
                  <div class="w-50 mb-3">
                    <label for="name" class="d-block mb-2">Name*</label>
                    <input
                      type="text"
                      id="name"
                      class="w-100 ps-4"
                      placeholder="Name"
                      required
                      v-model="user.name"
                    />
                  </div>
                  <div class="w-50 ms-2">
                    <label for="tel" class="d-block mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      id="tel"
                      v-model="user.mobile"
                      class="w-100 ps-4"
                      placeholder="059 / 056 *******"
                      required
                    />
                  </div>
   
                </div>
                <div class="mb-3 d-flex justify-content-between">
                  <div class="w-50 mb-3">
                  <label for="email" class="d-block mb-2">Email*</label>
                  <input
                    type="email"
                    id="email"
                    class="w-100 ps-4"
                    placeholder="Email"
                    v-model="user.email"
                  />
                </div>
                <div class="w-50 ms-2">
                    <label for="date" class="d-block mb-2">Date Of Birth*</label>
                    <input
                      type="date"
                      id="date"
                      class="w-100 ps-4"
                      required
                      v-model="user.date_of_birth"
                    />
                  </div>
                </div>
                </div>
                <div class="row text-start">
                  <div class="mb-3 col-lg-6">
                    <label for="password" class="d-block mb-2">Password*</label>
                    <input
                      type="password"
                      id="password"
                      class="w-100 ps-4"
                      placeholder="* * * * *"
                      v-model="user.password"
                    />
                  </div>
                  <div class="mb-3 col-lg-6">
                    <label for="confirmpassword" class="d-block mb-2"
                      >Confirm Password*</label
                    >
                    <input
                      type="password"
                      id="confirmpassword"
                      class="w-100 ps-4"
                      placeholder="* * * * *"
                      v-model="user.password_confirmation"
                    />
                  </div>
                </div>
                <!-- <div class="mb-3 text-start">
                  <input type="checkbox" id="agree" />
                  <label for="agree"
                    >I agree all terms and condition in ShopO</label
                  >
                </div> -->
                <button
                  type="submit"
                  class="w-100 bg-dark text-center text-white p-3"
                >
                  Create Account
                </button>
                <h5 class="fs-6 text-center mt-3">
                  <span class="text-gray">Already have an Account?</span>
                  <a href="login.html" class="text-dark text-decoration-none"
                    >Log In</a
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
        name:"",
        email: "",
        mobile:"",
        date_of_birth:"",
        password: "",
        password_confirmation:""
      },
    };
  },
  methods: {
    singup() {
      var dataSent = this.user;
      // this.$store.state.id
      axios
        .post(`http://127.0.0.1:8000/api/auth/client/register`, {
          name: dataSent.name,
          date_of_birth: dataSent.date_of_birth,
          mobile: dataSent.mobile,
          email: dataSent.email,
          password: dataSent.password,
          password_confirmation: dataSent.password_confirmation,
        })
        .then((response) => {
          this.$store.state.token = response.data.data.name;
          localStorage.setItem("token", response.data.data.name);
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
