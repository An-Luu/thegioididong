import classNames from "classnames/bind";
import style from './Search.module.scss'
import { useState, useEffect, useRef} from "react";
import { useDebounce } from "../../../hooks";
import * as searchServices from "../../../services/searchServices"
import { Wrapper as PopperWrapper } from "../../../components/Popper/index"
import SearchItem from "../../../components/SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import Tippy from '@tippyjs/react/headless'

const cx = classNames.bind(style)

function Search() {

    const [searchValue, setSearchValue] = useState('')

    const [searchResult, setSearchResult] = useState([])

    const [showResult, setShowResult] = useState(true)

    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()
    
    
    useEffect(()=> {
        if(!debounced.trim()){
            return 
        }
        
        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounced)
            setSearchResult(result)

            setLoading(false)
        }
        
        fetchApi()

    }, [debounced])
    

    const handleChange = (e) => {

        const searchValue = e.target.value
        if(searchValue === ' '  && !searchValue.trimStart()) {
            setSearchValue('')
        } else{
            setSearchValue(searchValue.replace(/^\s+/g, '')) 
        }
    }
    
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    console.log(searchResult)
    return ( 
        <div className={cx('box-container')}>
            <Tippy 
              offset={[0,2]}
              interactive
              placement= 'bottom'
              appendTo={() => document.body}
              visible={showResult && searchValue && searchValue.trim() && searchValue.length > 2 && searchResult.length > 0}
              render={attrs => (
          <div className={cx('search-box')} tabIndex="-1" {...attrs}>
              <PopperWrapper> 
                  <h4 className={cx('search-title')}>
                      Sản phẩm gợi ý
                  </h4>
                  {searchResult.map((result) => (
                  <SearchItem click={handleClear} key={result.id} data={result} />
                  ))}
              </PopperWrapper>
          </div>
          )}
          onClickOutside={handleHideResult}
            >
                <div className={cx('search-box')}>
                    <input
                     ref={inputRef}
                     value={searchValue}
                     spellCheck={false}
                     onChange={handleChange}
                     onFocus={() => setShowResult(true)}
                     className={cx('search-input')} 
                     placeholder="Bạn tìm gì..." 
                     />
                     {!!searchValue && !loading && (
                    <button 
                        className={cx('clear')} 
                        onClick={handleClear} 
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                     {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> }
                    <button className={cx('search-submit')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
     );
}

export default Search;