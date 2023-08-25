<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "ProductDetail",
    components: {
        Header,
        Footer
    },
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
    <Header />
    <div v-if="product" class="container m-auto mt-5 custom-card-lg text-center">
        <div class="card">
                <div class="product-image">
                    <img :src="product.images[0]" alt="Product Image" class="img-fluid card-img size-img">
                </div>
            
            <div class="card-body">
                <h1>{{ product.title }}</h1>
                <h2 class="mb-3">{{ product.price }}</h2>
                <p>{{ product.description }}</p>
                <div class="input-group mb-3">
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
    <Footer />
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
