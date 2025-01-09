<template>
  <div class="flex flex-col items-center justify-center">
    <div>Contador</div>
    <div>{{$store.state.count}}</div>
    <div>
      <button class="bg-green-700">+</button>
      <button class="bg-red-800">-</button>
    </div>
  </div>
</template>
<script src="./HomeView.ts"></script>
<style scoped src="./HomeView.css"></style>
