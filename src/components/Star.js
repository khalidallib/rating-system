import { FaStar } from "react-icons/fa";

function Star({ selected, onClick }) {
  return (
    <FaStar
      color={selected ? "gold" : "gray"}
      size={40}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Star;