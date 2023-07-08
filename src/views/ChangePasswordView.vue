<template>
  <section class="dashboard my-5">
    <div class="dashboard-change-password">
      <div class="container bg-white">
        <div class="header-dashboard d-flex justify-content-between p-4">
          <h5 class="fw-bold">Your Dashboard</h5>
        </div>
        <div class="row mt-4 p-4">
          <SiddeProfile></SiddeProfile>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-6 text-start">
                <form action="" method="post" class="contact-form">
                  <div class="mb-3 position-relative">
                    <label for="oldpassword" class="d-block mb-2"
                      >Old Password*</label
                    >
                    <input
                      type="password"
                      id="oldpassword"
                      class="w-100 ps-4"
                      placeholder="* * * * *"
                      required
                      v-model="user.current_password"
                    />
                    <!-- <button type="button" class="bg-transparent border-0"><i class="fa-regular fa-eye-slash"></i></button> -->
                  </div>
                  <div class="mb-3 position-relative">
                    <label for="password" class="d-block mb-2">Password*</label>
                    <input
                      type="password"
                      id="password"
                      class="w-100 ps-4"
                      placeholder="* * * * *"
                      required
                      v-model="user.new_password"
                    />
                    <!-- <button type="button" class="bg-transparent border-0"><i class="fa-regular fa-eye-slash"></i></button> -->
                  </div>
                  <div class="mb-3 position-relative">
                    <label for="repassword" class="d-block mb-2"
                      >Re-enter Password*</label
                    >
                    <input
                      type="password"
                      id="repassword"
                      class="w-100 ps-4"
                      placeholder="* * * * *"
                      required
                      v-model="user.new_password_confirmation"
                    />
                    <!-- <button type="button" class="bg-transparent border-0"><i class="fa-regular fa-eye-slash"></i></button> -->
                  </div>
                </form>
                <button
                  type="button"
                  class="border-0 rounded-2 bg-primary p-2 text-white"
                  @click="changePassword"
                >
                  Update Password
                </button>
              </div>
              <div class="col-lg-6 mobile-hide">
                <img
                  class="img-fluid"
                  src="img/login_image-2022-11-17-11-07-21-2774.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import SiddeProfile from "@/components/SiddeProfile.vue";

export default {
  created() {
    // this.user = JSON.parse(localStorage.getItem("user"));
  },
  data() {
    return {
      user: {
        current_password:'',
        new_password:'',
        new_password_confirmation:'',
      },
    };
  },
  methods: {
    changePassword() {
      var objectUser = this.user;
      axios
        .put(`http://127.0.0.1:8000/api/auth/client/password/change`, {
          current_password: objectUser.current_password,
          new_password: objectUser.new_password,
          new_password_confirmation: objectUser.new_password_confirmation,
        },
        {headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${this.$store.state.token}`
            }   
        })
        .then((response) => {
          // localStorage.setItem("user", JSON.stringify(response.data.data));
          // this.user = JSON.parse(localStorage.getItem("user"));
          localStorage.setItem("token", response.data.data.token)
            console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    SiddeProfile,
  },
};
</script>

<style></style>
