import "./CheckBox.css";

const CheckBox = ({ name, text }) => {
  const style = {
    appearance: "none",
    backgroundColor: "#fff",
    margin: 0,
    color: "black",
    width: "1.15em",
    height: "1.15em",
    border: "0.15em solid black",
    borderRadius: "0.15em",
  };
  return (
    <label htmlFor={name} className="pt-4 flex items-center">
      {text}
      <input type="checkbox" name={name} value={name} />
    </label>
  );
};

export default CheckBox;
