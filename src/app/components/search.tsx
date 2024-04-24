"use client"
import React, { useState } from 'react';

export interface FilterJobsProps { //Job filtering props
  onLocationChange: (location: string) => void;
  onIndustryChange: (industry: string) => void;
  onKeywordChange: (keyword: string) => void;
}

export default function FilterJobs({ onLocationChange, onIndustryChange, onKeywordChange }: FilterJobsProps) {
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [keyword, setKeyword] = useState('');


  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value.toLowerCase()); //set the filtered location as the input location entered user
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIndustry(value.toLowerCase()); //set the filtered industry as the input industry entered user
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; //set the filtered keyword as the input keyword entered user
    setKeyword(value.toLowerCase());
  };

  // Handle form submission when the user clicks the submit button
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Call the onLocationChange function with the updated location value
  onLocationChange(location);

  // Call the onIndustryChange function with the updated industry value
  onIndustryChange(industry);

  // Call the onKeywordChange function with the updated keyword value
  onKeywordChange(keyword);
};


  return (
    <section className="bg-blue-100 p-4 md:p-6">
      {/* Link to Material Icons stylesheet */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      {/* Form container */}
      <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4" onSubmit={handleSubmit}>
        {/* Location Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={handleLocationChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          <i className="material-icons absolute right-3 text-gray-500">location_on</i>
        </div>

        {/* Industry Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Industry"
            name="industry"
            value={industry}
            onChange={handleIndustryChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          <i className="material-icons absolute right-3 text-gray-500">work</i>
        </div>

        {/* Keyword Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Keyword"
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
        </div>

        {/* Search Button with Icon */}
        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center w-full md:w-auto"
        >
          Search
          <i className="material-icons ml-2">search</i>
        </button>
      </form>
    </section>
  );
}
