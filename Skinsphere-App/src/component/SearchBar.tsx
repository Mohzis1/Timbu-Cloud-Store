import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import searchIcon from "./External styles/SearchBar.module.css"


function SearchBar() {
  return (
      <div className={`${searchIcon.searchContainer}`}>
          <div className={`${searchIcon.searchContainerTwo}`}>

             <FontAwesomeIcon icon={faMagnifyingGlass} className={`${searchIcon.magnifyingGlass}`} />

        <input type="text"  placeholder="Search" className={`${searchIcon.search}`} />
        </div>
        </div>
        
   
  )
}

export default SearchBar