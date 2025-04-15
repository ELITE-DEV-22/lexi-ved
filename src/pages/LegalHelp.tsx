import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Mock data for lawyers and related cases
const MOCK_LAWYERS = {
  'tax lawyer in mumbai': [
    { name: 'Priya Sharma', specialization: 'Tax Law', experience: '15 years', rating: 4.8 },
    { name: 'Rajesh Mehta', specialization: 'Tax Law', experience: '12 years', rating: 4.6 },
  ],
  'divorce lawyer in delhi': [
    { name: 'Anjali Singh', specialization: 'Family Law', experience: '10 years', rating: 4.9 },
    { name: 'Vikram Malhotra', specialization: 'Family Law', experience: '8 years', rating: 4.7 },
  ],
  'property lawyer in karnataka': [
    { name: 'Suresh Kumar', specialization: 'Property Law', experience: '20 years', rating: 4.9 },
    { name: 'Lakshmi Rao', specialization: 'Property Law', experience: '16 years', rating: 4.8 },
  ],
};

const MOCK_RELATED_CASES = {
  'tax lawyer in mumbai': [
    'GST compliance dispute resolution',
    'International tax planning',
    'Income tax appeal',
  ],
  'divorce lawyer in delhi': [
    'Mutual consent divorce settlement',
    'Child custody resolution',
    'Alimony negotiation',
  ],
  'property lawyer in karnataka': [
    'Property title dispute',
    'Real estate documentation',
    'Land acquisition case',
  ],
};

const LegalHelp = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    lawyers: any[];
    relatedCases: string[];
  }>({ lawyers: [], relatedCases: [] });

  const handleSearch = () => {
    const lowercaseQuery = query.toLowerCase();
    const matchingLawyers = Object.entries(MOCK_LAWYERS).find(([key]) =>
      key.toLowerCase().includes(lowercaseQuery)
    );
    const matchingCases = Object.entries(MOCK_RELATED_CASES).find(([key]) =>
      key.toLowerCase().includes(lowercaseQuery)
    );

    setSearchResults({
      lawyers: matchingLawyers ? matchingLawyers[1] : [],
      relatedCases: matchingCases ? matchingCases[1] : [],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Find Legal Help</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your legal needs (e.g., tax lawyer in mumbai)"
            className="flex-1 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-lg flex items-center"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {searchResults.lawyers.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Recommended Lawyers</h2>
            <div className="space-y-6">
              {searchResults.lawyers.map((lawyer, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{lawyer.name}</h3>
                  <p className="text-gray-600 mb-2">
                    Specialization: {lawyer.specialization}
                  </p>
                  <p className="text-gray-600 mb-2">Experience: {lawyer.experience}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{lawyer.rating}/5.0</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Related Cases</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {searchResults.relatedCases.map((caseTitle, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    {caseTitle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalHelp;