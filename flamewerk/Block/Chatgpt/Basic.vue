<template>
<div class="max-w-2xl mx-auto">









    <div v-if="generate">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructions:</label>




<textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Schrijf hier waar de nieuwsbrief over gaat."></textarea>
<button 

@click="sendMessage"
    class="

                my-4
                inline-flex
                items-center
                justify-center
                rounded-md
                border border-transparent
                px-4
                py-2
                text-base
                font-medium
                text-white
                shadow-sm
                bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark

">Genereer antwoord</button>
</div>

    <div v-if="!generate && data ==''">
        <h1 class="text-2xl dark:text-white text-center"> 
            
            
            De Robot is je text aan het schrijven even geduld!




            </h1>


                    <!-- <img

              src="/bot.gif"
            class="mx-auto"
            /> -->



        </div>


<div v-if="!generate && data !=''">
<h2 class="dark:text-white text-4xl">Resultaat:</h2>


  <div class="prose">
    <main>
      <pre>
    {{data}}
      </pre>
    </main>
  </div>

<a href="#"

    class="

                my-4
                inline-flex
                items-center
                justify-center
                rounded-md
                border border-transparent
                px-4
                py-2
                text-base
                font-medium
                text-white
                shadow-sm
                bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark

">Start Opnieuw</a>



</div>




</div>
</template>
<script setup>
const { send } = useChatgpt()


const generate = ref('true')

const data = ref('')
const message = ref('')

async function sendMessage() {
generate.value = false
  const response = await send(message.value)
  data.value = response
  
}



</script>