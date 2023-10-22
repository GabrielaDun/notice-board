import { Row } from "react-bootstrap";
import AdsSearchItem from "../AdsSearchItem/AdsSearchItem";

const AdsSearchList = (props) => {
  return (
    <Row className="my-3">
      {props.ads.map((ad) => {
        return (
          <AdsSearchItem
            key={ad._id}
            id={ad._id}
            title={ad.title}
            loc={ad.loc}
            photo={ad.photo}
          />
        );
      })}
    </Row>
  );
};

export default AdsSearchList;