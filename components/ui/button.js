const Button = ({ title, ...restProps }) => {
    return (
        <button className="button bg-yellow text-xs" {...restProps}>
            {title}
        </button>
    );
};

export default Button;
