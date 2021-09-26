import React , { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useProductsContext } from '../../context/productsContext'
import Loading from '../../components/loading/Loading'
import PageHero from '../../components/pageHero/PageHero'
import Stars from '../../components/stars/Stars'
import AddToCart from '../../components/addtocart/AddToCart'
import ProductImages from '../../components/productImages/ProductImages'
import { formatPrice, single_product_url as url } from '../../utils'
import './singleProduct.css'

function SingleProduct() {
    const { id } = useParams()
    const history = useHistory()

    const {
        single_product_loading: loading, 
        single_product_error: error,
        single_product: product,
        fetchSingleProduct } = useProductsContext()

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])

    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push('/')
            }, 3000);
        }
    }, [error])

    if(loading){
        return <Loading/>
    }
    const {name,price,description, stock, stars, reviews, id:sku, company, images} = product
    return (
        <div>
            <PageHero title={name} product />
            <div className="section-center page">
                <Link to="/products" className="btn back-btn">
                    Back to Products
                </Link>
                <div className="singleproduct-container">
                   <ProductImages images={images}/>
                   <section className="singleproduct-content">
                    <h2>{name}</h2>
                    <Stars stars={stars} reviews={reviews} />
                    <h5 className="price">{formatPrice(price)}</h5>
                    <p className="desc">{description}</p>
                    <p className="info">
                        <span>Available : </span>
                        {stock > 0 ? 'In Stock' : 'Out of stock'}
                    </p>
                    <p className="info">
                        <span>SKU : </span>
                        {sku}
                    </p>
                    <p className="info">
                        <span>Brand : </span>
                        {company}
                    </p>
                    <hr />
                    {stock > 0 && <AddToCart product={ product }/>}
                    </section>     
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
