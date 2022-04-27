import { FC, ChangeEvent, useState } from "react";
import { ClothesService } from "../../services/ClothesService";
import { IClothes } from "../../interfaces/IClothes";
import {Link} from "react-router-dom";
import { Card, Container } from "react-bootstrap";


const CreateClothesForm : FC = () => {   

    const [ newClothes, setNewClothes ] = useState<IClothes>({name: "", brands:[], image: ""});
    const [ newImage, setNewImage ] = useState<File>();
  

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;        
        switch( name ){
            case "name":
                let { value } = event.target;
                setNewClothes( { ...newClothes, name: value } );
               
            break;
            case "image":
                let { files } = event.target;
                if( files ){
                    console.log( files[0] );
                    setNewClothes( { ...newClothes,brands:[], image: files[0].name } );
                    setNewImage( files[0] );
                    
                }
            break;
        }
    }
    const postNewClothes= () => {
        console.log( newClothes );
        console.log( newImage ); 
        ClothesService.postClothes(newClothes, newImage as File);
    }
    return (

               <Container className="align-items-center">
                   <Card className="row"> 
                   <Card.Body>
                   <Card.Title className="col"> Name 
                   </Card.Title>
                   <input className="form-control" onChange={handleChange} name="name" type="text"/> 
                   </Card.Body>
                   <Card.Body>
                   <Card.Title className="col"> Image
                   </Card.Title>
                   <input onChange={handleChange} name="image" type="file"/>
                   </Card.Body>
                   <Card.Body >
                   <input onClick={postNewClothes} type="button" className="btn btn-success" value="Save new one" />
                   <Link to = "/">
                  <button type="button" className="btn btn-danger">Cancel</button></Link>
                 </Card.Body>
                 <Card.Body className ="row text-center h-100">
                 <Link to = "/clothes">
                  <button type="button" className="btn btn-dark">Take a look through the list now</button></Link>
                       </Card.Body>
                  
                    <Card.Body >
                 </Card.Body>

                 
                 </Card>
                

               </Container>
       
     
    )
}


export default CreateClothesForm;