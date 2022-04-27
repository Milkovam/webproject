import { FC, createContext, useState, useEffect } from 'react'
import { IClothes } from '../interfaces/IClothes'
import { ClothesContextType } from '../types/ClothesContextType'
import { ClothesService } from '../services/ClothesService'


export const ClothesContext = createContext<ClothesContextType | null>( null );

export const ClothesProvider:FC = ({children}) => {

    const [clothes, setClothes] = useState<IClothes[]>([]);
 
    useEffect( () => {
        getClothesFromService();
    }, [])

    const getClothesFromService = async () => {
        const result = await ClothesService.getAll();
        setClothes( result );
    }


    const getClothesById = (id: string) => {
        return clothes.find( clothes => clothes.id === id ) as IClothes;
    }


   /*const editClothes =(id: any, editedClothes: IClothes) => {
       ClothesService.editClothes(id,editedClothes);
   };*/

    return (
        <ClothesContext.Provider value={{clothes, getClothesById}}>
            {children}
        </ClothesContext.Provider>
    )

    

}