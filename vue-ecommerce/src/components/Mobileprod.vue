<template>
  <section class="pt-4" id="mobileproduct">
    <div class="col-12" id="mble-products">
      <div class="container">
        <div class="col-12 pb-4" id="mob-head">
          <h3>More in Mobile Products:</h3>
          <button class="btn btn-lg btn-outline-primary" type="button"><a href="#">View All ></a></button>
        </div>
        <div id="carouselMobControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex justify-content-center flex-wrap">
                <div @click="" v-for="(item, index) in slicedProducts" :key="item.id" class="card mx-2" style="width: 17rem;">
                  <img style="width: 100%; height: 200px;" :src="item.images[0]" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" @click="goToPreviousPage" data-bs-target="#carouselMobControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" @click="goToNextPage" data-bs-target="#carouselMobControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';

export default {
  name: 'Mobileprod',
  setup() {
    const list = ref([]);
    const currentPage = ref(0);

    onMounted(async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        list.value = response.data.products;
      } catch (error) {
        console.error(error);
      }
    });

    const slicedProducts = computed(() => {
      const startIndex = currentPage.value * 3;
      const endIndex = startIndex + 4;
      console.log(currentPage.value);
      return list.value.slice(startIndex, endIndex);
    });

    const goToPreviousPage = () => {
      currentPage.value = Math.max(currentPage.value - 1, 0);
    };

    const goToNextPage = () => {
      const maxPage = Math.ceil(list.value.length / 4) - 1;
      currentPage.value = Math.min(currentPage.value + 1, maxPage);
    };

    return {
      slicedProducts,
      goToPreviousPage,
      goToNextPage
    };
  }
};
</script>
