import Items from "./itemcomponents/Items";
import SelectedItem from "./itemcomponents/SelectedItem";

const AuthorSuggest = () => {
  return (
    <section className="w-full flex">
      <div className="flex flex-col w-[40%] p-10">
        <div className="w-full h-[19rem] flex justify-center items-center border-2 border-[#9a9a9a] text-[#ffffff]">
          <p>تبلیغ</p>
        </div>
        <div className="w-full h-[19rem] flex justify-center items-center border-2 border-[#9a9a9a] text-[#ffffff]">
          <p>تبلیغ</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center">
        <div
          className="w-[90%] flex h-[90%] relative bg-cover rounded-xl"
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
