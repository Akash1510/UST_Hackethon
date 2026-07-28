import React from 'react';

const DownloadApp = () => {
    return (
        <section id="download-app" className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Download AgroAI</h2>

                <div className="flex flex-col items-center md:flex-row justify-center md:space-x-20">
                    {/* Phone Mockup */}
                    <div className="relative mb-10 md:mb-0">
                        <div className="w-64 h-128 bg-white shadow-xl rounded-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                            {/* Phone Frame */}
                            <img
                                src="https://pngimg.com/d/smartphone_PNG101505.png"
                                alt="Phone Mockup"
                                className="w-full h-full object-contain"
                            />
                            {/* Inside Content */}
                            <div className="absolute top-4 left-4 right-4 bottom-4 flex items-center justify-center">
                                <img
                                    src="https://www.pngplay.com/wp-content/uploads/6/Agriculture-Logo-Clipart-PNG.png"
                                    alt="AgrioPredict App Logo"
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* QR Code */}
                    <div className="relative">
                        <div className="bg-white shadow-xl rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://secretan.com/wp-content/uploads/2019/04/qr-code-play-store.png"
                                alt="QR Code for App Download"
                                className="w-48 h-48 mx-auto mb-4"
                            />
                            <p className="text-lg font-semibold text-gray-700">Scan the QR Code to Download the App</p>
                        </div>
                    </div>
                </div>

                {/* Play Store Link */}
                <div className="mt-10">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.agriopredict"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        Download on Play Store
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
