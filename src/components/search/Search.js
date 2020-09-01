import React, {useState} from 'react'
import { TextField, InputAdornment, IconButton   } from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles'

function Search() {
    const [searchResult, setSearchResult] = useState([{ id: 1, title: 'abc'},{ id: 2, title: 'def'},{ id: 3, title: 'bef'}])
    const onSearch = event =>{
        
    }
    const classes = useClasses()
    return (
        <div>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={searchResult.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search package"
                        margin="normal"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        
                    />
                )}
            />
        </div>
    )
}
export default Search;
const useClasses = makeStyles(theme => ({
    iconContainer: {
        "&:hover $icon": {
            color: 'red',
        }
    },
    icon: {
        color: 'blue',
    },
}))