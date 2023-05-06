import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { RiMapPinLine } from 'react-icons/ri'

const House = ({ house }) => {
  const { image, type, address, bedrooms, bathrooms, surface, price } = house

  return (
    <div className='p-5 flex w-full'>
      <div className='bg-gray-50 rounded-lg p-5 hover:shadow-xl'>
        <img src={image} alt="" className='w-full home-img' />
        <div>
          <div className='mt-2 text-xl font-bold text-emerald-800'>${price}</div>
          <div className='mb-3 flex font-semibold'>
            {type}
          </div>
          <div className='mb-3 flex font-semibold'>
            <BiBed className='mt-1 mx-1 text-emerald-800' />{bedrooms} Bed
            <BiBath className='mt-1 mx-1 ms-2 text-emerald-800' /> {bathrooms} Bath
            <BiArea className='mt-1 mx-1 ms-2 text-emerald-800' /> {surface}
          </div>

          <div className='flex gap-1 text-gray-700 h-14'>
            <RiMapPinLine size={15} className='mt-1' /> {address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
