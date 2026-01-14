import React, { useState, useMemo, useEffect } from 'react';
import { getMergedData } from './services/dataService';
import { MergedAuthor, SortOption } from './types';
import SearchBar from './components/SearchBar';
import AuthorCard from './components/AuthorCard';
import Stats from './components/Stats';

const App: React.FC = () => {
  const [data, setData] = useState<MergedAuthor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('totalDocs');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data processing to prevent UI blocking on mount
    const timer = setTimeout(() => {
      const merged = getMergedData();
      setData(merged);
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLowerCase();
    return data.filter(author => 
      author.name.toLowerCase().includes(lower) ||
      author.scopusId?.includes(lower) ||
      author.wosId?.toLowerCase().includes(lower) ||
      (author.subjects && author.subjects.some(s => s.toLowerCase().includes(lower)))
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // Descending order for numbers
      if (sortBy === 'totalDocs') return b.totalDocs - a.totalDocs;
      if (sortBy === 'scopusDocs') return b.scopusDocs - a.scopusDocs;
      if (sortBy === 'wosDocs') return b.wosDocs - a.wosDocs;
      return 0;
    });
  }, [filteredData, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-slate-900 pb-24 pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl mb-4">
            Scholar Directory
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300">
             Explore academic profiles, citation metrics, and research output across Scopus and Web of Science.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-8">
        <SearchBar value={searchTerm} onChange={setSearchTerm} count={data.length} />
        
        {loading ? (
             <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
             </div>
        ) : (
            <>
                {/* Stats Section */}
                {!searchTerm && data.length > 0 && (
                    <div className="mb-8">
                        <Stats data={data} />
                    </div>
                )}

                {/* Controls & Count */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <p className="text-gray-600 font-medium mb-4 sm:mb-0">
                        Showing <span className="text-indigo-600 font-bold">{sortedData.length}</span> scholars
                    </p>
                    <div className="flex items-center space-x-2">
                        <label className="text-sm text-gray-500 font-medium">Sort by:</label>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5"
                        >
                            <option value="totalDocs">Total Documents</option>
                            <option value="scopusDocs">Scopus Count</option>
                            <option value="wosDocs">WoS Count</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                {sortedData.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No scholars found</h3>
                        <p className="mt-1 text-sm text-gray-500">Try adjusting your search terms.</p>
                        <button 
                            onClick={() => setSearchTerm('')}
                            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {sortedData.map((author) => (
                            <AuthorCard key={author.id} author={author} />
                        ))}
                    </div>
                )}
            </>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
           <p className="text-center text-sm text-gray-500">
             © 2024 ScholarDirectory. Data based on provided Scopus & WoS Exports.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;