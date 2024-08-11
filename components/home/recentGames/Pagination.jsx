import { ChevronsLeft, ChevronsRight } from "lucide-react";
const Pagination = ({ setPage }) => {
  return (
    <div className="justify-center items-center gap-10 text-[#fff] md:flex hidden">
      <button
        className="cursor-pointer hover:text-textOrange"
        onClick={() => {
          setPage((prev) => {
            if (prev !== 1) {
              return prev - 1;
            }
            return 1;
          });
        }}
      >
        <ChevronsLeft />
      </button>

      <button href="#" className="cursor-pointer hover:text-textOrange">
        1
      </button>
      <button href="#" className="cursor-pointer hover:text-textOrange">
        2
      </button>
      <button href="#" className="cursor-pointer hover:text-textOrange">
        3
      </button>
      <button href="#" className="cursor-pointer hover:text-textOrange">
        4
      </button>
      <button href="#" className="cursor-pointer hover:text-textOrange">
        5
      </button>
      <button
        className="cursor-pointer hover:text-textOrange"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        <ChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
