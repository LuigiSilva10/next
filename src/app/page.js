import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        
        <Image
          className={styles.logo}z
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
        
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            O que é um framework?<span>-&gt;</span>
          </h2>
          <p>
          Um framework é uma estrutura que serve de base para a construção de aplicações web de finalidade específica cujo desenvolvimento pode ser muito custoso e/ou problemático. Com um framework é possível construir sites, aplicativos e softwares a partir de um esqueleto pré-definido, alterando apenas demais particularidades.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            O que é o Next.JS? <span>-&gt;</span>
          </h2>
          <p>Com Next.js, você pode construir interfaces de usuário usando componentes React. Sob o capô, o Next.js também abstrai e configura automaticamente as ferramentas para você, como agrupamento, compilação e muito mais. Isso permite que você se concentre na construção de seu aplicativo em vez de gastar tempo configurando ferramentas.</p>
        </a>

        <a
          href="https://github.com/vercel/next.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Comunidade<span>-&gt;</span>
          </h2>
          <p>Comunidade do Next no GitHub</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Empresas que utilizam<span>-&gt;</span>
          </h2>
          <p>
            Facebook, Instagram, Twitter, Netflix, Uber, Spotify entre outros que estão começando a aderir.
          </p>
        </a>
      </div>
    </main>
  )
}
