<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-colorBgLight dark:bg-colorBgDark ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:flex-col sm:align-center">
      <h1 class="text-3xl lg:text-5xl font-extrabold text-colorTxtLight dark:text-colorTxtDark  sm:text-center">💳 <span v-if="plantype">Monthly </span> <span v-if="!plantype">Yearly </span>Pricing Plans </h1>
      <p class="mt-5 text-xl text-colorTxtLight dark:text-colorTxtDark  sm:text-center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
      <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
        <button @click="plantype = true" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-colorTxtLight  whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Monthly billing</button>
        <button @click="plantype = false" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Yearly billing</button>
      </div>
    </div>


    <!-- MONTHLY PRICING -->


    <div v-if="plantype" class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-colorTxtLight dark:text-colorTxtDark ">Hobby</h2>
          <p class="mt-4 text-sm text-colorTxtLight dark:text-colorTxtDark ">All the basics for starting a new business</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-colorTxtLight dark:text-colorTxtDark ">$0</span>
            <span class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark ">/mo</span>
          </p>

        
        <button class="snipcart-add-item mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            data-item-name="My Hobby Subscription"
            data-item-id="1"
            data-item-description="This is the Monthly Hobby Tier / 14 Day Trial"
            data-item-url="/"
            data-item-price="0.00"
            data-item-payment-interval="Month"
            data-item-payment-interval-count="1"
            data-item-payment-trial="14">
            Buy Hobby
        </button>
        
        
        
        
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-medium text-colorTxtLight dark:text-colorTxtDark  tracking-wide uppercase">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Potenti felis, in cras at at ligula nunc.</span>
            </li>

          </ul>
        </div>
      </div>


      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-colorTxtLight dark:text-colorTxtDark ">Startup</h2>
          <p class="mt-4 text-sm text-colorTxtLight dark:text-colorTxtDark ">All the basics for starting a new business</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-colorTxtLight dark:text-colorTxtDark ">$32</span>
            <span class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark ">/mo</span>
          </p>

        <button class="snipcart-add-item mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            data-item-name="My Startup Subscription"
            data-item-id="3"
            data-item-description="This is the Monthly Startup Tier / 14 Day Trial"
            data-item-url="/"
            data-item-price="32.00"
            data-item-payment-interval="Month"
            data-item-payment-interval-count="1"
            data-item-payment-trial="14">
            Buy Startup
        </button>

        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-medium text-colorTxtLight dark:text-colorTxtDark  tracking-wide uppercase">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Potenti felis, in cras at at ligula nunc. </span>
            </li>

            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Orci neque eget pellentesque.</span>
            </li>


          </ul>
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-colorTxtLight dark:text-colorTxtDark ">Enterprise</h2>
          <p class="mt-4 text-sm text-colorTxtLight dark:text-colorTxtDark ">All the basics for starting a new business</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-colorTxtLight dark:text-colorTxtDark ">$48</span>
            <span class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark ">/mo</span>
          </p>
        <button class="snipcart-add-item mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            data-item-name="My Enterprise Subscription"
            data-item-id="4"
            data-item-description="This is the Monthly Enterprise Tier / 14 Day Trial"
            data-item-url="/"
            data-item-price="48.00"
            data-item-payment-interval="Month"
            data-item-payment-interval-count="1"
            data-item-payment-trial="14">
            Buy Enterprise
        </button>
                </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-medium text-colorTxtLight dark:text-colorTxtDark  tracking-wide uppercase">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Potenti felis, in cras at at ligula nunc. </span>
            </li>

            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Orci neque eget pellentesque.</span>
            </li>

            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Donec mauris sit in eu tincidunt etiam.</span>
            </li>


          </ul>
        </div>
      </div>
    </div>




    <!-- YEARLY PRICING -->





    <div v-if="!plantype" class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-colorTxtLight dark:text-colorTxtDark ">Hobby</h2>
          <p class="mt-4 text-sm text-colorTxtLight dark:text-colorTxtDark ">All the basics for starting a new business</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-colorTxtLight dark:text-colorTxtDark ">$0</span>
            <span class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark ">/year</span>
          </p>

        
        <button class="snipcart-add-item mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            data-item-name="My Hobby Subscription"
            data-item-id="5"
            data-item-description="This is the Yearly Hobby Tier / 14 Day Trial"
            data-item-url="/"
            data-item-price="0.00"
            data-item-payment-interval="Year"
            data-item-payment-interval-count="1"
            data-item-payment-trial="14">
            Buy Hobby
        </button>
        
        
        
        
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-medium text-colorTxtLight dark:text-colorTxtDark  tracking-wide uppercase">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Potenti felis, in cras at at ligula nunc.</span>
            </li>

          </ul>
        </div>
      </div>



      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-colorTxtLight dark:text-colorTxtDark ">Startup</h2>
          <p class="mt-4 text-sm text-colorTxtLight dark:text-colorTxtDark ">All the basics for starting a new business</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-colorTxtLight dark:text-colorTxtDark ">$390</span>
            <span class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark ">/year</span>
          </p>

        <button class="snipcart-add-item mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            data-item-name="My Startup Subscription"
            data-item-id="7"
            data-item-description="This is the Yearly Startup Tier / 14 Day Trial"
            data-item-url="/"
            data-item-price="390.00"
            data-item-payment-interval="Year"
            data-item-payment-interval-count="1"
            data-item-payment-trial="14">
            Buy Startup
        </button>


        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-medium text-colorTxtLight dark:text-colorTxtDark  tracking-wide uppercase">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Potenti felis, in cras at at ligula nunc. </span>
            </li>

            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Orci neque eget pellentesque.</span>
            </li>


          </ul>
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-colorTxtLight dark:text-colorTxtDark ">Enterprise</h2>
          <p class="mt-4 text-sm text-colorTxtLight dark:text-colorTxtDark ">All the basics for starting a new business</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-colorTxtLight dark:text-colorTxtDark ">$680</span>
            <span class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark ">/year</span>
          </p>



        <button class="snipcart-add-item mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            data-item-name="My Enterprise Subscription"
            data-item-id="8"
            data-item-description="This is the Yearly Enterprise Tier / 14 Day Trial"
            data-item-url="/"
            data-item-price="680.00"
            data-item-payment-interval="Year"
            data-item-payment-interval-count="1"
            data-item-payment-trial="14">
            Buy Enterprise
        </button>


        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-medium text-colorTxtLight dark:text-colorTxtDark  tracking-wide uppercase">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Potenti felis, in cras at at ligula nunc. </span>
            </li>

            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Orci neque eget pellentesque.</span>
            </li>

            <li class="flex space-x-3">
              <!-- Heroicon name: solid/check -->
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-colorTxtLight dark:text-colorTxtDark ">Donec mauris sit in eu tincidunt etiam.</span>
            </li>


          </ul>
        </div>
      </div>
    </div>







  </div>
</div>
</template>

<script>
export default {
  layout: 'ecommerce',
  data(){
    return {
      plantype: true
    }
  },
}
</script>
