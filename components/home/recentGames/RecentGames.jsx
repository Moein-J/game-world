"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Options from "./Options";
import Pagination from "./Pagination";
import Actions from "./Actions";

const queryClient = new QueryClient();

const RecentGames = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <section
        className="w-full relative lg:h-[55rem] xl:h-[60rem] flex xs:flex-col lg:flex-row xl:p-10"
        id="recent-games"
      >
        <Options />
        <div className="flex flex-col w-full">
          <div className="flex-grow p-6 h-full overflow-x-auto grid xs:grid-flow-col md:grid-cols-4 md:grid-rows-3 gap-4">
            <QueryClientProvider client={queryClient}>
                <Actions page={page} />
            </QueryClientProvider>
          </div>
          <Pagination setPage={setPage} />
        </div>
      </section>
    </>
  );
};

export default RecentGames;

