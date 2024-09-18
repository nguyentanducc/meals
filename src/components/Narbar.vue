<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <RouterLink :to="{name: 'home'}" class="inline-flex items-center h-full p-5">
        Home
      </RouterLink>
      <div>
        <RouterLink :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition hover:bg-purple-100">
           Search Meals
        </RouterLink>
        <RouterLink :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition hover:bg-purple-100">
          Meals By Letter
        </RouterLink>
        <RouterLink :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition hover:bg-purple-100">
          Meals By Ingredients
        </RouterLink>
      </div>
    </header>
</template>
<script setup>
</script> 