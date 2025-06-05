<script setup>
import Cards from '@/components/Cards.vue'
import getRandomImg from '../composables/randomImg';
import { useSearch } from "@/composables/searchImg.js"
import { ref, onMounted } from 'vue';

const images = ref([])
const {resultado, busqueda} = useSearch()

onMounted(async () => {    
    images.value = await getRandomImg()
}) 
</script>

<template>
    <section class="landing">
        <h1>Explora</h1>

        <Cards class="nubes" Name="María" Url="/img/clouds.jpg" :User="{ src: '/img/maria.png', alt: 'Foto de María' }">
        </Cards>
        <Cards class="munich" Name="María" Url="/img/munich.jpg"
            :User="{ src: '/img/maria.png', alt: 'Foto de María' }">
        </Cards>
        <Cards class="arcoiris" Name="María" Url="/img/arcoiris.webp"
            :User="{ src: '/img/maria.png', alt: 'Foto de María' }">
        </Cards>

    </section>

    <section>
        <h2>Tu plataforma para encontrar lo que necesitas <span>al instante.</span></h2>
        <div class="img-api ">
            <Cards v-for="img in (busqueda && busqueda.length > 0 ? resultado : images)" :key="img.id" :Url="img.urls.small" :Name="img.user.name"
                :User="{ src: img.user.profile_image.large }">
                <!-- <img Url="img.urls.small" :alt="img.alt_description" /> -->
            </Cards>
        </div>
    </section>

</template>
<style lang="scss" scoped>

.landing {
    align-items: center;
    z-index: 100;
    @include flex();
    min-height: 500px; 
}
h2 span{
    color: $branding2-color;
}
.nubes {
    position: absolute;
    top: 300px;
    left: 200px;
    width: 350px;
    height: 350px;
   
    transform: rotate(-10deg);
    z-index: -1;
    
}
.munich {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 300px;
    left: 550px;
}
.arcoiris {
    width: 350px;
    height: 350px;
    transform: rotate(10deg);
    z-index: -1;
    position: absolute;
    top: 300px;
    right: 300px;
}
.img-api {
    column-count: 4;
    column-gap: 1rem;
    padding: 7rem;
    
 
}


</style>