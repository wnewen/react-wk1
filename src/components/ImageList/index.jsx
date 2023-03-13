import ImageItem from "../ImageItem"
import images from "../../json/images.json"
import { Row, Col } from "antd";
import styles from './imageList.module.css'

function ImageList() {
  return (
    <article className="article">
      <div className="container ">
        <h1 className={styles.textCenter}>IMAGES</h1>
        <hr className={styles.dividerDark} />
        < Row gutter={ [32, 32] } >
          {
            images.map(image => (
              <Col
                key={ image.id }
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
                >
                <ImageItem image={image} />
              </Col>
            ))
          }

        </Row>
      </div>
    </article>
  )
}

export default ImageList