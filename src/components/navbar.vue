<script>
   export default {
  // reactive state
  data() {
    return {
      showNav: false
    }
  },

  // functions that mutate state and trigger updates
  methods: {
    toggle() {
      this.showNav = !this.showNav
      console.log(this.showNav)
    }
  },

  // lifecycle hooks
  mounted() {
    console.log(`${this.showNav}.`)
  }
}
</script>
<template>
    <!-- hi dutchie do this work pls -->
    <!-- kuy dutch 123 -->
    <div class="fixed top-0 z-50 w-screen">
      <div class="flex py-5 px-4">
        <div class="flex py-3 flex-1">Taxgether</div>
        <div class="hidden md:flex py-3 flex-[2_2_0%] justify-center">
            <div class="pr-5">Products</div>
            <div class="pr-5">Developer</div>
            <div class="pr-5">Use cases</div>
            <div class="pr-5">Company</div>
            <div>Pricing</div>
        </div>
        <div class="hidden md:flex flex-1 justify-end">
            <div class="py-3 px-4">Log in</div>
            <div class="py-3 bg-black text-white px-4 rounded-md">Sign Up</div>
        </div>
        <div class="flex items-center cursor-default" @click="toggle">
            <span class="material-symbols-outlined flex md:hidden text-4xl">
                menu
            </span>
        </div>
    </div>
    <div v-if="showNav" class="flex md:hidden flex-col content-center">
        <div class="flex justify-center py-1">Products</div>
        <div class="flex justify-center py-1">Developer</div>
        <div class="flex justify-center py-1">Use cases</div>
        <div class="flex justify-center py-1">Company</div>
        <div class="flex justify-center pt-1 pb-2">Pricing</div>
    </div>
    </div>
    
</template>