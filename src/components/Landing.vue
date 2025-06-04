<script setup>
import Cards from '@/components/Cards.vue'
import unsplash from "@/api/unsplash.js";
import { ref, onMounted } from 'vue';
const images = ref([]);

onMounted(async () => {
    
    const result = await unsplash.photos.getRandom( {
         
             count: 15,         
             orientation: 'portrait',
         
     });
    if (result.type === 'success') {
        // Filtro imágenes que tienen `.urls` definidas
        images.value = result.response
        console.log('Imágenes obtenidas:', images.value);
    } else {
        console.error('Error al obtener imágenes:', result.errors);
    }
})

</script>

<template>
    <section class="landing">
        <h1>Explora</h1>
        <p>Tu plataforma para encontrar lo que necesitas al instante.</p>
        <Cards class="nubes" Name="María" Url="/img/clouds.jpg" :User="{ src: '/img/maria.png', alt: 'Foto de María' }">
        </Cards>
        <Cards class="munich" Name="María" Url="/img/munich.jpg"
            :User="{ src: '/img/maria.png', alt: 'Foto de María' }">
        </Cards>
        <Cards class="arcoiris" Name="María" Url="/img/arcoiris.webp"
            :User="{ src: '/img/maria.png', alt: 'Foto de María' }">
        </Cards>
    </section>
    <section class="img-api">
        <Cards v-for="img in images" :key="img.id" :Url="img.urls.small">
            <!-- <img Url="img.urls.small" :alt="img.alt_description" /> -->
        </Cards>
    </section>

</template>
<style lang="scss" scoped>

.landing::before {
    content: "";
    position: absolute;
    top: 0;
    height: 200px;
    width: 100%;
    background: linear-gradient(186deg, $branding2-color 0%, rgba(242, 218, 218, 1) 20%,
            rgba(252, 252, 252, 0) 50%);
}

.landing {
    align-items: center;
    z-index: 100;
    @include flex();
    min-height: 500px;
 
}

.nubes {
    position: absolute;
    top: 300px;
    left: 200px;
    width: 350px;
    height: 350px;
    object-fit: cover;
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
    padding: 3rem;
    
 
}


</style>