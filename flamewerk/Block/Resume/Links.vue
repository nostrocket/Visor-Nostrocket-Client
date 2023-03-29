<template>
              <!-- Contact Information ------------------------------------------------------------------------------------->
          <section class="pb-4 mt-4 first:mt-0">
            <!-- To keep in the same column -------------------------------------------------------------------------->
            <div class="break-inside-avoid">
              <section class="pb-2 mb-2 border-b-2 break-inside-avoid">
                <ul class="list-inside pr-7">
                  <li
                    class="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:"
                  >
                    <a :href="links.portfoliolink" target="_blank" class="group">
                      <span
                        class="mr-1 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Portfolio:
                      </span>
                      {{links.portfolio}}
                      <span
                        class="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                  >
                    <a :href="links.githublink" target="_blank" class="group">
                      <span
                        class="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Github:
                      </span>
                      {{links.github}}
                      <span
                        class="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>

                  <li
                    class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                  >
                    <a :href="links.emaillink" target="_blank" class="group">
                      <span
                        class="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Email:
                      </span>
                      {{links.email}}
                      <span
                        class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                  >
                    <a :href="links.phonenumber" target="_blank">
                      <span
                        class="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Phone:
                      </span>
                      {{links.phonenumber}}
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
</template>
<script setup>

import { useResume } from "~/flamewerk/page";

const resume = useResume();

const links = resume.$state.links;


</script>