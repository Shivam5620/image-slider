import { useSelector } from "react-redux";

const Image = () => {
  const currentIndex = useSelector((state) => state.currentIndex);
  console.log(currentIndex);
  const images = useSelector((state) => state.images);
  console.log(">>>>>>>>>>>", images);
  return (
    <>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide${(currentIndex + 1)}`} />
      </div>
    </>
  );
};
export default Image;
