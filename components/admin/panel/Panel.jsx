import Link from "next/link";
import Item from "./Item";
import Title from "./Title";
import {
  LayoutDashboard,
  ArrowsUpFromLine,
  ShieldCheck,
  Users,
  Settings,
  MessageSquare,
  GitPullRequestCreateArrow,
  ShoppingBasket,
} from "lucide-react";

const Panel = () => {
  const items = [
    { url: "/admin/dashboard", text: "داشبورد", icon: <LayoutDashboard /> },
    { url: "/admin/posts", text: "مدیریت پست ها", icon: <ArrowsUpFromLine /> },
    { url: "/admin/manage", text: "مدیریت ادمین ها", icon: <ShieldCheck /> },
    { url: "/admin/users", text: "کاربران", icon: <Users /> },
    { url: "/admin/messages", text: "پیام ها", icon: <MessageSquare /> },
    {
      url: "/admin/requests",
      text: "درخواست ها",
      icon: <GitPullRequestCreateArrow />,
    },
    { url: "/admin/orders", text: "سفارش ها", icon: <ShoppingBasket /> },
    { url: "/admin/settings", text: "تنظیمات سایت", icon: <Settings /> },
  ];
  return (
    <section className="flex select-none flex-col items-center gap-4 w-[13%] border-l-2 border-[#9a9a9a80] p-4">
      {/* Upper section (title) */}
      <Title />

      {/* Panel Items */}
      <section className="p-6 gap-3 flex flex-col w-full flex-grow  text-xl text-[#9a9a9a]">
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </section>
      {/* exit section */}
      <Link
        href={"/"}
        className="p-4 w-full rounded-xl text-center mb-4 bg-[#973636] text-[#9a9a9a] hover:text-[#fff] transition-all"
      >
        خروج
      </Link>
    </section>
  );
};

export default Panel;
