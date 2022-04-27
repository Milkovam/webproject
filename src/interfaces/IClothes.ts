import { IBrand } from "./IBrand";

export interface IClothes{
    id?: string,
    name: string,
    brands?: IBrand[]
    image: string
}