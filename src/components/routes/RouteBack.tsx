import {useNavigate} from "react-router-dom";
import MyButton from "../ui/MyButton/MyButton";

const RouteBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyButton title='Go back' onClick={() => navigate(-1)} />
    </div>
  );
}

export default RouteBack;
