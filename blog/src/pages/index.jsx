import styles from 'styles/Home.module.scss'
import Link from 'next/link';

export default function Home() {
  return (
    <section className={StylePropertyMap.page}>
      <h1>Últimos artigos do Minimal Blog</h1>
      <div>
        <Cardpost />
        <Cardpost />
        <Cardpost />
      </div>
    </section>
  )
}
      