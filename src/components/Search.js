import React, { useState } from "react"
import PropTypes from 'prop-types'

export default function Search(props) {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
        if (props.onSearch) {
            props.onSearch(event.target.value)
        }
    }

    return (
        <div class="input-group">
            <div class="form-outline" data-mdb-input-init>
                <input type="search" id="form1" class="form-control" value={searchValue} onChange={handleInputChange} />
                {/* <label class="form-label" for="form1">Search</label> */}
            </div>
            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}






// Initialization for ES Users
// import { Input, Ripple, initMDB } from "mdb-ui-kit"

// initMDB({ Input, Ripple });