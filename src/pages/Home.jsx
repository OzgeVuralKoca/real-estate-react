import HouseList from "../components/HouseList";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className='h-screen home-bg flex justify-center flex-wrap flex-col content-center px-5'>
        <h1 className='font-bold text-gray-50 md:text-5xl 
        sm:text-4xl text-2xl mx-auto'>Buy Your Dream Home</h1>
        <Search />
      </div>
      <div className="pt-10">
        <HouseList />
      </div>
      
    </>
  );
};

export default Home;
