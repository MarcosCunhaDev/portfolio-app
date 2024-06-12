import React from "react";

interface ProjectTag {
  label: string;
  onClick: () => void;
  isSelected: boolean;
}

export const ProjectTag = ({ label, onClick, isSelected }: ProjectTag) => {
  const buttonClasses = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2 ${buttonClasses} px-6 py-3 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
