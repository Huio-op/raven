import styles from "./IconButton.module.css";


const IconButton = ({icon, counter = null, className}) => {
    return (
        <div className={`${styles.IconButton} ${className}`}>
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