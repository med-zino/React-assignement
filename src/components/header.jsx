// Row.js

import { findMaxPower , findMinPower } from '../utils/calc';


function Header({data , handleSearchName , handleSearchPow}) {


    const handleSearchChange = (e) => {
       handleSearchName(e.target.value)
    }



    const handlePowChange = (e) => {
        handleSearchPow(e.target.value)  
    }
    
  console.log(data ? data : 'no data yet')
  const maxPower = findMaxPower(data)
  const minPower = findMinPower(data)

  return (
    <div className='header'>
        <input type="text" onChange={handleSearchChange} placeholder='Search...'/> 
         <input type="number" placeholder='Power threashhold' onChange={handlePowChange} />
         <p> Max Power :  {maxPower}</p>
        <p>Min Power : {minPower}</p>
    </div>
  );
}

export default Header;
