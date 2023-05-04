import ImageItem from "../ImageItem"
import { Row, Col } from "antd";
import styles from './imageList.module.css';

function ImageList({ places, isLoading }) {
  console.log(places);
  return (
    <article className="article">
      <div className="container ">
        <h1 className={styles.textCenter}>IMAGES</h1>
        <hr className={styles.dividerDark} />
        
        < Row gutter={ [32, 32] } >
          {
            places.map(place => (
              <Col
                key={ place.id }
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
                >
                <ImageItem place={place} />
              </Col>
            ))
          }

        </Row>
      </div>
    </article>
  )
}

export default ImageList