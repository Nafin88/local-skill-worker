import React from 'react';
import { SubscriptionPlan } from '../types';
import { Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSubscribe: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan, onSubscribe }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!user) {
      navigate('/login', { state: { from: '/subscription' } });
      return;
    }
    onSubscribe();
  };

  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border ${
        plan.recommended ? 'border-blue-500' : 'border-gray-200'
      }`}
    >
      {plan.recommended && (
        <div className="bg-blue-500 text-white text-center py-2 font-medium">
          Recommended
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
          <span className="text-gray-600">/{plan.duration}</span>
        </div>
        <div className="border-t border-gray-200 my-6 pt-6">
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleSubscribe}
          className={`w-full py-3 rounded-md font-medium transition-colors duration-300 ${
            plan.recommended
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;