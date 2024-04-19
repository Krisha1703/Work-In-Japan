<<<<<<< HEAD
import React from 'react';

export default function FilterJobs() {
  return (
    <section className="bg-blue-100 p-4 md:p-6">
      {/* Link to Material Icons stylesheet */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      {/* Form container */}
      <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Industry Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Industry"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          <i className="material-icons absolute right-3 text-gray-500">work</i>
        </div>

        {/* Location Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          <i className="material-icons absolute right-3 text-gray-500">location_on</i>
        </div>

        {/* Keyword Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Keyword"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          {/* No icon for Keyword field in the provided example */}
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
=======
import React from 'react';

export default function FilterJobs() {
  return (
    <section className="bg-blue-100 p-4 md:p-6">
      {/* Link to Material Icons stylesheet */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      {/* Form container */}
      <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Industry Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Industry"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          <i className="material-icons absolute right-3 text-gray-500">work</i>
        </div>

        {/* Location Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          <i className="material-icons absolute right-3 text-gray-500">location_on</i>
        </div>

        {/* Keyword Field with Icon */}
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Keyword"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
          />
          {/* No icon for Keyword field in the provided example */}
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
>>>>>>> c2c542d521f833fa6787f58400f185eaba5d564b
