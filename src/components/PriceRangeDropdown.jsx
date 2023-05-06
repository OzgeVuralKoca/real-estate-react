import React from 'react';
import { useContext } from 'react'
import { HouseContext } from './HouseContext';
import { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { RiWallet3Line, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handlePriceChange = () => {
    const priceRange = `$ ${minPrice} - $ ${maxPrice}`
    setPrice(priceRange)
  }

  return (
    <Menu as='div' className='dropdown relative'>

      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-sm font-semibold'>{price}</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button>

      <div>
        <Menu.Items className='bg-gray-50 absolute w-full z-10 rounded-lg p-3'>
          <div className="p-2 mb-3 border border-emerald-800 rounded-lg text-sm w-full flex">
            <span className='me-1'>$</span>
            <input
              type="text"
              min={0}
              value={minPrice}
              placeholder='min price'
              onChange={(e) => setMinPrice(e.target.value)}
              className='border-none focus:outline-none w-full bg-gray-50'
            />
          </div>

          <div className="p-2 mb-3 border border-emerald-800 rounded-lg text-sm w-full flex">
            <span className='me-1'>$</span>
            <input
              type="text"
              min={0}
              value={maxPrice}
              placeholder='max price'
              onChange={(e) => setMaxPrice(e.target.value)}
              className='border-none focus:outline-none w-full bg-gray-50'
            />
          </div>

          <Menu.Item
            onClick={handlePriceChange}
            className='cursor-pointer hover:font-semibold transition text-sm list-none py-2 rounded-lg bg-emerald-800 text-gray-50 text-center'
            as='li'
          >
            Apply
          </Menu.Item>

        </Menu.Items>
      </div>

    </Menu>
  );
};

export default PriceRangeDropdown;

