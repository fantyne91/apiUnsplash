<script setup>
import Cards from '@/components/Cards.vue'
</script>
<template>
    <section class="landing">
        <h1>Explora</h1>
        <p>Tu plataforma para encontrar lo que necesitas al instante.</p>
        <img class="nubes" src="/img/clouds.jpg" alt="Nubes decorativas" />
        <img class="munich" src="/img/munich.jpg" alt="Nubes decorativas" />

    </section>
    <Cards></Cards>
</template>
<style lang="scss" scoped>
           .landing::before{
            content:"";
            position: absolute;
            top:0;
            height: 200px;
          
            width: 100%;
                background: linear-gradient(186deg, rgba(232, 101, 101, 1) 0%, rgba(242, 218, 218, 1) 20%, rgba(252, 252, 252, 0) 50%);
               
           } 
           .landing{
            align-items: center;
            z-index: 100;
            @include flex();
            min-height: 400px;
      
           }
           .nubes{
            @include border(25px, 4px);
            position: absolute;
            top: 200px;
            left: 100px;
            width: 400px;
            height: 400px;
            object-fit: cover;
           transform: rotate(-10deg);   
           z-index: -1;         
           }
           .munich{ 
            width: 350px;
                height: 350px;
                @include border(25px, 4px);
                position: absolute;
                    top: 300px;
                    left: 450px;
           }
</style>