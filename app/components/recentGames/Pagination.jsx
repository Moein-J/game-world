import { ChevronsLeft, ChevronsRight } from "lucide-react";
const Pagination = () => {
  return (
    <div className="justify-center items-center gap-10 text-[#fff] md:flex hidden">
      <button href="#" className="cursor-pointer hover:text-textOrange">
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
      <button href="#" className="cursor-pointer hover:text-textOrange">
        <ChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
