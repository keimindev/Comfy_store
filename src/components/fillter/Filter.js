import React from 'react'
import { useFilterContext} from '../../context/filterContext'
import { formatPrice, getUniqueValues } from '../../utils';
import { Check } from '@material-ui/icons'
import './filter.css'


function Filter() {
    const {
        filters: {
            text, category, company, color, min_price, price, max_price, shipping
        },
        updateFilters,
        clearFilters,
        all_products,

    } = useFilterContext();

    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'colors')


    return (
        <div className="filter-container">
            <form onSubmit={(e)=> e.preventDefault()}>
                {/* search input  */}
                <div className="form=control">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="search" 
                    className="search-input" 
                    value={text} 
                    onChange={updateFilters}
                    />
                </div>
                {/* end search input  */}
                {/* categories  */}
                <div className="form-control">
                    <h5>Category</h5>
                    <div className="form-btns">
                        {categories.map( (c, index) => { 
                            return(
                                <button type="button" 
                                key={index}
                                onClick={updateFilters}
                                name="category"
                                className={ `${category === c.toLowerCase() ? 'active' : null }`}>
                                    {c}
                                </button>
                            )
                        })}
                    </div>
                </div>
                {/* end categories  */}
                {/* company  */}
                <div className="form-control">
                    <h5>Company</h5>
                    <select name="company" value={company} onChange={updateFilters} className="company">
                        {companies.map((c, index) => {
                            return <option key={index} value={c}>{c}</option>
                        })}
                    </select>
                </div>
                {/* end company  */}
                {/* colors  */}
                <div className="form-control">
                    <h5>Colors</h5>
                    <div className="colors">
                        {colors.map((c, index) => {
                            if(c === 'all'){
                                return <button 
                                name="color" onClick={updateFilters} 
                                data-color="all"
                                className={`${color === 'all' ? 'all-btn all-btn-active': 'all-btn'}`}
                                >All</button>
                            }
                            return <button 
                            type="button" 
                            key={index}
                            name="color" 
                            value={c} 
                            className={`${color === c ? "color-btn active" : "color-btn"}`}
                            data-color={c}
                            style={{background:c}}
                            onClick={updateFilters}
                            >{color === c? <Check className="icon"/> : null}</button>
                       })}
                    </div>
                </div>
                {/* end colors */}
                {/* price */}
                <div className="form-control">
                    <h5>Price</h5>
                    <p className="price">{formatPrice(price)}</p>
                    <input type="range" 
                    name="price" 
                    onChange={updateFilters} 
                    min={min_price} 
                    max={max_price} 
                    value={price}/>
                </div>
                {/* end price */}
                {/*  shipping */}
                <div className="form-cotrol shipping">
                    <label htmlFor='shipping'>Free Shipping</label>
                    <input type="checkbox" name="shipping" id="shipping"
                    onChange={updateFilters} checked={shipping} />
                </div>
                {/* end shipping */}
            </form>
            <button type="button" className="clear-btn btn" onClick={clearFilters}>Clear filter</button>
        </div>
    )
}

export default Filter
