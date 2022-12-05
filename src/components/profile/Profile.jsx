import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import ProfileData from "../ProfileData";
function Profile({ img, fullName, bio, profession, ProfileFn }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>
            <h1> {fullName}</h1>

            <h3>Bio:</h3> 
            <p>{bio}</p> 
            <h3>Profession:</h3>   
            <p> {profession}</p>
          </Card.Text>
          <Button variant="outline-info" onClick={() => ProfileFn(fullName)}>
             Click Here 
          </Button>{' '}
        </Card.Body>
      </Card>
    </div>
  );
}
Profile.prototype = {
  fullName: PropTypes.string,
  img: PropTypes.string,
};

ProfileData.defaultProps = {
  img: "https://www.logiquetechno.com/wp-content/uploads/2020/11/retirer-photo-de-profil-facebook.png",
};

export default Profile;
