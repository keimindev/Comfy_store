import React from 'react'
import { useFilterContext} from '../../context/filterContext'
import { getUniqueValues } from '../../utils';


function Filter() {
    const {
        filters: {
            text, category, company, collor, min_price, price, max_price, shipping
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
                    <div>
                        {categories.map( (category, index) => { 
                            return(
                                <button type="button" key={index}>{category}</button>
                            )
                        })}
                    </div>
                </div>
                {/* end search input  */}
            </form>
        </div>
    )
}

export default Filter
