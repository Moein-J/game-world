import { Suspense } from "react";
import Options from "./Options";
import Pagination from "./Pagination";
import Loading from "./loading";
import Actions from "./Actions";

const RecentGames = async () => {
  return (
    <>
      <section
        className="w-full relative lg:h-[55rem] xl:h-[60rem] flex xs:flex-col lg:flex-row xl:p-10"
        id="recent-games"
      >
        <Options />
        <div className="flex flex-col w-full">
          <div className="flex-grow p-6 h-full overflow-x-auto grid xs:grid-flow-col md:grid-cols-4 md:grid-rows-3 gap-4">
            <Suspense fallback={<Loading />}>
              <Actions />
            </Suspense>
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default RecentGames;

// "use client";
// import { Suspense } from "react";
// import Game from "./Game";
// import Options from "./Options";
// import Pagination from "./Pagination";
// import axios from "axios";
// import Loading from "./Loading";
// import {
//   QueryClientProvider,
//   QueryClient,
//   useQuery,
// } from "@tanstack/react-query";

// const RecentGames = () => {
//   const queryClient = new QueryClient();

//   // let games;
//   // try {
//   //   const res = await axios.get("http://localhost:2222/games", {
//   //     data: {
//   //       projection: {
//   //         _id: 1,
//   //         name: 1,
//   //         tags: 1,
//   //         information: 1,
//   //         repacksList: 1,
//   //         category: 1,
//   //       },
//   //     },
//   //   });
//   //   games = await res.data;
//   // } catch (error) {}

//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <Example/ >
//       </QueryClientProvider>
//     </>
//   );
// };

// const Example = () => {
//   const { isPending, data: games } = useQuery({
//     queryKey: ["first"],
//     queryFn: async () => {
//       const data = await axios.get("http://localhost:2222/games", {
//         data: {
//           projection: {
//             _id: 1,
//             name: 1,
//             tags: 1,
//             information: 1,
//             repacksList: 1,
//             category: 1,
//           },
//         },
//       });
//       return data.data;
//     },
//   });
//   if (isPending) return <p className="text-[#fff] text-3xl">Loading</p>
//   return (
//     <>
//       <section
//         className="w-full relative lg:h-[55rem] xl:h-[60rem] flex xs:flex-col lg:flex-row xl:p-10"
//         id="recent-games"
//       >
//         <Options />
//         <div className="flex flex-col w-full">
//           <div className="flex-grow p-6 h-full overflow-x-auto grid xs:grid-flow-col md:grid-cols-4 md:grid-rows-3 gap-4 ">
//             <Suspense fallback={<Loading />}>
//               {games &&
//                 games.map((game) => (
//                   <Game
//                     key={game._id}
//                     game={{
//                       id: game._id,
//                       name: game.name,
//                       imgSrc: "/RedDead.jpg",
//                       repacks: game.repacksList,
//                       category: game.category,
//                     }}
//                   />
//                 ))}
//             </Suspense>
//           </div>
//           <Pagination />
//         </div>
//       </section>
//     </>
//   );
// };

// export default RecentGames;
