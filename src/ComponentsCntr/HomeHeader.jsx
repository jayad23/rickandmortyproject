import React from 'react'
import '../StylesCntr/HomeHeader.css'

const HomeHeader = ({handlerValueSearch, handlerSearch}) => {
    return (
        
        <div className='home-container'>
            <form onSubmit={(e)=>handlerSearch(e)}>
                <h1>About Rick & Morty</h1>
                <div className="search-container">
                    <input
                        onChange={({target})=>handlerValueSearch(target)}
                        type="text" 
                        placeholder="type in..."
                    />
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
        
    )
}

export default HomeHeader
