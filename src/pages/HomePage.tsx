import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle, 
  Award, 
  ArrowRight, 
  Search,
  Droplet,
  PaintBucket,
  Hammer,
  Utensils,
  Zap
} from 'lucide-react';
import { categories } from '../data/categories';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string, location: string) => {
    const searchParams = new URLSearchParams();
    if (query) searchParams.append('query', query);
    if (location) searchParams.append('location', location);
    
    navigate(`/jobs?${searchParams.toString()}`);
  };

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'plumber':
        return <Droplet className="h-8 w-8" />;
      case 'painter':
        return <PaintBucket className="h-8 w-8" />;
      case 'carpenter':
        return <Hammer className="h-8 w-8" />;
      case 'cooking':
        return <Utensils className="h-8 w-8" />;
      case 'electrician':
        return <Zap className="h-8 w-8" />;
      default:
        return <Briefcase className="h-8 w-8" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Find Skilled Professionals Near You
            </h1>
            <p className="text-lg md:text-xl mb-10 text-blue-100">
              Connect with trusted local service providers for all your home and business needs.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find professionals based on the service you need. We have experts in various categories ready to help you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/jobs?category=${category.id}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {getIconForCategory(category.id)}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{category.name}</h3>
                <span className="text-blue-600 text-sm group-hover:text-blue-800 transition-colors duration-300 flex items-center justify-center">
                  Browse Jobs <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SkillHub makes it easy to find and hire skilled professionals for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">
                Browse through different categories or search for specific skills you need.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">
                Review profiles, compare rates, and connect with professionals.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hire</h3>
              <p className="text-gray-600">
                Hire the best professional for your job and get your work done.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Are You a Service Provider?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our platform to connect with customers looking for your skills. Create your profile and start receiving job requests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Sign Up Now
            </Link>
            <Link
              to="/subscription"
              className="bg-transparent text-white border border-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View Subscription Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;