import { FC, useContext } from "react";
import { ClothesContext } from "../../contexts/ClothesContext";
import { ClothesContextType } from "../../types/ClothesContextType";
import { IClothes } from "../../interfaces/IClothes";
import ClothesItem from "./ClothesItem";
import { Card } from "react-bootstrap";

const ClothesList: FC = () => {

    const {clothes} = useContext(ClothesContext) as ClothesContextType;

    const createClothesList = () => {
        return clothes.map( ( clothes: IClothes, key: number ) => {  
            return (

                <Card >
            
                        <Card.Body >
                        <ClothesItem 
                         key={key}
                         id={clothes.id}
                         name={clothes.name}
                         image ={clothes.image}
                    
                />
                       </Card.Body>
                    </Card>

                
 

               
            )
        } )
    }

    return (
        <section>
            { createClothesList() }
         
        </section>
    )
}

export default ClothesList;