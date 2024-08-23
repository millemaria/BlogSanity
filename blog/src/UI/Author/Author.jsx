import styles from './Author.module.scss';

const Author = () => {
    return (
        <div className={styles.author}>
        <div className={sytles.image}></div>
        <div className={styles.content}>
        <span className={sytles.name}>Jorge Amaral</span>
        <span className={sytles.date}>22 de novembro</span>
        </div>
        </div>
    );
};

export default Author;