import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setMode } from "../store/theme";

const HomePage = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <h2>Home Page</h2>
      <h3>Current Mode</h3>
      <span>{`<< ${mode} >>`}</span>

      <ul>
        <h3>Theme Mode Changer</h3>
        <li>
          <button onClick={() => dispatch(setMode("dark"))}>Dark mode</button>
        </li>
        <li>
          <button onClick={() => dispatch(setMode("bright"))}>
            Bright mode
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(setMode("default"))}>
            Default mode
          </button>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
