import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JobCard from '../components/JobCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { jobs } from '../data/jobs';
import { Job } from '../types';

const JobsListPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const queryParam = queryParams.get('query');
  const locationParam = queryParams.get('location');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [searchQuery, setSearchQuery] = useState(queryParam || '');
  const [searchLocation, setSearchLocation] = useState(locationParam || '');
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Filter jobs based on category, search query, and location
    let result = jobs;

    if (selectedCategory) {
      result = result.filter(job => job.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.description.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    if (searchLocation) {
      const location = searchLocation.toLowerCase();
      result = result.filter(job => 
        job.location.toLowerCase().includes(location)
      );
    }

    setFilteredJobs(result);
  }, [selectedCategory, searchQuery, searchLocation]);

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Local Services</h1>
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          
          {/* Additional filters could go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Price Range</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="price-any"
                  type="radio"
                  name="price"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <label htmlFor="price-any" className="ml-2 text-gray-700">
                  Any
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="price-low"
                  type="radio"
                  name="price"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="price-low" className="ml-2 text-gray-700">
                  ₹100 - ₹300
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="price-medium"
                  type="radio"
                  name="price"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="price-medium" className="ml-2 text-gray-700">
                  ₹300 - ₹500
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="price-high"
                  type="radio"
                  name="price"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="price-high" className="ml-2 text-gray-700">
                  Above ₹500
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {filteredJobs.length > 0 ? (
            <div>
              <p className="text-gray-600 mb-6">
                Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'result' : 'results'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any jobs matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setSearchLocation('');
                }}
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsListPage;