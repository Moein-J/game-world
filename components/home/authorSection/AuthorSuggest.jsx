import Items from "./itemcomponents/Items";
import SelectedItem from "./itemcomponents/SelectedItem";

const AuthorSuggest = () => {
  return (
    <section className="w-full flex xl:flex-row xs:flex-col">
      <div className="flex xl:flex-col md:flex-row xs:flex-col xl:w-[40%] xs:w-full gap-2 p-10">
        <div className="w-full h-[19rem] flex justify-center items-center border-2 border-[#9a9a9a] text-[#ffffff]">
          <p>تبلیغ</p>
        </div>
        <div className="w-full h-[19rem] flex justify-center items-center border-2 border-[#9a9a9a] text-[#ffffff]">
          <p>تبلیغ</p>
        </div>
      </div>
      <div className="md:flex md:flex-col flex justify-center w-full items-center">
        <div
          className="w-[90%] md:flex md:h-[90%] h-[32rem]  relative bg-cover rounded-xl"
          style={{ backgroundImage: `url("/witcher3.jpg")` }}
        >
          <p className="inline-block absolute right-6 top-4 p-2 px-4 rounded-lg text-sm text-[#ffffff] bg-[#e58e27] bg-opacity-55">
            پیشنهاد سردبیر
          </p>

          <Items />
          <SelectedItem />

        </div>
      </div>
    </section>
  );
};

export default AuthorSuggest;
