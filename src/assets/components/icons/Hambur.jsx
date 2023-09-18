import { UserContext } from "../../../../UserContext";
import { useContext } from "react";
function Hambur() {
  const {isHambur, setIsHambur, resetHambur } = useContext(UserContext);
  function toggleHamburger() {
    setIsHambur(!isHambur)
  }
  return (
    <svg
      onClick={()=>{
        toggleHamburger()
        resetHambur() 

      }}
      className="hambur-icon"
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      <rect y="11" width="24" height="2" rx="1" />
      <rect y="4" width="24" height="2" rx="1" />
      <rect y="18" width="24" height="2" rx="1" />
    </svg>
  );
}

export default Hambur;
