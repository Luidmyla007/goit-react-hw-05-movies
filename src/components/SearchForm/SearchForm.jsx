// import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchContainer, SearchBar, SearchFormInput, SearchButton, } from './SearchForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';



 function SearchForm ()  {           
 const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }
  
    return (
        <SearchContainer>
        <SearchBar  autoComplete="off" onSubmit={onSubmitForm}>
          <SearchButton type="submit" >
            <span >
              <AiOutlineSearch width="12" height="12"/>              
            </span>
          </SearchButton>

          < SearchFormInput            
            type="text"
            name="query"
            // value={searchValue}
            // onChange={handleChange}        
            autoFocus
            placeholder="Search images and photos"  
            size={40}
          />
        </SearchBar>
      </SearchContainer>
    );
  
};



export default SearchForm;