
import { useNavigation } from 'react-router-dom';

const NavigationIndicator = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  if (!isNavigating) return null;

  return (
    <div className='size-8 bg-blue-400 rounded-full animate-blink'>
     
    </div>
  );
};

export default NavigationIndicator;