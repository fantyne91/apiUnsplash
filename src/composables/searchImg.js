 import unsplash from "@/api/unsplash.js";
 import { ref } from "vue";

 const busqueda = ref("")
const resultado = ref([])
 const suger = ref("")

 const buscarImg = async (query) => {
   const text=query.trim();

   if (!text) return;

     busqueda.value = text
     suger.value = ""

   const respuesta = await unsplash.search.getPhotos({
     query: text,
     perPage: 10,
   });

     if (respuesta?.response?.results.length > 0) {
        resultado.value = respuesta?.response?.results; 
     } else {
        const respuestaAlt = await unsplash.search.getPhotos({
          query: "gato",
          perPage: 10,
        });
         resultado.value = respuestaAlt.response.results;
        suger.value = `No se encontraron resultados para ${text}`
     }     
   
};
export function useSearch() {
    return {
         busqueda, resultado, buscarImg, suger
     }
 }

// export default buscarImg;