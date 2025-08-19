import "./Button.scss";
import {useState} from "react";

interface ButtonProps {
    title: string,
    handleClick: () => void
}

const Button = ({title, handleClick}: ButtonProps) => {
    const [active, setActive] = useState(false);

    return <button className={`Button${active ? ' Button--active' : ''}`} type="button" onClick={() => {setActive(!active); handleClick();}}>{title}</button>;
};

export default Button;