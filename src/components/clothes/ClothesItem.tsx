import { FC } from "react";
import { IClothes } from "../../interfaces/IClothes";
import { Link } from "react-router-dom";
import {Card,Container} from "react-bootstrap"

const ClothesItem: FC<IClothes> = ({id, name, brands,image}) => {
    
    return (
        <Container className="align-items-center">
           <Card className="row"> 
        
            <Card.Header className="col"> {name}
            </Card.Header>
            <Link to={`/clothes-details/${id}`} type="button" className="btn btn-dark">Les mer om {name}  {brands}</Link> 
            <img src={`https://localhost:5001/images/${image}`} alt={name}/>
        
        </Card>
        </Container>
    )
}

export default ClothesItem;