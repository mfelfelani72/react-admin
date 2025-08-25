import { useTranslation } from "react-i18next";
import { cn } from "../../../../../utils/libs/cn";
import { useEffect } from "react";

const StatusBox = ({ className, status, ...props }) => {
  const { t } = useTranslation();
  

  // نگاشت تمام رنگ‌های Tailwind
  const getColorClasses = (color) => {
    const colorMap = {
     
      slate: { bg: "bg-slate-100", dot: "bg-slate-400", text: "text-slate-600" },
      gray: { bg: "bg-gray-100", dot: "bg-gray-400", text: "text-gray-600" },
      zinc: { bg: "bg-zinc-100", dot: "bg-zinc-400", text: "text-zinc-600" },
      neutral: { bg: "bg-neutral-100", dot: "bg-neutral-400", text: "text-neutral-600" },
      stone: { bg: "bg-stone-100", dot: "bg-stone-400", text: "text-stone-600" },
      red: { bg: "bg-red-100", dot: "bg-red-400", text: "text-red-600" },
      orange: { bg: "bg-orange-100", dot: "bg-orange-400", text: "text-orange-600" },
      amber: { bg: "bg-amber-100", dot: "bg-amber-400", text: "text-amber-600" },
      yellow: { bg: "bg-yellow-100", dot: "bg-yellow-400", text: "text-yellow-600" },
      lime: { bg: "bg-lime-100", dot: "bg-lime-400", text: "text-lime-600" },
      green: { bg: "bg-green-100", dot: "bg-green-400", text: "text-green-600" },
      emerald: { bg: "bg-emerald-100", dot: "bg-emerald-400", text: "text-emerald-600" },
      teal: { bg: "bg-teal-100", dot: "bg-teal-400", text: "text-teal-600" },
      cyan: { bg: "bg-cyan-100", dot: "bg-cyan-400", text: "text-cyan-600" },
      sky: { bg: "bg-sky-100", dot: "bg-sky-400", text: "text-sky-600" },
      blue: { bg: "bg-blue-100", dot: "bg-blue-400", text: "text-blue-600" },
      indigo: { bg: "bg-indigo-100", dot: "bg-indigo-400", text: "text-indigo-600" },
      violet: { bg: "bg-violet-100", dot: "bg-violet-400", text: "text-violet-600" },
      purple: { bg: "bg-purple-100", dot: "bg-purple-400", text: "text-purple-600" },
      fuchsia: { bg: "bg-fuchsia-100", dot: "bg-fuchsia-400", text: "text-fuchsia-600" },
      pink: { bg: "bg-pink-100", dot: "bg-pink-400", text: "text-pink-600" },
      rose: { bg: "bg-rose-100", dot: "bg-rose-400", text: "text-rose-600" },
    };

    return colorMap[color] || colorMap.gray; // پیش‌فرض gray
  };

  if (!status || !status.color) return null;

  const colors = getColorClasses(status.color);

  return (
    <div
      className={cn(
        "w-[5.5rem] flex items-center rounded-4xl gap-1 px-2",
        colors.bg,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          colors.dot
        )}
      ></div>
      <div className={cn(colors.text,"mt-1")}>
        {t(status?.title || "")}
      </div>
    </div>
  );
};

export default StatusBox;