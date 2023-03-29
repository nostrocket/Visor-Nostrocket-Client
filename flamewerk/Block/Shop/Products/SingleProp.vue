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





const props = defineProps({
  ProductIdentifier: {
    type: Number,
    default: '3'
  }
})





// console.log(props.ProductIdentifier);

const producten = useProducten();

// console.log(producten);

const products = producten.$state.inventory;


const productfilter = products.filter(function(item){
    return item.id == props.ProductIdentifier;         
})


const product = productfilter[0]

// console.log(product.title)






const { t } = useI18n({ useScope: "local" });
// console.log(products);
</script>
<i18n lang="json">
{
  "da": {
    "Addtocart": "Tilføj til kurv",
  },
  "de": {
    "Addtocart": "In den Warenkorb legen",
  },
  "en": {
    "Addtocart": "Add to cart",
  },
  "es": {
    "Addtocart": "Añadir a la cesta",
  },
  "fr": {
    "Addtocart": "Ajouter au panier",
  },
  "nl": {
    "Addtocart": "Voeg toe aan winkelkar",
  }
}
</i18n>