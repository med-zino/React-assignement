import React, { useState, useEffect } from 'react';
import { fetchData } from './utils/api';
import { calculatePower } from './utils/calc';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Header from './components/Header';
import './styles.css'
import { filterPerName } from './utils/filters';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilterdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchName , setSearchName] = useState('')
  const [searchPow , setSearchPow] = useState()

  




  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const jsonData = await fetchData();
        const dataWithPower = calculatePower(jsonData);
        setData(dataWithPower);
        setFilterdData(data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    }
    fetchDataAsync()
  },[] )


 
 
  useEffect(() => {
    setFilterdData(filterPerName(data , searchName , searchPow))
  },[data ,searchName , searchPow] )



  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage))
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))
  };


  let currentPageData
  let totalPages
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = (startIndex + parseInt(itemsPerPage)) 
  const isFiltering = searchName || searchPow

   currentPageData = isFiltering ? filteredData.slice(startIndex, endIndex) : data.slice(startIndex, endIndex)
   totalPages = Math.ceil((isFiltering ? filteredData.length : data.length) / itemsPerPage)

  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const columns = [
    'id',
    'name',
    'type',
    'hp',
    'attack',
    'defense',
    'special_attack',
    'special_defense',
    'speed',
    'power',
  ];


  return (
    <>
      <Header data={currentPageData} handleSearchName ={setSearchName} handleSearchPow={setSearchPow} />
      <Table data={currentPageData} columns={columns} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        setItemsPerPage={setItemsPerPage}
        data={currentPageData}
      />
    </>
  );
}

export default App;
