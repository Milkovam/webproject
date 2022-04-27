import { idText } from "typescript";
import { IClothes } from "../interfaces/IClothes";

export type ClothesContextType = {
    clothes: IClothes[];
    getClothesById: ( id: string ) => IClothes;
   // editClothes: (id: any) => IClothes;
    
  //editClothesByid: (id:string) => IClothes;
    
   
}