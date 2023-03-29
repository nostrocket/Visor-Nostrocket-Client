<template>
  <div>
    <div
      class="max-w-2xl mx-auto pb-16 px-4 sm:pt-6 sm:px-6 lg:max-w-7xl lg:px-8"
    >
    <div class="sm:flex sm:flex-col sm:align-center">
      <h1 class="text-3xl sm:text-5xl font-extrabold text-colorTxtLight dark:text-colorTxtDark  sm:text-center">{{props.icon}} {{props.title}} </h1>
      <p class="mt-5 text-xl text-colorTxtLight dark:text-colorTxtDark  sm:text-center">{{props.subtitle}}</p>
    </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="p in maxfilter" :key="p.id" class="group relative">
          <div>
          <nuxt-link :to="`/product/${p.id}`">
            <div
              class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
            >
              <img
                :src="p.imagelocal"
                class="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-lg font-extrabold text-gray-700 dark:text-white">
                  {{ p.title }}
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-white line-clamp-2  h-10">
                  {{ p.description }}
                </p>
              </div>

            </div>
          </nuxt-link>

          <button
          
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
               top-0 right-0
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


        <div class="full-w flex mt-2 ">
        
        <div class="basis-full flex flex-col ">
              
              <div class="text-lg font-medium text-gray-900 dark:text-white w-full basis-full">
                <p class="float-left dark:text-white">
                  {{ p.price.eur }} €</p
                >

                <!-- <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'eur' " > {{ p.price.eur }} €</span>

              <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'usd' "> {{ p.price.usd }} $</span> -->
              </div>




          <div class="w-full dark:text-white basis-full" v-if="p.type == 'Product'" > 
            
            
            <span v-if="p.stock == 'low'" class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Lastitems") }}</span>

            <span v-else-if="p.stock == 'out'"  class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Nostock") }}</span>

            <span v-else class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Instock") }}</span>

          </div>


          <div class="w-full dark:text-white basis-full" v-if="p.type == 'Digital'" > 
            

            <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white">

              
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>



              Download</span>

          </div>


        </div>
        

        <div>
        
        
          <button
            class="mt-2 snipcart-add-item hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow max-h-10
            
                            bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark
            "
            :data-item-id="p.identity"
            :data-item-price="`{&quot;usd&quot;: ${p.price.usd}, &quot;eur&quot;: ${p.price.eur}}`"
            :data-item-url="`/api/${p.id}.json`"
            :data-item-description="p.description"
            :data-item-image="p.image"
            :data-item-name="p.title"
            :disabled="p.stock == 'out'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 fill-current dark:text-white text-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
          </button>
        </div>









        </div>

</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProducten } from "~/flamewerk/products";

const producten = useProducten();

// console.log(producten);

const products = producten.$state.inventory;

// console.log(products);

// Filter Props
const props = defineProps({
  icon: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
type: {
    type: String
  },
  category: {
    type: String
  },
  max: {
    type: Number
  },


})

//Type Product Filtering
// const typefilter = products.filter(product => product.type == "Product");
const typefilter = products.filter(product => product.type == props.type);


//Category Product Filtering
// const catfilter = typefilter.filter(product => product.category == "New");
const catfilter = typefilter.filter(product => product.category == props.category);


//Range Products
// const maxfilter = products.filter(product => product.id <= 4);
// const maxfilter = catfilter.filter(product => product.id >= 1 && product.id <= 6);


//Max Number Filter
const maxfilter = catfilter.filter((product, index) => index < props.max);
console.log(maxfilter);


const { t } = useI18n({ useScope: "local" });

</script>

<i18n lang="json">
{
  "da": {
    "Addtocart": "Tilføj til kurv",
    "Nostock": "Udsolgt",
    "Lastitems": "Få på lager",
    "Instock": "På lager",
  },
  "de": {
    "Addtocart": "In den Warenkorb legen",
    "Nostock": "Ausverkauft",
    "Lastitems": "Letzte Stücke",
    "Instock": "Auf Lager",
  },
  "en": {
    "Addtocart": "Add to cart",
    "Nostock": "Out of stock",
    "Lastitems": "Last items",
    "Instock": "In stock",
  },
  "es": {
    "Addtocart": "Añadir a la cesta",
    "Nostock": "Agotado",
    "Lastitems": "Ultimas piezas",
    "Instock": "En stock",
  },
  "fr": {
    "Addtocart": "Ajouter au panier",
    "Nostock": "Rupture de stock",
    "Lastitems": "Dernières pièces",
    "Instock": "Disponible",
  },
  "nl": {
    "Addtocart": "Voeg toe aan winkelkar",
    "Nostock": "Uitverkocht",
    "Lastitems": "Laatste stuks",
    "Instock": "In voorraad",
  }
}
</i18n>