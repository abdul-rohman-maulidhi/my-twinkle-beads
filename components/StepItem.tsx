"use client"
// components/StepItem.tsx

import React from "react";

type StepItemProps = {
icon: React.ReactNode;
title: string;
description: string;
};

const StepItem: React.FC<StepItemProps> = ({ icon, title, description }) => {
return (
<div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
<div className="w-14 h-14 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full mb-4 text-2xl">
{icon}
</div>
<h3 className="font-semibold text-purple-700 text-lg mb-2">{title}</h3>
<p className="text-sm text-gray-600">{description}</p>
</div>
);
};

export default StepItem;