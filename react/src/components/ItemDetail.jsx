import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"

export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        
    }
    return (

        <div >
            <Link to={'/'}>
                <button>Atras</button>
            </Link>

            <img className="w-full h-64 object-cover mb-6" src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
            <div className="text-center">
                <h2>{item.title}</h2>
                <p >Stock: {item.stock}</p>
                <p >Precio: ${item.price}</p>
                <div >
                    <div >
                        <button onClick={decrement}>
                            -
                        </button>
                        <span >{count}</span>
                        <button  onClick={increment}>
                            +
                        </button>
                        <button  onClick={reset}>
                            Reset
                        </button>
                        <button  onClick={handleAddToCart}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}