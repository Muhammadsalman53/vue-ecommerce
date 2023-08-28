<script>
import { ref, onMounted } from "vue";
import axiosInstance from "../utils/axios";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "ProductDetail",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const productId = route.params.id;
    const product = ref(null);
    onMounted(() => {
      axiosInstance
        .get(`/products/${productId}`)
        .then((res) => {
          product.value = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    });

    return {
      product,
    };
  },
};
</script>
<template>
  <Header />
  <div v-if="product" class="container m-auto mt-5 custom-card-lg text-center">
    <div class="card shadow">
      <div class="product-image">
        <img
          :src="product.images[0]"
          alt="Product Image"
          class="img-fluid card-img size-img"
        />
        <div class="shipping-text over-btn">
          <div class="social-icons">
            <i class="bi bi-truck"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-snapchat"></i>
          </div>
        </div>
      </div>

      <div class="card-body" id="product-descript">
        <h1>{{ product.title }}</h1>
        <h2 class="mb-3">${{ product.price }}</h2>
        <p class="control-width">{{ product.description }}</p>
        <div class="input-group mb-3" id="product-quantity">
          <label for="quantity" class="form-label">Quantity</label>
          <input
            type="number"
            id="quantity"
            class="form-control"
            value="1"
            min="1"
          />
        </div>
        <div class="d-flex justify-content-around">
          <button class="btn btn-primary">Add to Cart</button>
          <button class="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
  <Footer />
</template>

<style scoped>
/* Add custom styling if needed */
.input-group{
    width: 50%!important;
    margin: auto!important;;

}
.control-width{
    width: 70%;
    margin: auto;
}
.product-image {
  position: relative;
}
.social-icons i {
  text-align: end;
  display: block;
  color: #002f34;
  font-size: 30px;
  padding-right: 20px;
}
.over-btn {
  position: absolute;
  z-index: 9;
  margin-top: 4%;
  top: 2%;
  right: 5%;
}

.size-img {
  padding-top: 20px;
  width: 70%;
  height: 350px;
}
@media (min-width: 992px) {
  /* Large screens and up */
  .custom-card-lg {
    width: 50%;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  /* Medium screens */
  .custom-card-md {
    width: 75%;
  }
}
</style>
