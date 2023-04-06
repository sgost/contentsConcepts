import React from "react";
import service_card from "../../images/service_card.png";
import nib from "../../images/nib.svg";
import { ServiceCardPreview } from "./styles";
import { ArrowRightOutlined } from '@ant-design/icons';


const ServiceCardSec = () => {
    return (
        <ServiceCardPreview>
            <div className="service_card_container">
                <div className="service_card">
                    <img src={service_card} alt="service_card" className="service_image" />
                    <div className="service_desc_div">
                        <h1 className="service_card_title">Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.</h1>
                        <p className="service_points">
                            <img src={nib} className="nib" alt="nib" />
                            Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.                             Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.
                        </p>
                        <p className="service_points">
                            <img src={nib} className="nib" alt="nib" />
                            Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.                             Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.
                        </p>
                        <p className="service_points">
                            <img src={nib} className="nib" alt="nib" />
                            Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.                             Lorem ipsum dolor sit amet consectetur. Odio malesuada eu fames dictum.
                        </p>
                        <button className="more_details_btn">More Details (CTA)<ArrowRightOutlined /></button>
                    </div>
                </div>
            </div>
        </ServiceCardPreview>
    )
}
export default ServiceCardSec;