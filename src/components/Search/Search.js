import React from 'react'
import SearchInput from '../../styled_components/Header/SearchInput'

export default function Search({ProductsSearched}) {
    return (
        <SearchInput onKeyDown={
            (e)=> e.keyCode === 13 ? ProductsSearched(e.target.value) : null
                
            }
            onChange={e=> e.target.value === '' ? ProductsSearched(e.target.value) : null }
             placeholder="Search all the Products Here..."></SearchInput>
    )
}
