
import '../StylesCntr/Cards.css'

const Cards = ({name, image}) => {

    return (
       
        <div className="card">
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <img src={image} alt="image" />
            </div>
            <div>
                <button>More...</button>
            </div>
        </div>

    )
}

export default Cards
