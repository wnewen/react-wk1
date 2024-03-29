import Header from "../../components/Header"
import ImageList from "../../components/ImageList"
import Description from "../../components/Description"
import Footer from "../../components/Footer"
import styles from './home.module.css'
import { usePlaces } from "../../react-query"



function Home() {

    const { data, isLoading } = usePlaces();
    const places = data || [];
    return (
        <div className={styles.mainLayout}>
            <Header className={styles.layoutHeader} />
            <ImageList places={places} isLoading={isLoading} className={styles.layoutContent} />
            <Description className={styles.layoutContent} />
            <Footer className={styles.layoutFooter} />
        </div>
    )
}

export default Home