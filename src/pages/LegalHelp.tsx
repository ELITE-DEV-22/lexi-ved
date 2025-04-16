import React, { useState } from 'react';
import { Search, Star, BookOpen, MapPin, Phone, Mail, Award, Clock, Briefcase, Calendar, X } from 'lucide-react';

// Mock data for lawyers and related cases
const MOCK_LAWYERS = {
  'tax': [
    {
      name: 'Priya Sharma',
      specialization: 'Tax Law',
      experience: '15 years',
      rating: 4.8,
      location: 'Mumbai',
      email: 'priya.sharma@example.com',
      phone: '+91 98765 43210',
      expertise: ['Corporate Tax', 'GST', 'International Taxation']
    },
    {
      name: 'Rajesh Mehta',
      specialization: 'Tax Law',
      experience: '12 years',
      rating: 4.6,
      location: 'Mumbai',
      email: 'rajesh.mehta@example.com',
      phone: '+91 98765 43211',
      expertise: ['Income Tax', 'Tax Planning', 'Tax Litigation']
    },
  ],
  'divorce': [
    {
      name: 'Anjali Singh',
      specialization: 'Family Law',
      experience: '10 years',
      rating: 4.9,
      location: 'Delhi',
      email: 'anjali.singh@example.com',
      phone: '+91 98765 43212',
      expertise: ['Divorce Law', 'Child Custody', 'Alimony']
    },
    {
      name: 'Vikram Malhotra',
      specialization: 'Family Law',
      experience: '8 years',
      rating: 4.7,
      location: 'Delhi',
      email: 'vikram.malhotra@example.com',
      phone: '+91 98765 43213',
      expertise: ['Marriage Law', 'Property Division', 'Family Disputes']
    },
  ],
  'property': [
    {
      name: 'Suresh Kumar',
      specialization: 'Property Law',
      experience: '20 years',
      rating: 4.9,
      location: 'Karnataka',
      email: 'suresh.kumar@example.com',
      phone: '+91 98765 43214',
      expertise: ['Real Estate', 'Property Documentation', 'Land Acquisition']
    },
    {
      name: 'Lakshmi Rao',
      specialization: 'Property Law',
      experience: '16 years',
      rating: 4.8,
      location: 'Karnataka',
      email: 'lakshmi.rao@example.com',
      phone: '+91 98765 43215',
      expertise: ['Property Disputes', 'Title Verification', 'Real Estate Transactions']
    },
  ],
};

const MOCK_RELATED_CASES = {
  'tax': [
    {
      title: 'GST compliance dispute resolution',
      description: 'Successfully resolved a complex GST compliance issue for a manufacturing company',
      outcome: 'Favorable settlement with tax authorities'
    },
    {
      title: 'International tax planning',
      description: 'Structured international operations to optimize tax efficiency',
      outcome: 'Reduced tax liability by 30%'
    },
    {
      title: 'Income tax appeal',
      description: 'Represented client in income tax appeal proceedings',
      outcome: 'Appeal granted in client\'s favor'
    }
  ],
  'divorce': [
    {
      title: 'Mutual consent divorce settlement',
      description: 'Facilitated amicable divorce settlement between parties',
      outcome: 'Successful resolution within 6 months'
    },
    {
      title: 'Child custody resolution',
      description: 'Complex child custody case involving international jurisdiction',
      outcome: 'Joint custody arrangement achieved'
    },
    {
      title: 'Alimony negotiation',
      description: 'Negotiated fair alimony terms for high-net-worth individual',
      outcome: 'Equitable settlement reached'
    }
  ],
  'property': [
    {
      title: 'Property title dispute',
      description: 'Resolved multiple claims on ancestral property',
      outcome: 'Clear title established for rightful owner'
    },
    {
      title: 'Real estate documentation',
      description: 'Handled documentation for large commercial property transaction',
      outcome: 'Successful completion of transaction'
    },
    {
      title: 'Land acquisition case',
      description: 'Represented landowners in government acquisition proceedings',
      outcome: 'Fair compensation secured'
    }
  ],
};

const BookingModal = ({ lawyer, onClose }) => {
  const [step, setStep] = useState('login'); // login or booking
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 'login') {
      // Simulate login
      setStep('booking');
    } else {
      // Simulate booking confirmation
      alert(`Booking confirmed with ${lawyer.name} for ${formData.date} at ${formData.time}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          {step === 'login' ? 'Login to Book' : 'Schedule Appointment'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 'login' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Time
                </label>
                <input
                  type="time"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            {step === 'login' ? 'Login' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

const LegalHelp = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    lawyers: any[];
    relatedCases: any[];
  }>({ lawyers: [], relatedCases: [] });
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const handleSearch = () => {
    const lowercaseQuery = query.toLowerCase();
    const searchTerm = Object.keys(MOCK_LAWYERS).find(key => 
      lowercaseQuery.includes(key)
    );

    if (searchTerm) {
      setSearchResults({
        lawyers: MOCK_LAWYERS[searchTerm],
        relatedCases: MOCK_RELATED_CASES[searchTerm],
      });
    } else {
      setSearchResults({ lawyers: [], relatedCases: [] });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Find Legal Help</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search for lawyers (e.g., tax lawyer, divorce lawyer, property lawyer)"
            className="flex-1 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-lg flex items-center transition-colors"
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
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-5 w-5 mr-2" />
                      <span>{lawyer.specialization}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>Experience: {lawyer.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{lawyer.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-2" />
                      <span>{lawyer.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>{lawyer.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span>{lawyer.rating}/5.0</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {lawyer.expertise.map((area, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLawyer(lawyer)}
                      className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Related Cases</h2>
            <div className="space-y-6">
              {searchResults.relatedCases.map((case_, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-500 mr-3" />
                    <h3 className="text-lg font-semibold">{case_.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{case_.description}</p>
                  <div className="flex items-center text-green-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>{case_.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedLawyer && (
        <BookingModal
          lawyer={selectedLawyer}
          onClose={() => setSelectedLawyer(null)}
        />
      )}
    </div>
  );
};

export default LegalHelp;