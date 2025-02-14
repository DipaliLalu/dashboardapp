import React from "react";
import "./Skeleton.css";

const SkeletonCard = () => {
    return (
        <div className="skeleton-card shadow-xl dark:bg-gray-900">
            <div className="skeleton-left flex flex-col gap-4 p-3">
                <div className="skeleton-line dark:bg-gradient-to-l from-slate-700 to-slate-900"></div>
                <div className="skeleton-line dark:bg-gradient-to-l from-slate-700 to-slate-900"></div>
                <div className="skeleton-line short dark:bg-gradient-to-l from-slate-700 to-slate-900"></div>
            </div>
            <div className="skeleton-right dark:bg-gradient-to-l from-slate-700 to-slate-900"></div>
        </div>
    );
};

const SkeletonLoader = () => {
    return (
        <div className="skeleton-grid">
            {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default SkeletonLoader;
