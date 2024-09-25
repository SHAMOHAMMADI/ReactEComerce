import axios from "axios";


const client = axios.create({
    baseURL : "http://localhost:3061"
})

export async function getProducts(){
const data = await client('/products')
console.log(data.data.id)
}
