import Author from 'src/UI/Author/Author';
import styles from './Cardpost.module.scss'
import Link from 'next/link';

const Cardpost = () => {
    return(
        <div className={styles.post}>
          <div className={styles.image}></div>
            <div className={styles.content}>
              <h2 className="h3">Título do post</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled
                   it to make a type specimen book.
              </p>
              <div className={styles.footer}>
              <Author author={getAuthor} date={publishedAt} />
                <Link href={`/post/nome-do-post`} className="h5"> Continuar lendo&rarr;</Link>
              </div>
            </div>
          </div>
          
    )
}

export default Cardpost;