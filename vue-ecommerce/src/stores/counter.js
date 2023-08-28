// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
// store.js
// store.js
import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  // State properties
  state: () => ({
    cart: 0,
  }),

  // Getters
  getters: {
    // increment: (state) => state.count * 2,
  },

  // Mutations
  actions: {
    increment() {
      this.cart++;
    },
  },
});
