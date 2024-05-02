import styles from "./Sticky.module.scss";

const Sticky = ({children}) => {
    return (
        <div className={styles.sticky}>
            {children}
        </div>
    )
};
export default Sticky;