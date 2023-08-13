import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

function Buses() {
  const [startDate, setStartDate] = useState(null);
  const [location, setLocation] = useState(null);
  
  
  const locations = [
    { value: 'New Delhi', label: 'New Delhi' },
    { value: 'Manali', label: 'Manali' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Mumbai', label: 'Mumbai' }
  ];

  const handleLocationChange = (selectedOption) => {
    setLocation(selectedOption);
  };

  
  
  
  return (
    <div className=" bg-cover bg-center h-[30rem] flex items-center justify-center text-white text-2xl w-full ">
              <div className="absolute inset-0 z-[-1] bg-cover bg-center opacity-50 road-1 h-[50rem]" ></div>

      <div className="p-4 flex gap-3">
        <div className="flex-1">
          <div className="mb-4 ">
            <label htmlFor="location" className="block text-sm font-medium text-black-700 mb-1">
              From
            </label>
            <Select
              options={locations}
              value={location}
              onChange={handleLocationChange}
              placeholder="Select location..."
              isSearchable
              className='text-sm w-[12rem] text-black'
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4 ">
            <label htmlFor="location" className="block text-sm font-medium text-black-700 mb-1">
              To
            </label>
            <Select
              options={locations}
              value={location}
              onChange={handleLocationChange}
              placeholder="Select location..."
              isSearchable
              className='text-sm w-[12rem] text-black'
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-sm font-medium text-black-700">
              Travel Date
            </label>
            <DatePicker
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText='mm/dd/yyyy'
              className="mt-1 p-2 border rounded w-[10rem] text-sm text-black "
             
            />
          </div>
        </div>
        
        
<div className="flex-1">
  <button className="bg-orange-600 font-bold text-white p-2 rounded mt-5 ">Search</button>
</div>

      </div>
    </div>
    
  );
}

export default Buses;

