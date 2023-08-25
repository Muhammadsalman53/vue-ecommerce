<template>
  <div>
    <Header />
    <Banner />
    <Mobileprod />
    <Bikes />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Bikes from '../components/Bikes.vue';
import Mobileprod from '../components/Mobileprod.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Mobileprod,
    Bikes,
    Footer
  },
};
</script>

