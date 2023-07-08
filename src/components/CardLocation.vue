<template>
    <div v-for="(item,index) in location" :key="index" class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class="property-item rounded overflow-hidden">
      <div class="position-relative overflow-hidden">
        <a href=""><img class="img-fluid" src="img/property-1.jpg" alt="" /></a>
        <div
                    class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"
                  >
                    {{ item.rate_overall }}
                  </div>
        <div
          class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3"
        >
          Appartment
        </div>
      </div>
      <div class="p-4 pb-0 text-start">
        <h5 class="text-primary mb-3">$12,345</h5>
        <router-link to="/SingleLocation" class="d-block h5 mb-2" @click="get_id(item.id)">{{ item.name }}</router-link>
        <p>
          <i class="fa fa-map-marker-alt text-primary me-2"></i>{{ item.address }},{{ item.area_name }}, {{item.city_name}}
        </p>
      </div>
      <div class="d-flex border-top">
        <small class="flex-fill text-center border-end py-2"
          ><i class="fa fa-ruler-combined text-primary me-2"></i>{{ item.size }}
          m²</small
        >
        <small class="flex-fill text-center border-end py-2"
          ><i class="fa fa-bed text-primary me-2"></i>3 Bed</small
        >
        <small class="flex-fill text-center py-2"
          ><i class="fa fa-bath text-primary me-2"></i>2 Bath</small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['location'],
    name:'CardLocation',
    methods:{
        get_id(id){
            localStorage.setItem('get_id',id);
            this.$store.state.id=id;
        }
    }
};
</script>

<style></style>
