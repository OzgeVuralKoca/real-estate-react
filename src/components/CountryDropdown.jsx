import { useContext } from 'react'
import { HouseContext } from './HouseContext';
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { RiMapPinLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-sm font-semibold'>{country}</div>
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
        <Menu.Items className='bg-gray-50 w-full absolute rounded-lg z-10'>
          {countries.map((country, index) => {
            return (
              <Menu.Item
                onClick={() => setCountry(country)}
                className='cursor-pointer hover:font-semibold transition text-sm list-none px-5 py-1 border-b'
                as='li'
                key={index}
              >
                {country}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default CountryDropdown;
