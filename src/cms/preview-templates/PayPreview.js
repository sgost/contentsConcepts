import React from "react";
import PropTypes from "prop-types";
import { Pay } from "../../components/Payment";

const PayPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(['data', 'qrimage']);
    var getImage = getAsset(image);
    if (getImage) {
        var QR_Image = getImage.toString();
    }
    return (
        <Pay
            title={data.title}
            description={data.description}
            description1={data.description1}
            description2={data.description2}
            description3={data.description3}
            description4={data.description4}
            description5={data.description5}
            description6={data.description6}
            description7={data.description7}
            description8={data.description8}
            description9={data.description9}
            description10={data.description10}
            description11={data.description11}
            description12={data.description12}
            description13={data.description13}
            description14={data.description14}
            description15={data.description15}
            description16={data.description16}
            qrimage={QR_Image}
        />
    );

};

PayPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default PayPreview;
