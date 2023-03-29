<template>
  <div class="relative">
    <!-- <button
    href="#"
      class="text-base font-medium text-gray-900 hover:text-gray-900 dark:text-white"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
    {{this.currentcurrency}}
           <svg class="inline" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" /></svg>

    </button>
    <transition name="dropdown-fade">
      <ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" class="absolute normal-case z-30 font-normal xs:left-0 md:right-0 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700  shadow overflow-hidden rounded w-24 border mt-2 py-1 lg:z-20">
        <li>
          <button
            class="flex items-center px-3 py-3 hover:bg-gray-200 dark:hover:bg-gray-900 w-full"
            @click="switchCurrency('eur')"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Euro €</span>
          </button>
        </li>
        <li>
          <button
            class="flex items-center px-3 py-3 hover:bg-gray-200 dark:hover:bg-gray-900 w-full"
            @click="switchCurrency('usd')"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Dollar $</span>
          </button>
        </li>
      </ul>
    </transition> -->
  </div>
</template>

<script>
// import { mixin as clickaway } from 'vue-clickaway'

export default {
  // mixins: [ clickaway ],
  // data() {
  //   return {
  //     isVisible: false,
  //     focusedIndex: 0,
  //     currentcurrency: 'Euro €'
  //   }
  // },
  // computed: {
  //   todos () {
  //     return this.$store.state.currency.list
  //   }
  // },
  // methods: {
  //   toggleVisibility() {
  //     this.isVisible = !this.isVisible
  //   },
  //   hideDropdown() {
  //     this.isVisible = false
  //     this.focusedIndex = 0
  //   },
  //   startArrowKeys() {
  //     if (this.isVisible) {
  //       // this.$refs.account.focus()
  //       this.$refs.dropdown.children[0].children[0].focus()
  //     }
  //   },
  //   focusPrevious(isArrowKey) {
  //     this.focusedIndex = this.focusedIndex - 1
  //     if (isArrowKey) {
  //       this.focusItem()
  //     }
  //   },
  //   focusNext(isArrowKey) {
  //     this.focusedIndex = this.focusedIndex + 1
  //     if (isArrowKey) {
  //       this.focusItem()
  //     }
  //   },
  //   focusItem() {
  //     this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
  //   },
  //   setLocale(currency) {
  //     this.$i18n.locale = locale
  //     this.$router.push({
  //       params: { lang: locale }
  //     })
  //     this.hideDropdown()
  //   },
  //   switchCurrency (currency) {
  //     Snipcart.api.session.setCurrency(currency);
  //     if (currency == "eur"){
  //       this.currentcurrency = "Euro €"

  //       // SETS GLOBAL CURRENCY VALUE
  //       this.$store.commit('currency/add', "eur")

  //     }
  //     if (currency == "usd"){
  //       this.currentcurrency = "Dollar $"

  //       this.$store.commit('currency/add', "usd")

  //     }
  //   },

  // }
}
</script>

<style scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
