<template>
<div>
<div class="back">
    <main class="scene">

    </main>






</div>

  <div class=" min-h-screen absolute w-full z-50 top-0">
    <BlockHeaderMaximumclone />
    <div class=" pt-24">
      <slot />
    </div>
    <BlockFooterTiny v-if="project.$state.footertype == 'Tiny'" />
    <BlockFooterMinimal v-if="project.$state.footertype == 'Minimal'" />
     <BlockFooterEcommerce v-if="project.$state.footertype == 'Ecommerce'" />
    <BlockFooterMaximum v-if="project.$state.footertype == 'Maximum'" />
  </div>

  </div>




</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();

import { ref, onMounted } from 'vue'
onMounted(() => {
const scene = document.querySelector('.scene');
const CreateDiv = () =>{
    for (let i = 0; i < 210; i++){
        scene.innerHTML += "<div></div>";
    }
}
CreateDiv();

const stars = document.querySelectorAll('div');
stars.forEach( star => {
    let x = `${Math.random() * 200}vmax`;
    let y = `${Math.random() * 100}vh`;
    let z = `${Math.random() * 200 - 100}vmin`;
    let rx = `${Math.random() * 360}deg`;
    star.style.setProperty('--x', x);
    star.style.setProperty('--y', y);
    star.style.setProperty('--z', z);
    star.style.setProperty('--rx', rx);
    let delay = `${Math.random() * 5.5}s`;
    star.style.animationDelay = delay;
})
})


</script>
<style>

.dark .back{
    background: #000;
    overflow: hidden;
    background-image: 
    radial-gradient(circle at 40% 50%, #610b4b 0%, #a30d8a00 40%),
    radial-gradient(circle at 65% 60%, #420a50 0%, #580e7500 45%),
    radial-gradient(circle at 40% 60%, #076066 0%, #17777700 45%);
    background-blend-mode: screen;
}

.back{
    background: #000;
    overflow: hidden;
    background-image: 
    radial-gradient(circle at 40% 50%, #9ef4b4 0%, #f275ff 40%),
    radial-gradient(circle at 65% 60%, #bdf5af 0%, #f18aff 45%),
    radial-gradient(circle at 40% 60%, #f89f99 0%, #8888ff 45%);
    background-blend-mode: screen;
}

.scene{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    perspective: 10vmin;
}

.scene div{
    width: 1.5vmin;
    height: 1.5vmin;
    transform: 
    translateZ(-100vmin)
    rotateY(90deg)
    rotateX(var(--rx))
    translateZ(var(--x))
    scaleX(1);
    position: absolute;
    top: 0%;
    left: 0%;
    animation:  animate 6.5s infinite ease-in;
    background: #b30e74;
    box-shadow: 0 0 20px rgb(255, 10, 177);
}

.dark .scene div{
    width: 1.5vmin;
    height: 1.5vmin;
    transform: 
    translateZ(-100vmin)
    rotateY(90deg)
    rotateX(var(--rx))
    translateZ(var(--x))
    scaleX(1);
    position: absolute;
    top: 0%;
    left: 0%;
    animation:  animate 6.5s infinite ease-in;
    background: #fff;
    box-shadow: 0 0 20px rgb(10, 239, 255);
}


@keyframes animate {
    0%, 90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: 
        translateZ(0vmin)
        rotateY(90deg)
        rotateX(var(--rx))
        translateZ(var(--x))
        scaleX(6);
    }
}
</style>