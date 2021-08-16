import React from "react";
import { PayContainer } from "./styles";
import qr from "../../images/patnerqr.svg";

const Pay = () => {
    return (
        <>
            <PayContainer>
                <div id="pays">
                    <h1 id="pop_title">Payment Options</h1>
                    <p id="pop_description">If you are outside India, please use this link to pay via PayPal <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f118608d37839&mfid=1628774383185_f118608d37839#/checkout/openButton" target="_blank" without rel="noreferrer" >Click here</a></p>
                    <div id="pay_containers">
                        <div id="pay_container_block1s">
                            <h1 id="title">Scan the QR Code to make Payment</h1>
                            <img src={qr} alt="qr" id="payqrs" />
                        </div>
                        <div id="pay_container_block2s">
                            <h1>Scan the QR Code to make Payment</h1>
                            <p id="notes">If you are not able to use the QR code, please select the right payment option that works for you:
                            </p>
                            <p>●  UPI - Pay to the following UPI account - <span>contentconcepts@icici</span> (Via PhonePe, Google Pay or any other payment app or from your bank mobile app)</p>
                            <p>●  You can pay to the following bank account via online banking A/c no - <span>034201526268</span> | Branch: <span>RS Puram Coimbatore</span> |  Bank: <span>ICICI Bank </span></p>
                            <p>Name: <span>DHANALAKSHMI N</span></p>
                            <p>IFSC - <span>ICIC0000342</span></p>
                        </div>
                    </div>
                </div>
            </PayContainer>
        </>
    )
}
export default Pay;