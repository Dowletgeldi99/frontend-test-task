import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-500 to-purple-500">
            <h1 className="text-4xl font-bold text-white mb-8">Welcome to Glam!</h1>
            <button
                onClick={() => navigate('/onboarding')}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100"
            >
                Get Started
            </button>
            <button
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100 mt-4"
            >
                Analytics Dashboard
            </button>
        </div>
    );
};

export default LandingPage;
