import Buttons from './Button';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const Modes = [
    {
      name: "Super-XO",
      route: "/super"
    },
    {
      name: "Tic-Tac-Toe",
      route: "/regular"
    }
  ];

  return (
    <div className='w-full flex flex-col gap-48'>
      <div className='font-banger text-6xl text-center text-white bg-secondary py-4'>
        <h1>Super-XO!</h1>
      </div>
      <div>
        <Stack direction='row' spacing='4in' alignItems='center' justifyContent='center' marginTop='100px'>
          {Modes.map((mode) => (
            <Link to={mode.route}><Buttons name={mode.name} /></Link>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default LandingPage;
