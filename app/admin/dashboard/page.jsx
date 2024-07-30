import Card from "@/components/admin/dashboard/Card";
import { cardsData } from "@/components/admin/dashboard/data/data";
import { BarChart3 } from "lucide-react";

const page = () => {
  return (
    <>
      <section className="w-full h-full flex flex-col items-end gap-6">
        <h1 className="text-3xl text-[#9a9a9a] px-20">داشبورد</h1>
        <section
          id="dashboard-container"
          className="w-full grid grid-cols-3 grid-rows-2 flex-grow gap-4"
        >
          {cardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              text={card.text}
              value={card.value}
              CardData={card.CardData}
              bgColor={card.bgColor}
            />
          ))}

          <div className="px-20">
            <div className="bg-[#181817] w-full h-full rounded-xl flex flex-col gap-10 justify-center items-center">
              <BarChart3 size={80} color="#fff" />
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-16 py-8 font-medium text-[#ffffff] transition-colors">
                ورود به صفحه نمودار ها و آنالیز
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
