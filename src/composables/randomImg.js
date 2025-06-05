import unsplash from "@/api/unsplash.js"




 const getRandomImg = async () => {


    const randomResult = await unsplash.photos.getRandom({
        count: 20,
    });
    if (randomResult.type === "success") {
        // Filtro imágenes que tienen `.urls` definidas
        return randomResult.response;
    } else {
        console.error("Error al obtener imágenes:", randomResult.errors);
        return [];
    }
    
};

export default getRandomImg;