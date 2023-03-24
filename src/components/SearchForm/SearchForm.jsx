import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchContainer, SearchBar, SearchFormInput, SearchButton, } from './SearchForm.styled';


 function SearchForm ({ onSubmit }) {
  const onSubmitForm = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    onSubmit(query.value);
    e.target.reset();
  };
  
    return (
        <SearchContainer>
        <SearchBar  autoComplete="off" onSubmit={onSubmitForm}>
          <SearchButton type="submit" >
            <span >
              <AiOutlineSearch width="12px" height="12px"/>              
            </span>
          </SearchButton>

          < SearchFormInput            
            type="text"
            name="query"                 
            autoFocus
            placeholder="Search movie"  
            size={40}
          />
        </SearchBar>
      </SearchContainer>
    );
  
};


SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;