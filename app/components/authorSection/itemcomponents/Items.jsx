"use client";
import Item from "./Item";

const Items = () => {
  return (
    <>
      <div className="flex flex-col h-full w-1/2 justify-center items-center">
        <Item
          game={{
            imgSrc: "/witcher3.jpg",
            name: "Witcher 3 : wild hunt",
            subtitle: "دانلود بازی فوق العاده witcher 3",
            repacks: "fitgirl - dodi | 40 ~ 60 GB",
          }}
        />
        <Item
          game={{
            imgSrc: "/redDead.jpg",
            name: "red dead redemption 2",
            subtitle: "دانلود بازی فوق العاده red dead",
            repacks: "fitgirl - dodi | 40 ~ 60 GB",
          }}
        />

        <Item
          game={{
            imgSrc: "/gta.jpg",
            name: "elden ring",
            subtitle: "داring",
            repacks: "fitgirl0 ~ 60 GB",
          }}
        />
        <Item
          game={{
            imgSrc: "/elden.jpg",
            name: "elden ring",
            subtitle: "دانلود بازی فوق العاده elden ring",
            repacks: "fitgirl - dodi | 40 ~ 60 GB",
          }}
        />
      </div>
    </>
  );
};

export default Items;
