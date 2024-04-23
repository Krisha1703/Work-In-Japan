"use client"
import React, { useState } from 'react';
import JobContainer from './job_container';
import FilterJobs from './search';

export default function JobList() {
  const [filteredLocation, setFilteredLocation] = useState('');
  const [filteredIndustry, setFilteredIndustry] = useState('');
  const [filteredKeyword, setFilteredKeyword] = useState('');

    const handleLocationChange = (location: string) => {
        setFilteredLocation(location); // Update the filteredLocation state with the user-entered location
    };

    const handleIndustryChange = (industry: string) => {
        setFilteredIndustry(industry); // Update the filteredIndustry state with the user-entered industry
    };

    const handleKeywordChange = (keyword: string) => {
        setFilteredKeyword(keyword); // Update the filteredKeyword state with the user-entered keyword
    };
    

  // Define a list of job listings with their details
  const jobListings = [
    {
      Title: 'Software Engineer',
      Company: 'ABC Tech Inc.',
      Location: 'Tokyo',
      Industry: 'IT',
      Salary: '8,000,000 JPY',
      Type: 'Full-time',
      Experience: '3 - 4 Year',
      imageSrc: '/media/company1.png',
    },
    {
      Title: 'Financial Analyst',
      Company: 'XYZ Finance Ltd.',
      Location: 'Osaka',
      Industry: 'Fintech',
      Salary: '4,000,000 JPY',
      Type: 'Part-time',
      Experience: '4 - 5 Year',
      imageSrc: '/media/company2.png',
    },
    {
      Title: 'Hospitality Staff',
      Company: 'Japan Resorts.',
      Location: 'Kyoto',
      Industry: 'Hospitality',
      Salary: '2,500,000 JPY',
      Type: 'Full-time',
      Experience: '0 - 3 Year',
      imageSrc: '/media/company2.png',
    },
    {
      Title: 'Public Relations',
      Company: 'Skyline Agency',
      Location: 'Tokyo',
      Industry: 'Marketing',
      Salary: '4,500,000 JPY',
      Type: 'Full-time',
      Experience: '2 - 3 Year',
      imageSrc: '/media/company1.png',
    },
    {
      Title: 'English Instructor',
      Company: 'Global Academy',
      Location: 'Fukuoka',
      Industry: 'Education',
      Salary: '1,300,000 JPY',
      Type: 'Contract',
      Experience: '1 - 2 Year',
      imageSrc: '/media/company2.png',
    },
    {
      Title: 'Quality Analyst',
      Company: 'Quality Systems Ltd.',
      Location: 'Osaka',
      Industry: 'Manufacturing',
      Salary: '4,300,000 JPY',
      Type: 'Full-time',
      Experience: '2 - 3 Year',
      imageSrc: '/media/company1.png',
    },
    {
      Title: 'Web Developer',
      Company: 'ABC Tech Inc.',
      Location: 'Tokyo',
      Industry: 'IT',
      Salary: '7,000,000 JPY',
      Type: 'Full-time',
      Experience: '3 - 4 Year',
      imageSrc: '/media/company1.png',
    },
    {
      Title: 'Restaurant Manager',
      Company: 'Gourmet Delights Co.',
      Location: 'Kyoto',
      Industry: 'Hospitality',
      Salary: '3,200,000 JPY',
      Type: 'Full-time',
      Experience: '1 - 3 Year',
      imageSrc: '/media/company2.png',
    },
  ];

  // Function to filter job listings based on selected location, industry, and keyword
const filterJobListings = () => {
  // Start with the full list of job listings
  let filteredJobs = jobListings;

  // Filter by location if a location filter is applied
  if (filteredLocation) {
    filteredJobs = filteredJobs.filter(job => job.Location.toLowerCase().includes(filteredLocation));
  }

  // Filter by industry if an industry filter is applied
  if (filteredIndustry) {
    filteredJobs = filteredJobs.filter(job => job.Industry.toLowerCase().includes(filteredIndustry));
  }

  // Filter by keyword if a keyword filter is applied
  if (filteredKeyword) {
    filteredJobs = filteredJobs.filter(job =>
      job.Company.toLowerCase().includes(filteredKeyword) || // Check if keyword is in company name
      job.Type.toLowerCase().includes(filteredKeyword) || // Check if keyword is in job type
      job.Title.toLowerCase().includes(filteredKeyword) || // Check if keyword is in job title
      job.Location.toLowerCase().includes(filteredKeyword) || // Check if keyword is in job location
      job.Industry.toLowerCase().includes(filteredKeyword) || // Check if keyword is in job industry
      job.Salary.toLowerCase().includes(filteredKeyword) || // Check if keyword is in job salary
      job.Experience.toLowerCase().includes(filteredKeyword) // Check if keyword is in required experience
    );
  }

  // Return the filtered list of job listings
  return filteredJobs;
};


  const filteredJobListings = filterJobListings();

  return (
    <div>
      <FilterJobs 
            onLocationChange={handleLocationChange} 
            onIndustryChange={handleIndustryChange}
            onKeywordChange={handleKeywordChange}
        />
      <section className="bg-blue-100 flex flex-wrap justify-center items-center">
        {/* Render filtered JobContainer components */}
        {filteredJobListings.map((job, index) => (
          <JobContainer
            key={index}
            Title={job.Title}
            Company={job.Company}
            Location={job.Location}
            Industry={job.Industry}
            Salary={job.Salary}
            Type={job.Type}
            Experience={job.Experience}
            imageSrc={job.imageSrc}
          />
        ))}
      </section>
    </div>
  );
}
