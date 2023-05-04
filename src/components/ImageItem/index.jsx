import styles from './imageItem.module.css'

function ImageItem({ place }) {
    return (
        <div className="image mt-4 col-sm-6 col-lg-3">
            <a href="" className={styles.imageLink}>
                <img src={ place.adress } alt="" className={styles.imageStyle} />
            </a>
            <p className="image_title">{place.title}</p>
        </div>
    )
}

export default ImageItem