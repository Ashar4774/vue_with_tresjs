<template>
  <TresCanvas clear-color="#82DBC5">
    <Stats />
    <TresPerspectiveCamera />
    <TresMesh :position="[0, 0, 0]" ref="cubeRef">
      <TresBoxGeometry />
      <TresMeshBasicMaterial  color="yellow" />
    </TresMesh>
    <TresAxesHelper/>
  </TresCanvas>
  <TresAmbientLight :intensity="1" />
</template>

<script setup>
import {ref, shallowRef, watchEffect} from 'vue';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { Stats  } from '@tresjs/cientos';

const { onLoop } = useRenderLoop();

const cubeRef = shallowRef();

onLoop(({delta, elapsed})=>{
  if(cubeRef.value){
    cubeRef.value.rotation.y += delta;
    cubeRef.value.rotation.z = elapsed;

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

watchEffect(()=>{
  console.log(cubeRef);
})

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