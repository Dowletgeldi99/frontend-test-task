import React from 'react'
import { getCompletions } from "../utils/localStorageUtils";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const completions = getCompletions();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-start justify-start h-full bg-gray-100 p-4">
            <button
                onClick={handleGoBack}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-6"
            >
                {'Go Back'}
            </button>

            <div className={'w-full flex flex-col items-center justify-center flex-1'}>
                <h2 className="text-3xl font-bold mb-4">Analytics Dashboard</h2>
                <p className="text-lg">Users Completed Onboarding: {completions}</p>
            </div>
        </div>
    );
};

export default Dashboard;
