<template >
<div class="p-8 ">
    <input type="text" class="rounded border-2 bg-white border-gray-200 w-full" placeholder=" Search for meals"
   
    @change="searchMeals" 
    v-model="keyword" 
    />

</div>
<Meals :meals="meals" />
</template>
<script setup>
// import { computed} from '@vue/reactivity';
import {ref,computed ,onMounted  } from 'vue';
import {useRoute} from 'vue-router';
import store from '../store';
    // import YoutubeButton from '@/components/YoutubeButton.vue';
import Mealiteam from '@/components/Mealiteam.vue';
import Meals from '@/components/Meals.vue';
const route  = useRoute();
const keyword = ref('');
const meals = computed(()=> store.state.searchedMeals);

function searchMeals() {
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value)

    }else{
        store.commit('searchedMeals',[])
    }
}
onMounted(()=>{
   keyword.value= route.params.name
   if(keyword.value){
    searchMeals()
   }
})
</script>