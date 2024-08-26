import styles from './Heading.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'src/UI/Author/Logo/Logo';

const Heading = () => {
    return (
        <section className={styles.heading}>
           <Logo />
            <div className={styles.search}>
                <form>
                    <label htmlFor="search">buscar</label>
                    <input type='text' name='search' id='search' placeholder='buscar artigos' />
                    <button className={styles.button}>
                        <BiSearchAlt />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Heading;