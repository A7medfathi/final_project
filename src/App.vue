<template>
  <div class="container-xxl bg-white p-0">
    <!-- Navbar Start -->
    <div class="container-fluid nav-bar bg-transparent">
      <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <router-link
          to="/"
          class="navbar-brand d-flex align-items-center text-center"
        >
          <div class="icon p-2 me-2">
            <img
              class="img-fluid"
              src="img/icon-deal.png"
              alt="Icon"
              style="width: 30px; height: 30px"
            />
          </div>
          <h1 class="m-0 text-primary">Makaan</h1>
        </router-link>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto">
            <router-link to="/index" class="nav-item nav-link active"
              >Home</router-link
            >
            <router-link to="/about" class="nav-item nav-link"
              >About</router-link
            >
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                >Property</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <router-link to="/PropertyList" class="dropdown-item"
                  >Property List</router-link
                >
                <router-link to="/PropertyType" class="dropdown-item"
                  >Property Type</router-link
                >
                <router-link to="/PropertyAgent" class="dropdown-item"
                  >Property Agent</router-link
                >
              </div>
            </div>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <router-link to="NotFound" class="dropdown-item"
                  >404 Error</router-link
                >
              </div>
            </div>
            <router-link to="/Contact" class="nav-item nav-link"
              >Contact</router-link
            >
            <div v-if="!this.$store.state.token" class="nav-item dropdown">
              <a href="" class="nav-item nav-link"
                ><i class="fas fa-user"></i
              ></a>
              <div class="dropdown-menu dropdown-menu-setting rounded-0 m-0">
                <router-link to="/Login" class="dropdown-item">Sign In</router-link>
                <div class="separator my-2"></div>
                <router-link to="/Register" class="dropdown-item">Sign Up</router-link>
              </div>
            </div>
            <div v-else class="nav-item dropdown">
              <a href="" class="nav-link">
                <div>
                  <img alt="Logo" src="img/300-1.jpg" width="30px" />
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-setting rounded-0 m-0">
                <div class="dropdown-item">
                  <div class="menu-content d-flex align-items-center px-3">
                    <div class="symbol symbol-50px me-5">
                      <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    <div class="d-flex flex-column">
                      <div class="fw-bold d-flex align-items-center fs-5">
                        Max Smith
                        <span
                          class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
                          >Owner</span
                        >
                        <span
                          class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
                          >Customer</span
                        >
                      </div>
                      <a
                        href="#"
                        class="fw-semibold text-muted text-hover-primary fs-7"
                        >max@kt.com</a
                      >
                    </div>
                    <!--end::Username-->
                  </div>
                </div>
                <div class="separator my-2"></div>
                <div class="dropdown-item">
                  <a
                    href=" ../../demo1/dist/account/overview.html"
                    class="menu-link px-5"
                  >
                    Profile</a
                  >
                </div>
                <div class="dropdown-item">
                  <a href=" #" class="menu-link px-5">
                    <span class="menu-title">Reservations</span>
                  </a>
                </div>
                <div class="separator my-2"></div>
                <div class="dropdown-item">
                  <a
                    href="../../demo1/dist/account/settings.html"
                    class="menu-link px-5"
                    >Setting</a
                  >
                </div>
                <div class="separator my-2"></div>
                <div class="dropdown-item">
                  <router-link
                    @click="logout"
                    to="/login"
                    class="menu-link px-5"
                    >LogOut</router-link
                  >
                </div>
              </div>
            </div>
          </div>

          <router-link
            to="/Contact"
            class="btn btn-primary px-3 d-none d-lg-flex"
            >Add Property</router-link
          >
        </div>
      </nav>
    </div>
    <!-- Navbar End -->
    <router-view />
    <!-- Footer Start -->
    <div
      class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5 text-start">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h5 class="text-white mb-4">Get In Touch</h5>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-youtube"></i
              ></a>
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="text-white mb-4">Quick Links</h5>
            <a class="btn btn-link text-white-50" href="">About Us</a>
            <a class="btn btn-link text-white-50" href="">Contact Us</a>
            <a class="btn btn-link text-white-50" href="">Our Services</a>
            <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
            <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="text-white mb-4">Photo Gallery</h5>
            <div class="row g-2 pt-2">
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src="img/property-1.jpg"
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src="img/property-2.jpg"
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src="img/property-3.jpg"
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src="img/property-4.jpg"
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src="img/property-5.jpg"
                  alt=""
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded bg-light p-1"
                  src="img/property-6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="text-white mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px">
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a class="border-bottom" href="#">Your Site Name</a>, All
              Right Reserved.

              <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
              Designed By
              <a class="border-bottom" href="https://htmlcodex.com"
                >HTML Codex</a
              >
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    this.$store.state.token = localStorage.getItem("token");
    // axios.defaults.headers.common['Authorization']=[`Bearer ${localStorage.getItem("token")}`]
  },
  methods: {
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
          localStorage.clear();
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
