import CardData from "../CardData";
import {
  ShoppingCart,
  ClipboardCheck,
  ScanEye,
  UserRoundCheck,
  MessageCircle,
} from "lucide-react";

const latestPosts = [
  { date: "1403/2/1", author: " توسط احمد", name: "Resident evil 4 بازی" },
  { date: "1403/4/12", author: "توسط رضا", name: "witcher 3 بازی" },
  { date: "1403/10/1", author: "توسط محسن", name: "elden ring بازی" },
  { date: "1403/3/20", author: "توسط جمال", name: "cs2 بازی" },
  { date: "1402/1/18", author: "توسط علی", name: "dark souls بازی" },
];
const topPosts = [
  { value: "20,000", author: " توسط احمد", name: "Resident evil 4 بازی" },
  { value: "10,000", author: "توسط رضا", name: "witcher 3 بازی" },
  { value: "200,000", author: "توسط محسن", name: "elden ring بازی" },
  { value: "40,000", author: "توسط جمال", name: "cs2 بازی" },
  { value: "2,000", author: "توسط علی", name: "dark souls بازی" },
];
const latestPurchases = [
  {
    date: "1403/2/1",
    author: " توسط کاربر احمد",
    name: "Resident evil 4 بازی",
  },
  { date: "1403/4/12", author: "توسط کاربر رضا", name: "witcher 3 بازی" },
  { date: "1403/10/1", author: "توسط کاربر محسن", name: "elden ring بازی" },
  { date: "1403/3/20", author: "توسط کاربر جمال", name: "cs2 بازی" },
  { date: "1402/1/18", author: "توسط کاربر علی", name: "dark souls بازی" },
];
const comments = [
  {
    date: "1403/2/1",
    author: " توسط کاربر احمد",
    name: "... بازی خوبی",
  },
  { date: "1403/4/12", author: "توسط کاربر رضا", name: "... سیستم من" },
  { date: "1403/10/1", author: "توسط کاربر محسن", name: "... راضی نبودم " },
  { date: "1403/3/20", author: "توسط کاربر جمال", name: "... مشکل گرافیکی " },
  { date: "1402/1/18", author: "توسط کاربر علی", name: "... سایت بسیار " },
];
const users = [
  { date: "1403/2/1", name: "ahmad" },
  { date: "1403/4/12", name: "alpha" },
  { date: "1403/10/1", name: "reza" },
  { date: "1403/3/20", name: "pori" },
  { date: "1402/1/18", name: "beta" },
];

export const cardsData = [
  {
    icon: (
      <ClipboardCheck
        opacity={0.5}
        size={100}
        color="#9a9a9a"
        strokeWidth={1.75}
      />
    ),
    text: "پست بارگزاری شده",
    value: "4,000",
    CardData: <CardData list={latestPosts} title={"آخرین پست ها"} />,
    bgColor: "bg-[#36383f]",
  },
  {
    icon: (
      <ScanEye opacity={0.5} size={100} color="#9a9a9a" strokeWidth={1.75} />
    ),
    text: "بازدید از پست ها",
    value: "900,000",
    CardData: <CardData list={topPosts} title={"پربازدید ترین پست ها"} />,
    bgColor: "bg-[#161a1e]",
  },
  {
    icon: (
      <ShoppingCart
        opacity={0.5}
        size={100}
        color="#9a9a9a"
        strokeWidth={1.75}
      />
    ),
    text: "خرید انجام شده",
    value: "2,000",
    CardData: <CardData list={latestPurchases} title={"آخرین خرید ها"} />,
    bgColor: "bg-[#102f2e]",
  },
  {
    icon: (
      <UserRoundCheck
        opacity={0.5}
        size={100}
        color="#9a9a9a"
        strokeWidth={1.75}
      />
    ),
    text: "کاربر",
    value: "1,000",
    CardData: <CardData list={users} title={"لیست کاربران"} />,
    bgColor: "bg-[#0d162d]",
  },
  {
    icon: (
      <MessageCircle
        opacity={0.5}
        size={100}
        color="#9a9a9a"
        strokeWidth={1.75}
      />
    ),
    text: "نظر",
    value: "1,000",
    CardData: <CardData list={comments} title={"آخرین نظرات"} />,
    bgColor: "bg-[#23120f]",
  },
];
