//import Button from '../../common/Button/Button';
//import PageTitle from '../../common/PageTitle/PageTitle';
import { useSelector} from 'react-redux';
import AdBox from '../AdBox/AdBox';
import { getAllOffers } from '../../../redux/adsRedux';
import { Row, Col } from "react-bootstrap";




const Ads = () => {
    const ads = useSelector(getAllOffers);

    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {ads.map(ad => (
                <Col key={ad.id}>
                    <AdBox key={ad.id} {...ad} />
                </Col>
            ))}

        </Row>

    )
};
  
  export default Ads; 