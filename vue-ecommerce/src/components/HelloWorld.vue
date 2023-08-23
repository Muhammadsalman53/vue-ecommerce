<template>
  <div class="container p-5">
    <div class="text-dark my-3">
      <h5>Mobile in Pakistan</h5>
    </div>
    <div><hr /></div>
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="h5">Category</div>
        <div class="pl-5">
          <div class="m-3" v-for="category in categories" :key="category">
            <a
              @click="fetchProducts(category)"
              href="#"
              style="text-decoration: none"
              :class="{
                active: selectedCategory === category,
                unselected: selectedCategory !== category,
              }"
              >{{ category }}</a
            >
          </div>
        </div>
        <hr />
      </div>
      <div class="col-sm-12 col-md-8 col-lg-8">
        <div class="card mb-3" v-for="item in list" :key="item.id">
          <div class="row g-0">
            <div class="col-md-4">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                    v-for="(image, index) in item.images"
                    :key="index"
                  >
                    <img
                      :src="image"
                      class="d-block w-100"
                      alt="Product Image"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.brand }}</h5>
                <p class="card-text">${{ item.price }}</p>
                <p class="card-text">
                  {{ item.description }}
                </p>

                <p class="card-text">
                  <small class="text-body-white badge text-bg-success"
                    >Stock avaliable {{ item.stock }}</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  name: "HelloWorld",

  setup() {
    const categories = ref([]);
    const list = ref([]);
    const selectedCategory = ref(null);
    function fetchProducts(category) {
      axios
        .get(`https://dummyjson.com/products?category=${category}`)
        .then((response) => {
          // Update the list with the fetched products
          list.value = response.data.products;
          console.log(list.value); // Access the value of the reactive property
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
      selectedCategory.value = category;
    }

    onMounted(() => {
      // URL of the API endpoint you want to make a GET request to
      const apiUrl = "https://dummyjson.com/products/categories";

      // Making the GET request using Axios
      axios
        .get(apiUrl)
        .then((response) => {
          // Handle the successful response here
          categories.value = response.data;
          console.log("Response data:", response.data);
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error("Error:", error);
        });
    });

    return {
      list,
      categories,
      fetchProducts,
      selectedCategory,
    };
  },
};
</script>
<style>
.active {
  color: blue; /* Customize the active category color */
}

.unselected {
  color: black; /* Customize the unselected category color */
}
</style>
