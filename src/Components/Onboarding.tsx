import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {incrementCompletions} from "../utils/localStorageUtils";

const videos = [
    {
        src: "https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4",
        title: "Welcome to Glam!",
    },
    {
        src: "https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4",
        title: "Match your Aesthetic",
    },
    {
        src: "https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4",
        title: "Explore 100+ Styles",
    },
];

const Onboarding: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const completeOnboarding = () => {
        incrementCompletions();
        navigate("/");
    };

    const handleNext = () => {
        if (currentStep < videos.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            completeOnboarding()
        }
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Step {currentStep + 1}</h1>
            <h2 className="text-2xl font-bold mb-4">{videos[currentStep].title}</h2>
            <video
                autoPlay
                muted
                playsInline
                src={videos[currentStep].src}
                controls
                preload="auto"
                className="w-3/4 h-1/2 rounded mb-4 shadow-lg"
            >
                <source
                    src={videos[currentStep].src}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="flex space-x-4">
                {currentStep > 0 && (
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Back
                    </button>
                )}
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {currentStep === videos.length - 1 ? 'Finish' : 'Next Step'}
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
