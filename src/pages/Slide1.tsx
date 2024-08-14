
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import logo from "../assets/logo.svg";

export const Slide1 = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/slide2'),
  });

  return (
    <div {...handlers} className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col max-w-sm justify-center gap-9">
          <img className="w-full size-1/3" src={logo} alt="" />

          <p className="text-center leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
    </div>
  );
};

