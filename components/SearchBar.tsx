import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  count: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, count }) => {
  return (
    <div className="relative max-w-2xl mx-auto -mt-8 mb-8 z-10 px-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white rounded-lg shadow-xl ring-1 ring-gray-900/5">
          <svg className="h-6 w-6 ml-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="w-full p-4 rounded-lg focus:outline-none text-gray-700 placeholder-gray-400"
            placeholder={`Search ${count} scholars by name, ID, or subject...`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {value && (
             <button 
                onClick={() => onChange('')}
                className="mr-4 text-gray-400 hover:text-gray-600"
             >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;