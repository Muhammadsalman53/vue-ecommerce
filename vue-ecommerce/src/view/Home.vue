<script>
import Banner from '../components/Banner.vue';
import Bikes from '../components/Bikes.vue';
import Mobileprod from '../components/Mobileprod.vue';
export default{
    name: 'Home',
    components: { 
        Banner,
        Mobileprod,
        Bikes,  
    }
}
</script>

<template>
    
    <Banner />
    <Mobileprod />
    <Bikes />

</template>