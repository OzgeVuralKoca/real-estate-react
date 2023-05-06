import React from 'react';
import { housesData } from '../data'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { RiMapPinLine } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineClose } from 'react-icons/ai'

// modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const PropertyDetails = () => {
  const { id } = useParams()
  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      <div className='container mx-auto pt-24 pb-14'>
        <div className='text-emerald-800 py-2 mb-12 border-b border-gray-400 font-bold text-2xl'>{house.name}</div>
        <Button onClick={handleOpen}>
          <div className='grid grid-cols-3 cursor-pointer'>
            <img src={house.image} alt="" className='mx-auto col-span-2 h-full border' />
            <div className='h-full'>
              <img src={house.image1} alt="" className='mx-auto border' />
              <img src={house.image2} alt="" className='mx-auto border' />
            </div>
          </div>
        </Button>
        <div className='grid lg:grid-cols-3 gap-10 my-12'>
          <div className='lg:col-span-2'>
            <div className='flex gap-1 font-semibold text-neutral-800 mb-2'>
              <RiMapPinLine size={15} className='mt-1' /> {house.address}, {house.country}
            </div>
            <div className='mb-1 text-xl font-semibold text-neutral-800'>${house.price}</div>
            <div className='flex font-semibold text-neutral-800'>
              {house.type} |
              <BiBed className='mt-1 mx-1 text-emerald-800' />{house.bedrooms} Bed |
              <BiBath className='mt-1 mx-1 text-emerald-800' /> {house.bathrooms} Bath |
              <BiArea className='mt-1 mx-1 text-emerald-800' /> {house.surface}
            </div>
            <hr className='border-gray-400' />
            <div className='my-12'>
              <div className='flex font-semibold text-neutral-800'>
                Bedroom: <span className='ms-2 text-neutral-600'>{house.bedrooms}</span>
              </div>
              <div className='flex font-semibold text-neutral-800'>
                Bathroom: <span className='ms-2 text-neutral-600'>{house.bathrooms}</span>
              </div>
              <div className='flex font-semibold text-neutral-800'>
                Surface: <span className='ms-2 text-neutral-600'>{house.surface}</span>
              </div>
              <div className='flex font-semibold text-neutral-800'>
                Year: <span className='ms-2 text-neutral-600'>{house.year}</span>
              </div>
            </div>
            <hr className='border-gray-400' />
            <div className='my-12'>
              <div className='font-semibold text-neutral-800 mb-3'>
                Description
              </div>
              <div className='text-neutral-600'>
                {house.description}
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-2 border border-gray-400 p-5 rounded-lg justify-center'>
              <div>
                <img src={house.agent.image} alt="" />
              </div>
              <div className='my-auto'>
                <div className='border-b border-gray-400 mb-2 text-sm'>Agent</div>
                <div className='text-sm'>{house.agent.name}</div>
                <div className='text-sm'>{house.agent.phone}</div>
                <Link to='' className='text-emerald-800 text-sm'>
                  View List
                </Link>

              </div>
            </div>
            <form className='mt-5 border border-gray-400 rounded-lg p-3' >
              <input
                type="text"
                placeholder='name*'
                required
                className='w-full border border-gray-400 rounded-lg my-3 p-1 text-sm focus:border-emerald-700 outline-none bg-gray-200'
              />
              <input
                type="text"
                placeholder='email*'
                required
                className='w-full border border-gray-400 rounded-lg my-1 p-2 text-sm focus:border-emerald-700 outline-none bg-gray-200'
              />
              <input
                type="text"
                placeholder='phone*'
                required
                className='w-full border border-gray-400 rounded-lg my-1 p-2 text-sm focus:border-emerald-700 outline-none bg-gray-200'
              />
              <textarea
                name=""
                placeholder='message*'
                id=""
                cols="10"
                rows="5"
                className='w-full border border-gray-400 rounded-lg my-1 p-2 text-sm focus:border-emerald-700 outline-none bg-gray-200'
              >
              </textarea>
              <div>
                <button
                  className='w-full rounded-lg my-1 p-2 text-sm bg-emerald-700 shadow shadow-gray-500 outline-none hover:bg-emerald-800'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AiOutlineClose
            size={25}
            className='float-right my-2 cursor-pointer'
            onClick={handleClose}
          />
          <Carousel>
            <div>
              <img src={house.image} />
            </div>
            <div>
              <img src={house.image1} />
            </div>
            <div>
              <img src={house.image2} />
            </div>
          </Carousel>
        </Box>
      </Modal>
    </section>
  );
};

export default PropertyDetails;
