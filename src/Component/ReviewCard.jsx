import React from 'react';

const ReviewCard = ({ name, role, message, image }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="mt-3 text-gray-700 italic">“{message}”</p>
    </div>
  );
};

export default ReviewCard;
