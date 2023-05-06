// import house images
import House1 from './assets/img/houses/house1.png';
import House1a from './assets/img/houses/house1-kitchen.png';
import House1b from './assets/img/houses/house1-bed.png';
import House2 from './assets/img/houses/house2.png';
import House2a from './assets/img/houses/house2-living.png';
import House2b from './assets/img/houses/house2-bed.png';
import House3 from './assets/img/houses/house3.png';
import House3a from './assets/img/houses/house3-living.png';
import House3b from './assets/img/houses/house3-kitchen.png';
import House4 from './assets/img/houses/house4.png';
import House4a from './assets/img/houses/house4-living.png';
import House4b from './assets/img/houses/house4-kitchen.png';
import House5 from './assets/img/houses/house5.png';
import House5a from './assets/img/houses/house5-kitchen.png';
import House5b from './assets/img/houses/house5-bed.png';
import House6 from './assets/img/houses/house6.png';
import House6a from './assets/img/houses/house6-living.png';
import House6b from './assets/img/houses/house6-kitchen.png';
import House7 from './assets/img/houses/house7.png';
import House7a from './assets/img/houses/house7-kitchen.png';
import House7b from './assets/img/houses/house7-bed.png';
import House8 from './assets/img/houses/house8.png';
import House8a from './assets/img/houses/house8-kitchen.png';
import House8b from './assets/img/houses/house8-bed.png';
import House9 from './assets/img/houses/house9.png';
import House9a from './assets/img/houses/house9-living.png';
import House9b from './assets/img/houses/house9-bed.png'
import House10 from './assets/img/houses/house10.png';
import House10a from './assets/img/houses/house10-kitchen.png';
import House10b from './assets/img/houses/house10-bed.png';
import House11 from './assets/img/houses/house11.png';
import House11a from './assets/img/houses/house11-living.png';
import House11b from './assets/img/houses/house11-bed.png';
import House12 from './assets/img/houses/house12.png';
import House12a from './assets/img/houses/house12-living.png';
import House12b from './assets/img/houses/house12-bed.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment1a from './assets/img/apartments/a1-living.png';
import Apartment1b from './assets/img/apartments/a1-bed.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment2a from './assets/img/apartments/a2-living.png';
import Apartment2b from './assets/img/apartments/a2-bed.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment3a from './assets/img/apartments/a3-living.png';
import Apartment3b from './assets/img/apartments/a3-kitchen.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment4a from './assets/img/apartments/a4-living.png';
import Apartment4b from './assets/img/apartments/a4-bed.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment5a from './assets/img/apartments/a5-living.png';
import Apartment5b from './assets/img/apartments/a5-bed.png';
import Apartment6 from './assets/img/apartments/a6.png';
import Apartment6a from './assets/img/apartments/a6-living.png';
import Apartment6b from './assets/img/apartments/a6-kitchen.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    image1: House1a,
    image2: House1b,
    country: 'Dublin / Ireland',
    address: '109 Clonliffe Avenue, Dublin 3',
    bedrooms: '4',
    bathrooms: '3',
    surface: '230 m2',
    year: '2000',
    price: '400000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    image1: House2a,
    image2: House2b,
    country: 'Dublin / Ireland',
    address: 'The Mills, Old Navan Road, Castleknock, Dublin 15',
    bedrooms: '5',
    bathrooms: '3',
    surface: '300 m2',
    year: '2016',
    price: '340000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    image1: House3a,
    image2: House3b,
    country: 'Dublin / Ireland',
    address: 'Sycamore House, Eaton Wood Square, Shankill, Dublin 18',
    bedrooms: '4',
    bathrooms: '2',
    surface: '250m2',
    year: '2016',
    price: '320000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    image1: House4a,
    image2: House4b,
    country: 'Dublin / Ireland',
    address: '71 Willow Field, Park Avenue, Sandymount, Dublin 4',
    bedrooms: '5',
    bathrooms: '3',
    surface: '350 m2',
    year: '2016',
    price: '450000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    image1: House5a,
    image2: House5b,
    country: 'Cork / Ireland',
    address: 'Innisdubh, Rathduff, Grenagh, Co. Cork',
    bedrooms: '5',
    bathrooms: '3',
    surface: '250m m2',
    year: '2015',
    price: '290000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    image1: House6a,
    image2: House6b,
    country: 'Cork / Ireland',
    address: 'An Lios Líath, Ballyclough, Co. Cork',
    bedrooms: '6',
    bathrooms: '3',
    surface: '350 m2',
    year: '2014',
    price: '320000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    image1: Apartment1a,
    image2: Apartment1b,
    country: 'Cork / Ireland',
    address: 'Berry Hill, Castlelyons , Castlelyons, Co. Cork',
    bedrooms: '2',
    bathrooms: '1',
    surface: '120 m2',
    year: '2012',
    price: '120000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    image1: Apartment2a,
    image2: Apartment2b,
    country: 'Cork / Ireland',
    address: '42 Grattan Street, Cork City, Co. Cork',
    bedrooms: '3',
    bathrooms: '1',
    surface: '130 m2',
    year: '2011',
    price: '25000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    image1: Apartment3a,
    image2: Apartment3b,
    country: 'Dublin / Ireland',
    address: 'The Mills, Old Navan Road, Castleknock, Dublin 15',
    bedrooms: '2',
    bathrooms: '1',
    surface: '80 m2',
    year: '2011',
    price: '140000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    image1: House7a,
    image2: House7b,
    country: 'Dublin / Ireland',
    address: '10 Oakview Way, Clonsilla, Dublin 15',
    bedrooms: '5',
    bathrooms: '3',
    surface: '250 m2',
    year: '2015',
    price: '417000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    image1: House8a,
    image2: House8b,
    country: 'Dublin / Ireland',
    address: 'Airpark House, Stocking Lane, Rathfarnham, Dublin 14',
    bedrooms: '7',
    bathrooms: '2',
    surface: '250 m2',
    year: '2008',
    price: '345000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    image1: House9a,
    image2: House9b,
    country: 'Cork / Ireland',
    address: '8 The Grove, Gleann Na Ri, Tower, Co. Cork',
    bedrooms: '4',
    bathrooms: '4',
    surface: '250 m2',
    year: '2015',
    price: '339000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    image1: House10a,
    image2: House10b,
    country: 'Cork / Ireland',
    address: '14 Crestfield Mews, Riverstown, Glanmire, Co. Cork',
    bedrooms: '5',
    bathrooms: '2',
    surface: '350 m2',
    year: '2014',
    price: '480000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    image1: House11a,
    image2: House11b,
    country: 'Cork / Ireland',
    address: '36 Copper Valley Vue, Glanmire, Glanmire, Co. Cork',
    bedrooms: '5',
    bathrooms: '2',
    surface: '300 m2',
    year: '2011',
    price: '33000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    image1: House12a,
    image2: House12b,
    country: 'Cork / Ireland',
    address: 'Rose Hill, Annabella, Mallow, Co. Cork',
    bedrooms: '4',
    bathrooms: '3',
    surface: '300 m2',
    year: '2005',
    price: '421000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    image1: Apartment4a,
    image2: Apartment4b,
    country: 'Cork / Ireland',
    address: '36 Copper Valley Vue, Glanmire, Glanmire, Co. Cork',
    bedrooms: '2',
    bathrooms: '1',
    surface: '80 m2',
    year: '2011',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    image1: Apartment5a,
    image2: Apartment5b,
    country: 'Dublin / Ireland',
    address: 'Cladagh, 172 Edgewood Lawns, Blanchardstown, Dublin 15',
    bedrooms: '3',
    bathrooms: '1',
    surface: '90 m2',
    year: '2007',
    price: '320000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    image1: Apartment6a,
    image2: Apartment6b,
    country: 'Dublin / Ireland',
    address: 'Apartment 5, Portland Lock, Dublin 1',
    bedrooms: '3',
    bathrooms: '1',
    surface: '110 m2',
    year: '2000',
    price: '15000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];