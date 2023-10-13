import styles from './PageTitle.module.scss'

const PageTitle = props => {
    return (
        <div>
            <div className={styles.title}>
                {props.children}
            </div>
        </div>
    );
};

export default PageTitle;