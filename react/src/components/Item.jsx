import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (

        <Link to={`/product/${product.id}`}>
        <div>
            <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
            <h2 >{product.title} {product.description}</h2>
            <p>${product.price}</p>
        </div>
        </Link>
    )
}