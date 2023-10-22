import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IMG_URL } from "../../../config";

const AdsSearchItem = (props) => {
  return (
    <Card className=" col-sm-4 text-center">
      <Card.Img variant="top" src={`${IMG_URL}/${props.photo}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.loc}</Card.Text>
        <Button as={NavLink} to={`/page/${props.id}`}>
          Show more
        </Button>
      </Card.Body>
    </Card>
  );
};
export default AdsSearchItem;