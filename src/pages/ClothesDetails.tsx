import { useParams } from "react-router";
import { FC, useContext, useEffect, useState } from "react";
import { ClothesContext } from "../contexts/ClothesContext";
import { ClothesContextType } from "../types/ClothesContextType";
import { IClothes } from "../interfaces/IClothes";
import { IBrand } from "../interfaces/IBrand";

const ClothesDetails: FC = () => {
    const {id} = useParams();

    const {getClothesById} = useContext( ClothesContext ) as ClothesContextType;
    const [clothes, setClothes] = useState<IClothes>();

    useEffect( () => {
        getClothesFromContext();
    },  [])

    const getClothesFromContext = () => {
        if(id){
            const _clothes = getClothesById( id );
            setClothes( _clothes );
        }
    }

    
    const createBrandList = () => {
        return clothes?.brands?.map( ( brand: IBrand, key: number ) => {
            return (
                <li key={key}>{brand.name} </li>
               
              
            )
        } );
    }

    
  
    return (
        <section>
            <h3> Clothes with following id: {id}</h3>
            <article>
                <h4>{clothes?.name}</h4>
                <ul>{createBrandList()}</ul>
                <button className= "btn btn-sm btn-primary" disabled>Edit</button>
                <button className="btn btn-secondary btn-sm" disabled>Delete</button>
            </article>
        </section>
    )
}

export default ClothesDetails;