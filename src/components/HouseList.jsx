import { useContext } from 'react';
import { ImSpinner2 } from 'react-icons/im'
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)

  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-emerald-800 text-4xl' />)
  }

  if (houses.length < 1) {
    return <div className='text-center text-2xl mt-10 italic text-gray-400 font-semibold h-screen'>Sorry, Not Found!</div>
  }

  return (
    <section className='mb-20 mt-5'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {houses.map((house, index) => {
            return (
              <Link to={`/real-estate-react/property/${house.id}`} key={index} onClick={() => window.scrollTo(0, 0)}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
