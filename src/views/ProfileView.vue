<template>
  <section class="dashboard my-5">
    <div class="dashboard-address">
      <div class="container bg-white">
        <div class="header-dashboard p-4">
          <h5 class="text-start">Your Dashboard</h5>
        </div>
        <div class="row mt-4 p-4">
        <SiddeProfile></SiddeProfile>
          <div class="col-lg-8">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="text-center">
                <h4>Update Profile</h4>
                <p>
                  Profile of at least Size
                  <span class="text-dark">300x300</span>
                </p>
                <div class="icon-upload-profile d-flex justify-content-center">
                  <div class="position-relative">
                    <img src="img/team-4.jpg" id="imageprofile" alt="" />
                    <label
                      for="input-file-profile"
                      class="upload position-absolute d-flex justify-content-center align-items-center"
                      ><span class="icon-large"
                        ><i class="fas fa-camera"></i></span
                    ></label>
                  </div>
                  <input
                    type="file"
                    class="d-none"
                    accept="image/jpeg, image/png image/jpg"
                    id="input-file-profile"
                  />
                </div>
              </div>
            </div>
            <div class="row text-start">
              <h4 class="my-4 text-center">Your Profile</h4>
              <form
                @submit.prevent="editProfile(user.id)"
                method="post"
                class="text-gray contact-form"
              >
                <div class="mb-3 d-flex justify-content-between">
                  <div class="w-50 mb-3">
                    <label for="name" class="d-block mb-2">Name*</label>
                    <input
                      type="text"
                      id="name"
                      class="w-100 ps-4"
                      v-model="user.name"
                      placeholder="Name"
                      required
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
                <div class="w-100 mb-3">
                  <label for="email" class="d-block mb-2"
                    >Email <span class="text-primary">(Read Only)</span></label
                  >
                  <input
                    type="email"
                    id="email"
                    class="w-100 ps-4 input-disabled"
                    placeholder="Email"
                    v-model="user.email"
                    disabled
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="d-block mb-2"
                    >Date Of Birth*</label
                  >
                  <input
                    type="date"
                    v-model="user.date_of_birth"
                    id="Date"
                    class="w-100 ps-4"
                    placeholder="Your Address"
                  />
                </div>
                <button
                  type="submit"
                  id="button"
                  class="w-100 p-3 text-center bg-primary text-white fw-bold"
                >
                  Save Change
                </button>
              </form>
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
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  data() {
    return {
      user: [],
    };
  },
  methods: {
    editProfile(id) {
      var objectUser = this.user;
      axios
        .post(`http://127.0.0.1:8000/api/auth/client/update/${id}`, {
          name: objectUser.name,
          email: objectUser.email,
          mobile: objectUser.mobile,
          date_of_birth: objectUser.date_of_birth,
        })
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data.data));
            this.user = JSON.parse(localStorage.getItem("user"));
        //   console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },
  },
  components:{
    SiddeProfile
  }
};
</script>

<style></style>
