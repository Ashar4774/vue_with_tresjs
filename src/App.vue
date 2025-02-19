<template>
  <TresCanvas window-size clear-color="#82DBC5">
    <Stats />
    <OrbitControls />
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[3, 1, 4]" :look-at="[0, 0, 0]" />
    <TresMesh :position="[0, 0, 0]" ref="cubeRef">
      <TresTorusKnotGeometry :args = "[1, 0.3, 100, 16]"/>
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresAxesHelper/>
    <MouseParallax
        :factor="10"
        :ease="[3, 0.2]"
    />
  </TresCanvas>
  <TresAmbientLight :intensity="1" />
</template>

<script setup>
import {ref, shallowRef, watchEffect, onMounted, onUnmounted} from 'vue';
import { TresCanvas, useRenderLoop, useTres } from '@tresjs/core';
import { Stats, OrbitControls, MouseParallax  } from '@tresjs/cientos';

/*const { state } = useTres();
let controls = null;


watchEffect(()=>{
  if(state.renderer && state.camera){
    controls = new OrbitControls(state.camera, state.renderer.domElement);
  }
})*/

const { onLoop } = useRenderLoop();

const cubeRef = shallowRef();

onLoop(({delta})=>{
  if(cubeRef.value){
    cubeRef.value.rotation.x += delta;
    cubeRef.value.rotation.y += delta;

    // cubeRef.value.position.x = Math.sin(elapsed * 2);
    // cubeRef.value.position.y = Math.sin(elapsed * 2);
    // cubeRef.value.position.z = Math.sin(elapsed * 2);

    /*cubeRef.value.scale.set(
        Math.sin(elapsed * 2),
        Math.sin(elapsed * 2),
        Math.sin(elapsed * 2)
    )*/
  }
})

const handleScroll = (event) => {
  if(cubeRef.value){
    // cubeRef.value.rotation.x += event.deltaX * 0.5;
    cubeRef.value.rotation.y += - event.deltaY * 0.5;

  }
}

onMounted(() => {
  window.addEventListener("wheel", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleScroll);
});

</script>

<style>

html,
body,
#app{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>