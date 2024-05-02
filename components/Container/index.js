import classnames from 'classnames/bind';

import styles from "./Container.module.scss";

const cx = classnames.bind(styles);

const Container = ({ children, max }) => {
    const containerClasses = cx({
        container: true,
        max: max
    });

    return (
        <div className={containerClasses}>
            {children}
        </div>
    );
};
export default Container;