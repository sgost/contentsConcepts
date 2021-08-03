import React, { useState } from "react";
import {
    PriceEstimate_main,
    PriceEstimate_container,
    PriceEstimate_container_b1,
    PriceEstimate_container_b2
} from './styles';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const PriceEstimate = () => {
    const time = new Date().toLocaleTimeString();
    const dayNumber = new Date().getDate();
    const year = new Date().getFullYear();
    const dayName = new Date().toLocaleString("default", { weekday: "long" });
    const monthName = new Date().toLocaleString("default", { month: "long" });
  
    const normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const [showUpload, setShowUpload] = useState(true);

    const uploadChange = (data) => {
        if (data.fileList.length > 0) {
            setShowUpload(false);
        }
    };

    const customReqChange = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const removeUploadedFile = () => {
        setShowUpload(true);
    };
    function transformFile(file) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                file.base64 = e.target.result;
                resolve(e.target.result);
            };
        });
    }
    return (
        <PriceEstimate_main>
            <PriceEstimate_container>
                <PriceEstimate_container_b1>
                    <div id="slide_label">
                        <h1>Calculate your price</h1>
                    </div>
                    <div id="slide_label">
                        <label htmlFor="firstName">How many words do you want to edit ?</label>
                        <div id="slider_buttons">
                            <input type="text" id="peinput" value="450" />
                        </div>
                    </div>
                    <div id="slide_label">
                        <label htmlFor="firstName">Choose your service</label>
                        <div id="slider_buttons">
                            <button>Proof Reading & Editing</button>
                            <button>Substantive Editing</button>
                            <button>Plagarism Editing</button>
                        </div>
                    </div>
                    <div id="slide_label">
                        <Form.Item
                            name='categoryFile'
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload name="category" listType="picture" id="categoryFile2" onChange={uploadChange} onRemove={removeUploadedFile} customRequest={customReqChange} transformFile={transformFile} >
                                {
                                    showUpload &&
                                    <Button className="uploadBtn2">
                                        <UploadOutlined /> Click to upload
                                    </Button>
                                }
                            </Upload>
                        </Form.Item>
                    </div>
                </PriceEstimate_container_b1>
                <PriceEstimate_container_b2>
                    <div id="p_b_top_main">
                        <button>₹ INR </button>
                        <button>$ USD</button>
                    </div>
                    <div id="p_b_top">
                        <h1>Total Price</h1>
                        <h2>₹ 4500</h2>
                    </div>
                    <div id="p_b_middle">
                        <h1>Returned before</h1>
                        <h1>{dayName}, {monthName}{dayNumber}, {year}, {time}</h1>
                    </div>
                    <div id="p_b_bottom">
                        <button>Make Payment</button>
                    </div>
                </PriceEstimate_container_b2>
            </PriceEstimate_container>
        </PriceEstimate_main>
    )
}
export default PriceEstimate;