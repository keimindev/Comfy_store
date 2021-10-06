import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import { ViewList, ViewComfy } from '@material-ui/icons';
import './sort.css'


function Sort() {
    const { filter_products : products, grid_view, setGridView, setListView, sort, updateSort} = useFilterContext();
    
    return (
        <div className="sort-container"> 
            <div className="btn-container">
                <button type="button" 
                className={`${grid_view ? "view-btn view-btn-active" : "btn view-btn"}`} onClick={setGridView}><ViewComfy/></button>
                <button type="button" className={`${grid_view ? "view-btn" : "view-btn view-btn-active"}`} onClick={setListView}><ViewList/></button>
            </div>
            <p>{products.length} products found</p>
            <hr/>
            <form>
                <label htmlFor='sort'>sort by</label>
                <select name="sort" id="sort" className="sort-input"
                value={sort} onChange={updateSort}>
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (A-Z)</option>
                    <option value="name-z">name (Z-A)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort
