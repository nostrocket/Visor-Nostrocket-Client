<template>
  <div>
    <div class="max-w-2xl mx-auto lg:max-w-7xl my-6" v-if="product !== null">
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <!-- Image gallery -->
        <div class="flex flex-col-reverse">
          <!-- Image selector -->
          <div
            class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none"
          >
            <div
              class="grid grid-cols-4 gap-6"
              aria-orientation="horizontal"
              role="tablist"
            >
              <button
                id="tabs-2-tab-1"
                class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                aria-controls="tabs-2-panel-1"
                role="tab"
                type="button"
              >
                <span class="sr-only"> Angled view </span>
                <span class="absolute inset-0 rounded-md overflow-hidden">
                  <img
                    :src="product[0].imagelocal"
                    alt=""
                    class="w-full h-full object-center object-cover"
                  />
                  <!-- <img :src="product[0].image" alt="" class="w-full h-full object-center object-cover" /> -->
                </span>
                <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                <span
                  class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                  aria-hidden="true"
                ></span>
              </button>

              <!-- More images... -->
            </div>
          </div>

          <div class="w-full aspect-w-1 aspect-h-1">
            <!-- Tab panel, show/hide based on tab state. -->
            <div
              id="tabs-2-panel-1"
              aria-labelledby="tabs-2-tab-1"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg" alt="Angled front view with bag zipped and handles upright." class="w-full h-full object-center object-cover sm:rounded-lg"> -->

              <img
                :src="product[0].imagelocal"
                alt="Angled front view with bag zipped and handles upright."
                class="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>

            <!-- More images... -->
          </div>
        </div>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1
            class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product[0].title }}
          </h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <!-- <p class="text-3xl text-gray-900 dark:text-white">$140</p> -->

            <span class="text-3xl text-gray-900 dark:text-white">
              {{ product[0].price.eur }} €</span
            >

            <!-- <span class="text-3xl text-gray-900 dark:text-white" v-if="$store.state.currency.currency == 'eur' " > {{ product[0].price.eur }} €</span>

              <span class="text-3xl text-gray-900 dark:text-white" v-if="$store.state.currency.currency == 'usd' "> {{ product[0].price.usd }} $</span>

 -->
          </div>

          <div class="w-full dark:text-white basis-full">
            <span
              v-if="product[0].stock == 'low'"
              class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
              ><span
                class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"
              ></span
              >{{ t("Lastitems") }}</span
            >

            <span
              v-else-if="product[0].stock == 'out'"
              class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
              ><span
                class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"
              ></span
              >{{ t("Nostock") }}</span
            >

            <span
              v-else
              class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
              ><span
                class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"
              ></span
              >{{ t("Instock") }}</span
            >
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="text-base text-gray-700 dark:text-white space-y-6">
              <p>{{ product[0].description }}</p>
            </div>
          </div>

          <div class="mt-6">
            <div class="mt-10 flex sm:flex-col1">
              <button
                class="snipcart-add-item max-w-xs flex-1 bg-colorBtnLight hover:bg-colorBtnHoverLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white sm:w-full"
                :data-item-id="product[0].identity"
                :data-item-price="`{&quot;usd&quot;: ${product[0].price.usd}, &quot;eur&quot;: ${product[0].price.eur}}`"
                :data-item-description="product[0].description"
                :data-item-image="product[0].image"
                :data-item-name="product[0].title"
                :disabled="product[0].stock == 'out'"
              >
                {{ t("Addtocart") }}
              </button>

              <button
                type="button"
                class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <!-- Heroicon name: outline/heart -->
                <svg
                  class="h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </div>

          <section
            aria-labelledby="details-heading"
            class="mt-12"
            v-if="product[0].features != null"
          >
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="border-t divide-y divide-gray-200">
              <div>
                <h3>
                  <!-- Expand/collapse question button -->
                  <button
                    type="button"
                    class="group relative w-full py-6 flex justify-between items-center text-left"
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    <!-- Open: "text-indigo-600", Closed: "text-gray-900 dark:text-white" -->
                    <span
                      class="text-gray-900 dark:text-white text-sm font-medium"
                    >
                      Features
                    </span>
                    <span class="ml-6 flex items-center">
                      <!--
                        Heroicon name: outline/plus-sm

                        Open: "hidden", Closed: "block"
                      -->
                      <svg
                        class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <!--
                        Heroicon name: outline/minus-sm

                        Open: "block", Closed: "hidden"
                      -->
                      <svg
                        class="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pb-6 prose prose-sm" id="disclosure-1">
                  <ul role="list dark:text-white">
                    <li
                      v-for="item in product[0].features"
                      :key="item"
                      class="dark:text-white"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- More sections... -->
            </div>
          </section>
        </div>
      </div>

      <!-- <relevantproducts /> -->
    </div>
  </div>
</template>



<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();

setPageLayout(project.$state.layout);

import { useProducten } from "~/flamewerk/products";

const producten = useProducten();

// console.log(producten)

const products = producten.$state.inventory;

// console.log(products)

const route = useRoute();

const slugroute = route.params.slug;

console.log(route)

// const product = products

const product = products.filter((item) => item.id == slugroute);

// console.log(product[0].description)

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