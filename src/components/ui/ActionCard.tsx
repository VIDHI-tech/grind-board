import React from "react";

interface ActionCardProps {
  title: string;
  icon?: React.ReactNode;
  gradient?:
    | "greenBlue"
    | "purplePink"
    | "purpleLavender"
    | "blueTeal"
    | "tealblue"
    | "brownyellow";
  buttonText: string;
  onAction: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  icon,
  gradient = "greenBlue",
  buttonText,
  onAction,
}) => {
  const gradientClasses = {
    greenBlue: "bg-gradient-to-r from-green-500 to-blue-500",
    purplePink: "bg-gradient-to-r from-purple-600 to-pink-500",
    purpleLavender: "bg-gradient-to-r from-purple-800 to-purple-300",
    blueTeal: "bg-gradient-to-r from-blue-700 to-[#E9737A]",
    tealblue: "bg-gradient-to-r from-blue-500 to-green-500",
    brownyellow: "bg-gradient-to-r from-[#6B2D20] to-[#D1C561]",
  };

  return (
    <div
      onClick={onAction}
      className={`
        ${gradientClasses[gradient]}
        relative rounded-xl p-5 text-white
        h-36 flex justify-between items-center
        cursor-pointer overflow-hidden
      `}
    >
      <div className="flex flex-col justify-between items-start">
        <span className="inline-block bg-white text-xs font-bold px-3 py-1 rounded-full text-green-700">
          {buttonText}
        </span>
        <h3 className="mt-4 text-sm sm:text-lg lg:text-base xl:text-lg font-semibold leading-snug">
          {title}
        </h3>
      </div>
      {icon && (
        <div className="flex items-center justify-center h-full">{icon}</div>
      )}
    </div>
  );
};

export default ActionCard;
