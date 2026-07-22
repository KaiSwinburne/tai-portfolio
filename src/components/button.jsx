export const Button = ({className, px="", py="", children}) => {
    const baseClasses = "relative overflow-hidden font-space-grotesk transition-all duration-300 hover: cursor-pointer"

    const classes = `${baseClasses} ${className} ${px} ${py}`
    return (
    <button className={classes}>
        <span className="relative flex items-center justify-center gap-2">
            {children}
        </span>
    </button>
    );
};