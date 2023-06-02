<template>
        <div
      class="

        pb-12
        px-4
        sm:px-6
        lg:pb-12
        lg:px-8
        

        dark:text-white
        max-w-4xl mx-auto
      "
    >
    <div class="text-lg max-w-prose dark:prose-invert mx-auto lg:mt-12">
      <h1>
        <span class="block text-lg text-center text-gray-900 dark:text-sky-400 font-semibold tracking-wide uppercase mt-2">{{ t('demotitle') }} </span>
      </h1>
    </div>

      <div
        class="
          relative
          mx-auto
          divide-y-2 divide-gray-200
          lg:max-w-7xl
          mt-6
        "
      >
        <div
          class="
            grid
            gap-16
            lg:grid-cols-4
            grid-cols-2
            lg:gap-x-5 lg:gap-y-12
            lg:ml-8
          "
        >
          <div class="mx-auto">
            <NuxtLink
              :to="localePath('/site')">
            <div class="flex-shrink-0">
              <div class="block">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-blue-500
                    text-white text-4xl
                    mx-auto
                    mb-2
                  "
                >
                  🖥️
                </div>
              </div>
              <p class="block text-2xl text-center">{{ t('website') }}</p>
            </div>
            </NuxtLink>
          </div>

          <div class="mx-auto">
                        <NuxtLink
              :to="localePath('/login')">
              <div class="flex-shrink-0">
                <div class="block">




                <div
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-yellow-500
                    text-white text-4xl
                    mx-auto
                    mb-2
                  "
                >
                  <!-- Heroicon name: globe-alt -->
                  📱
                </div>
              </div>
            </div>
            <p class="block text-2xl text-center">{{ t('application') }}</p>
            <!-- <div class="mt-4">
              <dt
                class="
                  text-lg
                  leading-6
                  font-medium
                  text-gray-900
                  dark:text-white
                "
              >
                JAM Stack DevOps
              </dt>
              <dd class="mt-2 text-base text-gray-500 dark:text-white pt-4">
                Build on top of NodeJS and utilizing a static JAM stack DevOps made up of Nuxt, Tailwind and Github merged with a flexible stack for fast MVP deployment.  
              
                <br><br> <b>Starting Price:</b> 1000 €
              </dd>
            </div> -->
                        </NuxtLink>
          </div>

          <div class="mx-auto">
                        <NuxtLink
              :to="localePath('/shop')">
            <div class="flex-shrink-0">
            <div class="block">
              
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-purple-500
                    text-white text-4xl
                    mx-auto
                    mb-2
                  "
                >
                  <!-- Heroicon name: scale -->
                  🛍️
                </div>
              </div>
            </div>
            <p class="block text-2xl text-center">{{ t('shop') }}</p>
            <!-- <div class="mt-4">
              <dt
                class="
                  text-lg
                  leading-6
                  font-medium
                  text-gray-900
                  dark:text-white
                "
              >
                Centralised Distribution
              </dt>
              <dd class="mt-2 text-base text-gray-500 dark:text-white pt-4">
                Automated social media distribution fueled by Artificial Intelligent content creation and monitored with GDPR complacent user analytics.
              
                <br><br> <b>Starting Price:</b> 750 €
              </dd>
            </div> -->
                        </NuxtLink>
          </div>

          <div class="mx-auto">
                        <NuxtLink
              :to="localePath('/client')">
            <div class="flex-shrink-0">
            <div class="block">
              
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-green-500
                    text-white text-4xl
                    mx-auto
                    mb-2
                  "
                >
                  <!-- Heroicon name: scale -->
                  🥂
                </div>
              </div>
            </div>
            <p class="block text-2xl text-center">Client</p>
            <!-- <div class="mt-4">
              <dt
                class="
                  text-lg
                  leading-6
                  font-medium
                  text-gray-900
                  dark:text-white
                "
              >
                Centralised Distribution
              </dt>
              <dd class="mt-2 text-base text-gray-500 dark:text-white pt-4">
                Automated social media distribution fueled by Artificial Intelligent content creation and monitored with GDPR complacent user analytics.
              
                <br><br> <b>Starting Price:</b> 750 €
              </dd>
            </div> -->
                        </NuxtLink>
          </div>







        </div>
      </div>











    </div>

</template>
<script setup>
const { t } = useI18n({ useScope: "local" });

</script>
<i18n lang="json">
{  
  "da": {    
    "demotitle": "Test og spil med live demo'er",  
    "website": "Hjemmeside",
    "application": "Applikation",
    "shop": "Butik",
    "library": "Bibliotek",
    "Comming": "Kommer snart",
    },  
  "de": {
    "demotitle": "Testen und spielen Sie mit Live-Demos" , 
        "website": "Website",
    "application": "Anwendung",
    "shop": "Geschäft",
    "library": "Bibliothek",
    "Comming": "Demnächst",
    },
  "en": {
    "demotitle": "Test and play with live demo's" , 
        "website": "Website",
    "application": "Application",
    "shop": "Shop",
    "library": "Library",
    "Comming": "Comming Soon",
    },
  "es": {
        "website": "Sitio web",
    "application": "Aplicación",
    "shop": "Tienda",
    "library": "Biblioteca",
    "demotitle": "Prueba y juega con demostraciones en vivo" , 
    "Comming": "Muy pronto",
    },
  "fr": {
        "website": "Site Web",
    "application": "Application",
    "shop": "Boutique",
    "library": "Bibliothèque",
    "demotitle": "Testez et jouez avec des démos en direct" , 
    "Comming": "À venir",
    },
  "nl": {
      "website": "Website",
    "application": "Applicatie",
    "shop": "Winkel",
    "library": "Bibliotheek",
  "demotitle": "Test en speel met live demo's"  ,
  "Comming": "Binnenkort beschikbaar",
  }
}
</i18n>