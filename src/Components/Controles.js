import { useDispatch } from "react-redux";
import { nextImage, prevImage } from "../redux/store";

const Controles = () => {
  const dispatch = useDispatch();

  return (
    <div className="controles">
      <button onClick={() => dispatch(prevImage())}>Back</button>
      <button onClick={() => dispatch(nextImage())}>Next</button>
    </div>
  );
};

export default Controles;
