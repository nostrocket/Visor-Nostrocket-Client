<template>
<div>


  <!-- <ul class="mx-auto w-full text-center">
    <li v-for="todo in todos" :key="todo.text" class="mx-auto text-center">
      <span >{{ todo.text.description }}</span>
    </li>
  </ul> -->

    <div v-if="!todos.length">
        <p class="text-center text-lg underline mt-24 dark:text-white">😢 You have no items favorited, nothing to see here 🛍️</p>
    </div>


    <div
      class="
        m-6
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
        gap-4
        text-black
        my-24
      "
    >


      <div
        v-for="todo in todos" :key="todo.text.id"
        class="border rounded-lg bg-gray-100 hover:shadow-lg inline"
      >
        <nuxt-link :to="`/product/${todo.text.id}`" class="inline">
          <div class="rounded-t-lg bg-white inline">
            <img class=" rounded-t-lg crop mx-auto max-h-48 inline" :src="todo.text.image" />
          </div>
          <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg inline">
            <h4
              class="
                mt-1
                font-semibold
                text-base
                leading-tight
                truncate
                text-gray-700
                w-full
                text-left
                inline
              "
            >
              {{ todo.text.title }}
              
              

              <span v-if="$store.state.currency.currency == 'eur' " > {{ todo.text.price.eur }} €</span>

              <span v-if="$store.state.currency.currency == 'usd' "> {{ todo.text.price.usd }} $</span>




            </h4>
            <p class="ml-6 mt-1 text-sm text-gray-700 inline">{{ todo.text.description }}</p>
                        
          </div>


        </nuxt-link >

<div class="float-right mt-6 mr-6">

          <button
            class="
              snipcart-add-item
              mt-4
              border 
              border-green-200
              block
              hover:shadow-lg
              text-gray-700
              font-semibold
              py-2
              px-4
              rounded
              shadow
            "
            style="background-color:rgb(0, 185, 0);"
            :data-item-id="todo.text.identity"
            :data-item-price=  "`{&quot;usd&quot;: ${todo.text.price.usd}, &quot;eur&quot;: ${todo.text.price.eur}}`"
            :data-item-url="`/api/${todo.text.id}.json`"
            :data-item-description="todo.text.description"
            :data-item-image="todo.text.image"
            :data-item-name="todo.text.title"
            
          >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 fill-current dark:text-white text-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
          </button>         


          <button
            class="
              mt-4
              border 
              border-red-200
              bg-red-400
              hover:shadow-lg
              text-gray-700
              font-semibold
              py-2
              px-4
              rounded
              shadow
              block
            "
            
          >


<svg class="w-6 h-6 fill-current dark:text-white text-white" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


          </button>     

</div>

      </div>
    </div>
  </div>
</template>



<script>

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  }
}
</script>
