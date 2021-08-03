import React from "react";
import { PayContainer } from "./styles";
import qr from "../../images/patnerqr.svg";

const Pay = () => {
    return (
        <>
            <PayContainer>
                <div id="pays">
                    <h1>Payment Options</h1>
                    <div id="pay_containers">
                        <div id="pay_container_block1s">
                            <img src={qr} alt="qr" id="payqrs" />
                        </div>
                        <div id="pay_container_block2s">
                            <h1>Scan the QR Code to make Payment</h1>
                            <p id="notes">If you are not able to use the QR code, please select the right payment option that works for you:
                            </p>
                            <li>UPI - Pay to the following UPI account - <span>contentconcepts@icici</span> (Via PhonePe, Google Pay or any other payment app or from your bank mobile app)</li>
                            <li>You can pay to the following bank account via online banking A/c no - <span>034201526268</span> | Branch: <span>RS Puram Coimbatore</span> |  Bank: <span>ICICI Bank </span></li>
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