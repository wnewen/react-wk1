import styles from './imageItem.module.css'

function ImageItem({ image }) {
    return (
        <div className="image mt-4 col-sm-6 col-lg-3">
            <a href="" className={styles.imageLink}>
                <img src={ image.adress } alt="" className={styles.imageStyle} />
            </a>
            <p className="image_title">{image.title}</p>
        </div>
    )
}

export default ImageItem