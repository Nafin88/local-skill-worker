export interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  hourlyRate: number;
  skills: string[];
  location: string;
  experience: string;
  phoneNumber: string;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  recommended: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}