<template>
 <div 
  class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">     
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold">
            {{ meal.strMeal }}
        </h3>
        <p class="mb-4">
            Nếu các đầu bếp gia vẫn đang băn khoăn chưa biết tối nay ăn gì? Thì đừng nên bỏ qua bài viết này. 30 mâm cơm gia đình toàn món ăn ngon chắc chắn sẽ khiến các 'bợm nhậu' về vội với cơm nhà.
        </p>
        </div>
        <div class="p-3">
     <YoutubeButton :href="meal.strYoutube">
        Youtube
     </YoutubeButton>
           
        </div>
    </div>
</template>
<script setup>
import YoutubeButton from './YoutubeButton.vue';


const {meal} = defineProps({
    meal : {
        required: true,
        type: Object,
    },
})
</script>