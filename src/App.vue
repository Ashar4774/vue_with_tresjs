<template>
  <TresCanvas clear-color="#82DBC5">
    <TresPerspectiveCamera :position="[1, 3, 3]" :look-at="[0, 0, 0]" />
    <TresMesh :position="[0, 0, 0]">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshBasicMaterial  color="teal" />
    </TresMesh>
    <TresAxesHelper/>
  </TresCanvas>
  <TresAmbientLight :intensity="1" />
</template>

<script setup>
import { TresCanvas } from '@tresjs/core';

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