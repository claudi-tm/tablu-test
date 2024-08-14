
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import logo from "../assets/logo.svg";
import { Button } from '../components/button';
import { Line } from '../components/line';

export const Slide2 = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => navigate('/'),
  });

  return (
    <div {...handlers} className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col  items-center h-screen">
        <div className="max-w-80 flex flex-col gap-3">
          <div className="flex flex-col max-w-sm mt-2 gap-9">
            <img className="w-full size-1/3" src={logo} alt="" />

            <p className="text-center leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>

          <div className='flex flex-col gap-3 items-start justify-start text-left'>
            <Line/>
            <Line/>
            <Line/>
          </div>

          <Button text='Iniciar' onClick={() => navigate('/main')} />
        </div>


      </div>

    </div>
  );
};

