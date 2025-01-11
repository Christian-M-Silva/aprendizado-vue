<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-4xl font-extrabold">Contador</div>
    <div class="my-4 text-2xl">{{$store.state.count}}</div>
    <div class="gap-3 flex">
      <a href="#" @click="changeValue(true)" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">+</a>
      <a href="#" @click="changeValue(false)" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">-</a>
    </div>
  </div>
</template>
<script src="./HomeView.ts"></script>
<style scoped src="./HomeView.css"></style>
