import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomGreeting } from '../redux/messages/greetingSlice';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomGreeting());
  }, [dispatch]);

  return (
    <>
      <p>{greeting.greeting}</p>
    </>
  );
}

export default Greeting;