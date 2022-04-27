import {FC} from "react";
import {Card,Container} from "react-bootstrap"
import { Link } from "react-router-dom";

const About: FC  = () => {


    return (

        <Container >
        <Card>
        <Card.Header> Clothes store 
        </Card.Header>
        <Card.Body>
        <Card.Title> Welcome to this page </Card.Title>
        <Card.Subtitle> Hopefully you will find something you like! </Card.Subtitle>
            <Card.Text>
                We offer a different products in our store, including jeans, dresses and bags! 
                Feel free to take a look. 
                <div className=" d-flex justify-content-center">

               <Link to ="/clothes" className="btn btn-dark"> Range of clothes </Link>
           </div>

            </Card.Text>
        </Card.Body>
        
        </Card>

</Container>

    )
}

export default About;