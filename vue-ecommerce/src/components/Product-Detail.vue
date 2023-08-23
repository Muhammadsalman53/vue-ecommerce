<script>
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";
export default {
    
    setup() {
        const list = ref([])

        onMounted(() => {
            axios.get("https://dummyjson.com/products")
            .then(res => {
                // console.log(res);
                list.value = res.data.products
                console.log(list.value);

            }).catch(err => {
                console.log(err);
            })
        })

        return {
            list
        }
    }
};
</script>
<template>
    <div v-for="item in list" v-bind:key="item.id" class="container mt-5 card">
        <div class="row">
            <div class="col-md-6 order-lg-0 order-md-0">
                <div class="product-image">
                    <img :src="item.images[0]" alt="Product Image" class="img-fluid card-img">
                </div>
            </div>
            <div class="col-md-6 order-lg-1 pt-lg-3 order-md-1 card-text-center">
                <h1>{{ item.title }}</h1>
                <h2 class="mb-3">{{ item.price }}</h2>
                <p>{{ item.description }}</p>
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
</template>
  
  
  
<style scoped>
/* Add custom styling if needed */
@media (max-width: 767px) {
    .product-image {
        text-align: center;
    }

    .card-text-center {
        text-align: center;

    }
}
</style>
  