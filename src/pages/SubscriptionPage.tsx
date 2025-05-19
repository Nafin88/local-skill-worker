import React, { useState } from 'react';
import SubscriptionCard from '../components/SubscriptionCard';
import { subscriptionPlans } from '../data/subscriptions';
import { Shield, Clock, Award } from 'lucide-react';

const SubscriptionPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      alert('Subscription activated successfully!');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Subscription Plans</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Choose the right plan to promote your services and connect with potential clients.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {subscriptionPlans.map(plan => (
          <SubscriptionCard 
            key={plan.id} 
            plan={plan} 
            onSubscribe={() => handleSubscribe(plan.id)}
          />
        ))}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="123"
                  />
                </div>
              </div>
              <button
                onClick={handlePaymentSubmit}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full text-gray-600 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Subscribe?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Showcase Your Skills</h3>
            <p className="text-gray-600">
              Create a professional profile that highlights your experience, skills, and previous work.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Find Jobs Faster</h3>
            <p className="text-gray-600">
              Get access to more job opportunities and respond to client requests quickly.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Build Trust</h3>
            <p className="text-gray-600">
              Collect reviews and ratings from satisfied clients to build your reputation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do subscriptions work?</h3>
            <p className="text-gray-600">
              Subscriptions are billed monthly and can be canceled at any time. You'll have access to all the features included in your plan for the duration of your subscription.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade my plan later?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade your subscription plan at any time. The new pricing will be prorated for the remaining time in your billing cycle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept all major credit cards, debit cards, UPI, and net banking.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I cancel my subscription?</h3>
            <p className="text-gray-600">
              You can cancel your subscription at any time from your account settings. Your benefits will continue until the end of your current billing period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;