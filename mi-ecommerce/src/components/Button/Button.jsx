import { useState } from "react";

const Button = ({text, color, fn}) => {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
    fn(count + 1);  // Pasar el nuevo valor del contador
  };

  return (
    <button style={{backgroundColor: color}} onClick={click}>{text}</button>
  );
}

export default Button;
