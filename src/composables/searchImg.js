 import unsplash from "@/api/unsplash.js";
 import { ref } from "vue";

 const busqueda = ref("");
 const resultado = ref([]);

 const buscarImg = async (query) => {
   const text=query.trim();

   if (!text) return;

     busqueda.value = text

   const respuesta = await unsplash.search.getPhotos({
     query: texto,
     perPage: 10,
   });

     if (respuesta?.response?.results) {
        resultado.value = respuesta?.response?.results; 
     } else {
        const respuestaAlt = await unsplash.search.getPhotos({
          query: gato,
          perPage: 10,
        });
        resultado.value = respuestaAlt.response.results; 
     }     
   
};
export function useSearch() {
    return {
         busqueda, resultado, buscarImg
     }
 }

// export default buscarImg;