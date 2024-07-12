import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import './DashBoard.css';

const DashBoard = React.memo(() => {
    const [id, setId] = useState("")

    const [employeeData, setEmployeeData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees")
        .then(res => res.json())
        .then((jsData) => {
          setEmployeeData(jsData?.data || [])
        setLoading(false)
            })
        .catch((error) => {
            setError('Error fetching data.')
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if(id) {
          setFilteredData(employeeData.filter((item) => item?.id === id))
          setIsFiltered(true)
        }
         else {
            setIsFiltered(false)
        }
    }, [id, employeeData])

    const handleDelete = (userId) => {
        setEmployeeData((prev) => prev.filter((item) => item?.id !== userId))
    };

    const getId =(query)=>{
        setId(query)
    };

    const handleCardClick = (userId)=>{
        navigate(`/user/${userId}`)
    };

    return (
    <div className='dashboard'>
      <div className="search">
        <SearchBar getId={getId} />
      </div>

        <div className="heading">
            Employee Data <img src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" />
        </div>
        {loading 
        
        ? (<h3>Loading.... 
              <br />
            Refresh the Page if taking long or try again after some time</h3>) 
        :error 
        ?(<h3>{error}</h3>
        ) 
      :(
        <div className="data-display">

        {(isFiltered ?filteredData :employeeData).map((item)=>(
        <div onClick={()=>handleCardClick(item?.id)} className='single-card' key={item?.id}>
        <div className="name-id">
            <div className='name'>{item?.employee_name}</div>
            <div className='id'>{item?.id}</div>
        </div>
        <div className="changes">
            <div onClick={() => handleDelete(item?.id)}><img src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png" className='delete' alt="" /></div>
            <div><img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png" alt="" className='edit' /></div>
        </div>
            </div>
        ))}
    </div>
)}
</div>
);
});

export default DashBoard;
