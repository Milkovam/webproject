import axios from 'axios';


import { IClothes } from '../interfaces/IClothes';


export const ClothesService = ( function(){ 

    const clothesController = "https://localhost:5001/Clothes";
    const urlToImageUploadController = "https://localhost:5001/ImageUpload/SaveImage";
   

    const getAll = async () => {
        const result = await axios.get(clothesController);
        return result.data as IClothes[];
    }

    const editClothes = (id: string, editClothes: IClothes) => {
        try {
            axios.put(`https://localhost:5001/Clothes/${id}`,editClothes);
        } catch (error) {
            console.log(error);
        }
    }; 



    
    const postClothes = ( newClothes: IClothes, image: File) => {
        let formData = new FormData();
        formData.append( "file", image );
        axios.post( clothesController, newClothes );
        axios({
            url: urlToImageUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
      
       
    }



    return {
        getAll,
        postClothes,
        editClothes
    
    }
    


}())