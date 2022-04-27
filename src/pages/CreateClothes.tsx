import { FC } from "react";
import CreateClothesForm from "../components/clothes/CreateClothesForm";

const CreateClothes : FC = () => {
    return (
        <section>
            <h3>Add few more clothes to the list</h3>
            <CreateClothesForm/>
        </section>
    )
}

export default CreateClothes;