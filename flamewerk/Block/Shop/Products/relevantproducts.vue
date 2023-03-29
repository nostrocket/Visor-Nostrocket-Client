<template>
<div>



      <section aria-labelledby="related-heading" class="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
        <h2 id="related-heading" class="text-xl font-bold text-gray-900 dark:text-white">Customers also bought</h2>

        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">


          
          <div v-for="p in products.productenlijst" :key="p.id" class="relative">



                         <button
          @click="addTodo(p)"
            class="
              mt-4
              bg-pink-200
              hover:shadow-lg
              text-pink-700
              font-semibold
              py-2
              px-4
              rounded
              shadow
              absolute
               top-0 
               right-0
              z-10
            "
            
          >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 fill-current dark:text-red text-red"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
          </button>  



            <nuxt-link :to="`/product/${p.id}`">
            <div class="relative">
              <div class="relative w-full h-72 rounded-lg overflow-hidden">
                <img :src="p.image" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="w-full h-full object-center object-cover">
              
              

              
              
              
              </div>
              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ p.title }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ p.description }}</p>
              </div>
              <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                <p class="relative text-lg font-semibold text-white">
                  
                  
                  
                  

              <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'eur' " > {{ p.price.eur }} €</span>

              <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'usd' "> {{ p.price.usd }} $</span>
                  
                  
                  
                  
                  
                  </p>
              </div>
            </div>

            </nuxt-link>

            <div class="mt-6">
              <button class="snipcart-add-item relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
            :data-item-id="p.identity"
            :data-item-price=  "`{&quot;usd&quot;: ${p.price.usd}, &quot;eur&quot;: ${p.price.eur}}`"
            :data-item-url="`/api/${p.id}.json`"
            :data-item-description="p.description"
            :data-item-image="p.image"
            :data-item-name="p.title"
              
              >Add to cart</button>



   


              
            </div>









          </div>




          <!-- More products... -->
        </div>
      </section>











  
  </div>
</template>



<script>

export default {
  layout: 'ecommerce',
  data(){
    return {
      products: []
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (currency) {
      this.$store.commit('todos/add', currency)
    },

  },
  created: async function () {
    const res = await fetch("https://shop.a-os.com/api/producten.json" )
    this.products = await res.json()
    // console.log(this.products)
  },
}
</script>
