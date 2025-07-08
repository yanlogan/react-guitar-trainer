import "./Button.scss";

interface ButtonProps {
    title: string,
    handleClick: () => void
}

const Button = ({title, handleClick}: ButtonProps) => {
    return <button className="Button" type="button" onClick={handleClick}>{title}</button>;
};

export default Button;