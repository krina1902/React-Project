import { Fade,Zoom,Jump } from "react-swift-reveal";
import "./ani.css"

const Animation = () => {
  return (
    <>
    <Fade timeout={10000} count={5}>
      <h1>hello world</h1>
    </Fade>

    <Zoom timeout={10000} count={5}>
    <h1 className="squ"></h1>
    </Zoom>

    <Jump timeout={1000} forever duration={10000}>
    <h1 className="box"></h1>
    </Jump>
</>
  );
};
export default Animation;