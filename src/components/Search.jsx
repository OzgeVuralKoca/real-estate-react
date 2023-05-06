import { useContext } from 'react'
import CountryDropdown from './CountryDropdown'
import { HouseContext } from './HouseContext';
import PriceRangeDropdown from './PriceRangeDropdown'
import PropertyDropdown from './PropertyDropdown'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  const { houses } = useContext(HouseContext)
  
  const {handleClick} = useContext(HouseContext)

  return (
    <div className='py-5 px-5 mt-3 max-w-[1170px] flex flex-col md:flex-row justify-between gap-4 md:gap-x-3 relative md:shadow-1 bg-gray-50 rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <div className='mt-2'>
        <button 
          onClick={() => handleClick()}
          className='bg-emerald-800 text-gray-50 p-3 rounded-lg hover:bg-emerald-700'
        >
          <CiSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Search;