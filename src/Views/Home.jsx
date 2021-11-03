import {useState, useEffect} from 'react'

import Header from '../Components/Header/Header'
import Cards from '../Components/Header/Cards/Cards'
import '../Components/Header/Cards/Cards.css'


const Home = ()=> {

    const [dataApi, setDataApi] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        const request = async ()=>{
            const urlDir = `https://rickandmortyapi.com/api/character?page=${page}`
            const response = await fetch(urlDir)
            const result = await response.json()
            setDataApi(result.results)
        }
        request()
    }, [page])

    const handlerPage = () =>{
        setPage(page + 1)
    }
    
    return (
        <>
            <Header/>
            <div className="card-container">
                {
                    dataApi && dataApi.length > 0 ?
                    dataApi.map((data) => 
                        <Cards
                            key={data.id}
                            name={data.name}
                            image={data.image}
                        />
                    ): <h6>Loading...</h6>
                }
            </div>
            <button onClick={handlerPage}>Next</button>
        </>
    )
}

export default Home