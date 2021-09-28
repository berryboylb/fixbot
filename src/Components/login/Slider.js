import { Carousel } from 'react-carousel-minimal';
import H1 from '../H1';
import P from '../P';
import Styles from './css/style.module.css'

function Slider() {
    const header = "Dazboard";
    const paragraph = "Manage your project and team in easy way"
 const data = [
    {
      image: "./images/Slide.png"
    },
    {
      image: "./images/Slide.png"
    },
    {
      image: "./images/Slide.png"
    }
  ];

 
  return (
    <div className={Styles.cap}>
        <div className={Styles.inner}>
        <H1 content ={header}/>
        <P content={paragraph}/>
          <div className={Styles.slideCon}>
            <Carousel
              data={data}
              time={2000}
              controls={false}
              width="100%"
              height="100%"
              automatic={true}
              dots={true}
              pauseIconColor="#E5E5E5"
              slideBackgroundColor="#E5E5E5"
              slideImageFit="contain"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "100%",
                zIndex: 1,
              }}
            />
        </div>
        </div>
    </div>
  );
}

export default Slider
