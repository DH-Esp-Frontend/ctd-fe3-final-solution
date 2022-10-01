
//Esta funcion deberia hacer el fetch a la API 
export const getDentist = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
}