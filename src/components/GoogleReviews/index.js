import React from "react";
import { GoogleReviewsSection } from "./styles";
import google_icon from "../../images/google_icon.svg";
import userAvatar from "../../images/userAvatar.png";
import { StarFilled } from '@ant-design/icons';

const GoogleReviews = () => {
    return (
        <GoogleReviewsSection>
            <h1 className="review_title"><img src={google_icon} alt="img" className="google_icons" />Google Reviews</h1>
            <div className="review_card">
                <div className="review_card_user_container">
                    <div className="review_card_name_container">
                        <img src={userAvatar} alt="alt" className="user_avatar" />
                        <div className="name_container">
                            <p className="user_name">Arlene McCoy</p>
                            <p className="date">5. May, 2020.</p>
                        </div>
                        <img src={google_icon} alt="alt" className="user_google_icon" />
                    </div>
                    <div className="review_card_rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                    </div>
                    <div className="card_desc">
                        <p>I am pleased with the service you provided for me. The edits were very professional, comprehensive and cohesive to the point. As a reader’s perspective, changes really lifted the quality of the manuscript without shedding of its core meanings. We honestly thank you, for your comments, excellent edits and dedicated support.</p>
                    </div>
                </div>
                <div className="review_card_user_container">
                    <div className="review_card_name_container">
                        <img src={userAvatar} alt="alt" className="user_avatar" />
                        <div className="name_container">
                            <p className="user_name">Arlene McCoy</p>
                            <p className="date">5. May, 2020.</p>
                        </div>
                        <img src={google_icon} alt="alt" className="user_google_icon" />
                    </div>
                    <div className="review_card_rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                    </div>
                    <div className="card_desc">
                        <p>I am pleased with the service you provided for me. The edits were very professional, comprehensive and cohesive to the point. As a reader’s perspective, changes really lifted the quality of the manuscript without shedding of its core meanings. We honestly thank you, for your comments, excellent edits and dedicated support.</p>
                    </div>
                </div>
                <div className="review_card_user_container">
                    <div className="review_card_name_container">
                        <img src={userAvatar} alt="alt" className="user_avatar" />
                        <div className="name_container">
                            <p className="user_name">Arlene McCoy</p>
                            <p className="date">5. May, 2020.</p>
                        </div>
                        <img src={google_icon} alt="alt" className="user_google_icon" />
                    </div>
                    <div className="review_card_rating">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                    </div>
                    <div className="card_desc">
                        <p>I am pleased with the service you provided for me. The edits were very professional, comprehensive and cohesive to the point. As a reader’s perspective, changes really lifted the quality of the manuscript without shedding of its core meanings. We honestly thank you, for your comments, excellent edits and dedicated support.</p>
                    </div>
                </div>
            </div>
        </GoogleReviewsSection>
    )
}
export default GoogleReviews;