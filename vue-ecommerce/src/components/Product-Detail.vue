<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
    name: "ProductDetail",
    setup() {
        const route = useRoute();
        const productId = route.params.id;
        const product = ref(null);
        onMounted(() => {
            axios
                .get(`https://dummyjson.com/products/${productId}`)
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
    <div v-if="product" class="container mt-5 card">
        <div class="row">
            <div class="col-md-6 order-lg-0 order-md-0">
                <div class="product-image">
                    <img :src="product.images[0]" alt="Product Image" class="img-fluid card-img size-img">
                </div>
            </div>
            <div class="col-md-6 order-lg-1 pt-lg-3 order-md-1 card-text-center">
                <h1>{{ product.title }}</h1>
                <h2 class="mb-3">{{ product.price }}</h2>
                <p>{{ product.description }}</p>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" id="quantity" class="form-control" value="1" min="1">
                </div>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">Add to Cart</button>
                    <button class="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>



<style scoped>
/* Add custom styling if needed */
.size-img {
    width: 100%;
    height: 300px;
}

@media (max-width: 767px) {
    .product-image {
        text-align: center;
    }

    .card-text-center {
        text-align: center;
    }
}
</style>
