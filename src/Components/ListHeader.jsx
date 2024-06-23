import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function ListHeader({ setParams }) {
    const [filterToggled, setFilterToggled] = useState(false)
    
    const handleSortClick = (event) => {
        setFilterToggled(!filterToggled)
    }

    const handleSortApply = (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form)
        const params = Object.fromEntries(formData)
        if (params.sortBy === 'undefined') params.sortBy = undefined // need to create a copy of params, because the backend needs undefined for default sorting, instead of 'undefined'
        setParams(params)
    }
    
    const FilterControls = () => {
        if (filterToggled) {
            return <form onSubmit={handleSortApply}>
                <label htmlFor="sortBy">Sort by:
                    <select name="sortBy" defaultValue="created_at">
                        <option value="created_at">Date</option>
                        <option value="comments">Number of comments</option>
                        <option value="votes">Number of votes</option>
                    </select>
                </label>
                <label htmlFor="orderBy">Order by:
                    <select name="orderBy" defaultValue="desc">
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </label>
                <button type="submit">Apply</button>
            </form>
        } else {
            null
        }
    }

    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    
    const todaysDate = new Date().toLocaleDateString(undefined, dateConfig)

    return <div id='list-header-container'>
        <div id='list-header'>
            <h2 class='list-header'>{todaysDate}</h2>
            <Button variant="secondary" onClick={handleSortClick}>Filter</Button>
        </div>
        <FilterControls/>   
    </div>
}