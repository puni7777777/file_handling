import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Search(props) {
    return (
        <div class="input-group">
            <div class="form-outline" data-mdb-input-init>
                <input type="search" id="form1" class="form-control" />
                <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}






// Initialization for ES Users
// import { Input, Ripple, initMDB } from "mdb-ui-kit";

// initMDB({ Input, Ripple });