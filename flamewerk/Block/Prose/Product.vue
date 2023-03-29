<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark ">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex md:gap-x-8 flex-col md:flex-row">
        <!-- Image gallery -->

              <img :src="product.imagelocal"  class="h-full w-full object-cover object-center sm:rounded-lg max-w-xs mx-auto" />


        <!-- Product info -->
        <div class="mt-2 px-4 sm:pt-6 sm:px-0 lg:mt-0 w-3/4 inline text-left mx-auto">
          <h1 class="text-3xl mb-0 font-bold tracking-tight text-colorTxtLight dark:text-colorTxtDark">{{ product.title }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl mb-0 tracking-tight text-colorTxtLight dark:text-colorTxtDark">{{ product.price.eur  }} €</p>
          </div>



          <div class="w-full dark:text-white basis-full mt-2" v-if="product.type == 'Product'" > 
            
            
            <span v-if="product.stock == 'low'" class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Lastitems") }}</span>

            <span v-else-if="product.stock == 'out'"  class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Nostock") }}</span>

            <span v-else class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Instock") }}</span>

          </div>


          <div class="w-full dark:text-white basis-full mt-2" v-if="product.type == 'Digital'" > 
            

            <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white">

              
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>



              Download</span>

          </div>





          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-colorTxtLight dark:text-colorTxtDark" v-html="product.description" />
          </div>

          <div class="mt-6">


            <div class="sm:flex-col flex">
              <button 
              class="snipcart-add-item flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent  py-3 px-8 text-base font-medium text-white  focus:outline-none sm:w-full
                              bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark
              
              "
            :data-item-id="product.identity"
            :data-item-price="`{&quot;usd&quot;: ${product.price.usd}, &quot;eur&quot;: ${product.price.eur}}`"
            :data-item-url="`/api/${product.id}.json`"
            :data-item-description="product.description"
            :data-item-image="product.image"
            :data-item-name="product.title"
              >{{ t("Addtocart") }}</button>

              <!-- <button type="button" class="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button> -->
            </div>
          </div>
          <section aria-labelledby="details-heading" class="mt-4" v-if="product.features != null ">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t text-colorTxtLight dark:text-colorTxtDark">
              <Disclosure as="div" v-for="detail in hardcodedfeatures.details" :key="detail.name" v-slot="{ open }">
                <h3 class="mt-4">
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-0.5 text-left">
                    <span :class="[open ? 'text-colorBtnLight dark:text-colorBtnDark' : 'text-colorTxtLight dark:text-colorTxtDark', 'text-sm font-medium']">{{ detail.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      <MinusIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                  <ul role="list">
                    <li v-for="item in product.features" :key="item" class="text-colorTxtLight dark:text-colorTxtDark">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'



import { useProducten } from "~/flamewerk/products";





const productid = defineProps({
  productid: {
    type: String
  }
})


const producten = useProducten();

// console.log(producten);

const products = producten.$state.inventory;


const productfilter = products.filter(function(item){
    return item.id == productid.productid;         
})


const product = productfilter[0]

// console.log(product.title)


const hardcodedfeatures = {

  details: [
    {
      name: 'Features',
    },
    // More sections...
  ],
}





const { t } = useI18n({ useScope: "local" });
// console.log(products);
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