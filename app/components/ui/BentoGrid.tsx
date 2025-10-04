"use client";

import React from "react";

export const BentoGrid = ({ children }: { children: React.ReactNode }) => {
return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
};

export const BentoGridItem = ({
children,
className = ""
}: {
children: React.ReactNode;
className?: string;
}) => {
return (
<div className={p-4 rounded-lg border border-gray-700 bg-black-100 ${className}}>
{children}
</div>
);
};