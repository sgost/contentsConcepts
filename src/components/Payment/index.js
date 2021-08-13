import React from "react";
import { PayContainer } from "./styles";
import qr from "../../images/patnerqr.svg";

const Pay = () => {
    return (
        <>
            <PayContainer>
                <div id="pays">
                    <h1 id="pop_title">Payment Options</h1>
                    <div id="pay_containers">
                        <div id="pay_container_block1s">
                            <h1 id="title">Scan the QR Code to make Payment</h1>
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
                            <li>If you are outside India, please use this link to pay via PayPal - <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f118608d37839&mfid=1628774383185_f118608d37839#/checkout/openButton" target="_blank" without rel="noreferrer" >Click here</a></li>
                        </div>
                    </div>
                </div>
            </PayContainer>
            {/* paypal Link */}
            {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="4TBCSQSB7GVPW" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form> */}
        </>
    )
}
export default Pay;