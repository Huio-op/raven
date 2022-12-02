import styles from "./IconButton.module.css";


const IconButton = ({icon, counter = null, className, onClick}) => {
    return (
        <div className={`${styles.IconButton} ${className}`} onClick={onClick}>
            <span className="material-icons">
                {icon}
            </span>
            {counter &&
                <span>
                    {counter}
                </span>
            }

        </div>
    )
}

export default IconButton;