
import './Header.css'

const Header = () =>{
    return (
        <div className='header-container'>
            <form >
                <h1>About Rick & Morty</h1>
                <div className="search-container">
                    <input type="text" placeholder="type in..."/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Header