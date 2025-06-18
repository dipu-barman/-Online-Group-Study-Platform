import React, { useEffect, useState } from 'react';

const Searchpart = () => {



const [query, setQuery] = useState('');
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // 🔑 new state

  useEffect(() => {
    fetch('http://localhost:3000/assignmets') // 🛠 Make sure this endpoint is correct
      .then((res) => res.json())
      .then((data) => {
        setOriginalData(data);
        // ❌ Don't set filteredData here
      });
  }, []);

  const handleSearch = () => {
    const filtered = originalData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setHasSearched(true); // ✅ show results now
  };



    return (
        <div>

           
            




              <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Search Assignments</h1>
      <div className='flex gap-5'>
        <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
     
     <button
        onClick={handleSearch}
        className="bg-blue-500 text-white btn rounded hover:bg-blue-600"
      >
        Search
      </button>


      </div>

      

      

      {/* 🔽 Only show results after clicking the button */}
      {hasSearched && (
        <div className="mt-4">
          <h2 className="font-semibold">Results:</h2>
          {filteredData.length > 0 ? (
            <ul className="list-disc list-inside">
              {filteredData.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
        </div>
    );
};

export default Searchpart;