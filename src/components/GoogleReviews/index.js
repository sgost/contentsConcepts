import React from "react";
import { GoogleReviewsSection } from "./styles";
import google_icon from "../../images/google_icon.svg";
import userAvatar from "../../images/userAvatar.png";

const GoogleReviews = () => {
    return (
        <GoogleReviewsSection>
            <h1 className="review_title"><img src={google_icon} alt="img" className="google_icons" />Google Reviews</h1>
        </GoogleReviewsSection>
    )
}
export default GoogleReviews;