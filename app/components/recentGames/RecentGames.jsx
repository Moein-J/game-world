import Game from "./Game";
import Options from "./Options";
import Pagination from "./Pagination";

const RecentGames = () => {
  return (
    <>
      <section
        className="w-full relative lg:h-[55rem] xl:h-[60rem] flex xs:flex-col lg:flex-row xl:p-10"
        id="recent-games"
      >
        <Options />
        <div className="flex flex-col w-full">
          <div className="flex-grow p-6 h-full overflow-x-auto grid xs:grid-flow-col md:grid-cols-4 md:grid-rows-3 gap-4 ">
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
            <Game
              game={{
                name: "Red dead redemtation 2",
                imgSrc: "/RedDead.jpg",
                repacks: "DODI - FITGIRL | 40 ~ 60 GB",
                category: "اکشن، ماجراجویی",
              }}
            />
          </div>
          <Pagination/>
        </div>
      </section>
    </>
  );
};

export default RecentGames;
