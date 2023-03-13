import styles from './footer.module.css'

function Footer() {
    return (
        <footer className="footer">
            <div className={styles.footerAbove}>
                <div className="container">
                    <div className={styles.row}>
                        <h5 className={styles.footerDescription}>
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                        </h5>
                        <ul className="footer__list col-lg-4">
                            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
                            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerBelow}>
                <div className="container">
                    <h6 className={styles.h6}>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer