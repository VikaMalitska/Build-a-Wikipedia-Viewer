import React from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';

const IconSearch = props =>{
    return(
        <SearchIcon className="icon" color="secondary" onClick={props.searchIcon}></SearchIcon>
    )
}
export default IconSearch;