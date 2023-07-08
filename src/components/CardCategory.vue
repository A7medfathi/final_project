<template>
    <div v-for="(item,index) in data" :key="index" class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
    <a class="cat-item d-block bg-light text-center rounded p-3" href="">
      <div class="rounded p-4">
        <div class="icon mb-3">
          <img class="img-fluid" src="img/icon-apartment.png" alt="Icon" />
        </div>
        <h6>Apartment</h6>
        <span>123 Properties</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
data(){
    return{
        data:[1,1,1,1,1,1,1,1],
    }
}
}
</script>

<style>

</style>