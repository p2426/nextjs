import Head from 'next/head'
import styles from '../../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>P</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
};

export default Layout;