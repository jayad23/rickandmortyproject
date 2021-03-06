import React, { useState, useEffect } from 'react';

// COMPONENTS
import Cards from './Cards'
import HomeHeader from './HomeHeader';
import Loader from './Loader';
// STYLES
import '../StylesCntr/Cards.css'

const HomeSearch = () => {
    const [dataApi, setDataApi] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        const handlerSearch = async()=>{
            const urlDir = `https://rickandmortyapi.com/api/character?page=1`
            const response = await fetch(urlDir)
            const result = await response.json()
            setDataApi(result.results)
        }
        handlerSearch()
    }, [])

    // Search Engine Input and Form
    const handlerValueSearch = ({value})=>{
        setSearchValue(value)
    }

    const handlerSearch = (e)=>{
        e.preventDefault()
        console.log(searchValue)
    }

    return (
        <>  
            <HomeHeader
                handlerValueSearch={handlerValueSearch}
                handlerSearch = {handlerSearch}
            />
            <div className="card-container">
                    {
                        dataApi && dataApi.length > 0 ?
                        dataApi.map((data) => 
                            <Cards
                                key={data.id}
                                name={data.name}
                                image={data.image}
                            />
                        ): <Loader/>
                    }
            </div>
        </>
    )
}

export default HomeSearch
