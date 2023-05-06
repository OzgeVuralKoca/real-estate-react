import { useContext } from 'react'
import { HouseContext } from './HouseContext';
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { RiHome5Line, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-sm font-semibold'>{property}</div>
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
          {properties.map((property, index) => {
            return (
              <Menu.Item
                onClick={() => setProperty(property)}
                className='cursor-pointer hover:font-semibold transition text-sm list-none px-5 py-1 border-b'
                as='li'
                key={index}
              >
                {property}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default PropertyDropdown;
