<template>
  <section class="mb-2">
    <div class="container">
      <div class="row bg-info py-2 text-light">
        <div class="col-lg-3 col-6 d-flex align-items-center justify-content-center">
          <div>
            <i class="fas fa-place-of-worship"></i>
            <h3 class="text-light">
              {{ location.name }}
            </h3>
            <!-- <div class="star-rating">
              <span class="fa fa-star-o" data-rating="1"></span>
              <span class="fa fa-star-o" data-rating="2"></span>
              <span class="fa fa-star-o" data-rating="3"></span>
              <span class="fa fa-star-o" data-rating="4"></span>
              <span class="fa fa-star-o" data-rating="5"></span>
              <input
                type="hidden"
                name="whatever1"
                class="rating-value"
                value="2.56"
              />
            </div> -->
          </div>
        </div>
        <div class="col-lg-3 col-6 d-flex align-items-center justify-content-center">
          <div>
            <i class="fa fa-map-marker fs-3" aria-hidden="true"></i>
            <p>{{ location.address }},{{ location.area_name }}, {{location.city_name}}</p>
          </div>
        </div>
        <div class="col-lg-3 col-6 d-flex align-items-center justify-content-center">
          <div>
            <i class="fa fa-phone fs-3" aria-hidden="true"></i>
            <p>+ 01 234 567 89</p>
          </div>
        </div>
        <div class="col-lg-3 col-6 d-flex align-items-center justify-content-center">
          <div>
            <i class="fa fa-envelope fs-3" aria-hidden="true"></i>
            <p>contact@mdbootstrap.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="position-relative overflow-hidden prouduct-lg-img position-relative">
            <img
              id="imageBox"
              src="img/property-1.jpg"
              width="100%"
              height="100%"
              alt=""
            />
            <div
                    class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"
                  >
                    {{ location.rate_overall }}
                  </div>
          </div>
          <div class="prouduct-sm-img d-flex">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="img/property-1.jpg" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img
                    src="alexandre-debieve-FO7JIlwjOtU-unsplash.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="prouduct-sm-img-item">
                  <img src="anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
            class="w-100"
            height="390"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div>
            <a href="#" class="w-100 btn btn-outline-info my-4"
              ><span class="fa fa-ticket">&nbsp;احجز الان</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      
      <div class="product-details-info">
        <div class="single-block">
          <div class="row">
            <div class="col-md-8">
              <div class="text-start">
                <h4>Details</h4>
                <p>{{ location.description_location }}</p>
              </div>
              <!-- <div class="col-12">
                <div class="text-start">
                  <h4>Features</h4>
                  <ul class="">
                    <li>Capture 4K30 Video and 12MP Photos</li>
                    <li>Game-Style Controller with Touchscreen</li>
                    <li>View Live Camera Feed</li>
                    <li>Full Control of HERO6 Black</li>
                    <li>Use App for Dedicated Camera Operation</li>
                  </ul>
                </div>
              </div> -->
            </div>
            <div class="col-md-4">
              <!-- <div class="text-start">
                <h4>Specifications</h4>
                <ul class="normal-list">
                  <li><span>Weight:</span> 35.5oz (1006g)</li>
                  <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                  <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                  <li><span>Operating Frequency:</span> 2.4GHz</li>
                  <li><span>Manufacturer:</span> GoPro, USA</li>
                </ul>
              </div> -->
              <div class="text-start">
                <h4>Services :</h4>
                <ul class="normal-list">
                  <li v-for="item in location.services" :key="item.id">
                    {{ item.name }}
                    <!-- <li>
                    {{ location.services }}
                  </li> -->
                  </li>
                  <!-- <span v-for="item in location.services" :key="item.id">{{ item }}</span></li> -->
                </ul>
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

export default {
  mounted() {},
  created() {
    this.$store.state.id = localStorage.getItem("get_id");
    this.get_location();
  },
  data() {
    return {
      location: [],
    };
  },
  methods: {
    get_location() {
      axios
        .get(`http://127.0.0.1:8000/api/locations/${this.$store.state.id}`)
        .then((response) => {
          // console.log(response)
          this.location = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
// function image() { // var imageBox = document.getElementById("imageBox"); //
var imgItem = document.querySelectorAll(".prouduct-sm-img-item"); //
imgItem.forEach(function (e) { // if (e.children[0].src == imageBox.src) { //
e.style.opacity = 1; // } // e.addEventListener("click", function () { //
imgItem.forEach((e) => (e.style.opacity = 0.6)); // imageBox.src =
e.children[0].src; // e.style.opacity = 1; // }); // }); // } // image(); //
star rating // var $star_rating = $(".star-rating .fa"); // var SetRatingStar =
function () { // return $star_rating.each(function () { // if ( //
parseInt($star_rating.siblings("input.rating-value").val()) >= //
parseInt($(this).data("rating")) // ) { // return
$(this).removeClass("fa-star-o").addClass("fa-star"); // } else { // return
$(this).removeClass("fa-star").addClass("fa-star-o"); // } // }); // }; //
$star_rating.on("click", function () { //
$star_rating.siblings("input.rating-value").val($(this).data("rating")); //
return SetRatingStar(); // }); // SetRatingStar(); // $(document).ready(function
() { // });

<style></style>
