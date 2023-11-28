import { useState } from "react"

function useFetch() {
    const [data, setData] = useState([])

    const fetchData = async function() {
        try {
            const response = await fetch("http://localhost:3000/product")
            const jsonData = await response.json()
            setData(jsonData)
        } catch (error) {
            console.log(error);
        }
    }
    


    return [data,setData, fetchData]
}

export default useFetch