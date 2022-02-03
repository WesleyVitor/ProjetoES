import "./styles.css";

const Button = ({
    handleProduct = () => {},
    value = "",
    text = "",
    ...rest
}) => {
    return (
        <button className="button" onClick={() => handleProduct(value)} rest>
            {text}
        </button>
    );
};

export default Button;
