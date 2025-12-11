"use client";

import { FaEarthAmericas } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { TProps } from "@/app/types/translation";
import { useTranslations } from "next-intl";



interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export default function MalaysiaStats() {
  const t = useTranslations("countries.malaysia");
  const population = t("stats.populationValue", { value: "91+" });
  const academicYearValue = t("stats.academicYearValue");
  const universities = t("stats.universitiesCountValue", { value: "200+" });
  const students = t("stats.studentsCountValue", { value: "8+" });
  const international = t("stats.internationalStudentsValue", { value: "350+" });

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="flex flex-wrap justify-center items-center px-3 flex-row-reverse gap-32 max-w-7xl py-10">

        <StatItem icon={<RiTeamFill />} label={t("stats.population")} value={population} />
        <StatItem icon={<GrFormSchedule />} label={t("stats.academicYear")} value={academicYearValue} />
        <StatItem icon={<FaUniversity />} label={t("stats.universitiesCount")} value={universities} />
        <StatItem icon={<PiStudentFill />} label={t("stats.studentsCount")} value={students} />
        <StatItem icon={<FaEarthAmericas />} label={t("stats.internationalStudents")} value={international} />

      </div>
    </section>
  );
}

function StatItem({ icon, label, value }: StatItemProps) {
  return (
    <div className="flex flex-col items-end justify-end">
      <div className="p-2 rounded-md text-orange-500 text-3xl">
        {icon}
      </div>
      <div className="mt-1 text-gray-900 text-lg font-semibold">{label}</div>
      <div className="mt-3 text-gray-700 text-xl font-medium" dir="ltr">{value}</div>
    </div>
  );
}
