import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { About, Clothes, ClothesDetails, CreateClothes} from "../pages"



const Routing = () => {
    return (
        <BrowserRouter>
     
     
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
        <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Hjem</Link></li>
                <li className="nav-item"><Link to="clothes" className="nav-link">Clothes</Link></li>
                <li className="nav-item"><Link to="create-clothes" className="nav-link">Add new clothes</Link></li>
              
            </ul>
            </div>
            </nav>
            

            <Routes>
                <Route path="/" element={<About/>}></Route>
                <Route path="clothes" element={<Clothes/>}></Route>
                <Route path="clothes-details/:id" element={<ClothesDetails/>}></Route>
                <Route path="create-clothes" element={<CreateClothes/>}/>
                
            
            </Routes>
           
        </BrowserRouter>
    )
}

export default Routing;