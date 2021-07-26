import React, {useState} from "react";
import {
    PriceEstimate_main,
    PriceEstimate_container,
    PriceEstimate_container_b1,
    PriceEstimate_container_b2
  } from './styles';
  import { Slider } from 'antd';

const PriceEstimate = () => {
    const [Prize, setPrize] = useState("")
    const marks = {
        0: "",
        75: '',
        150: "",
      };
      function formatter(value) {
        return `${value}Hours`;
      }
    return (
        <PriceEstimate_main>
            <h1>Estimate your price</h1>
            <PriceEstimate_container>
                <PriceEstimate_container_b1>
                <div id="slide_label">
                <label>How many words do you want to edit ?</label>
                <div id="slider_cont">
                <Slider defaultValue={30} max={100000}
                  />
                </div>
                </div>
                <div id="slide_label">
                <label>How fast do you want your document delivered ?</label>
                <div id="slider_cont">
                <Slider marks={marks} defaultValue={37} max={150} tipFormatter={formatter}/>
                </div>
                </div>
                <div id="slide_label">
                <label>Choose your service</label>
                <div id="slider_buttons">
                <button>ENGLISH EDITING</button>
                <button>SCIENTIFIC EDITING</button>
                <button>PREMIUM EDITING</button>
                </div>
                </div>
                </PriceEstimate_container_b1>
                <PriceEstimate_container_b2>
                <div id="docselectorbox">
                <select
                  className="custom-select"
                  value={Prize}
                  onBlur={""}
                  onChange={e => {
                    const selectedDoctor = e.target.value
                    setPrize(selectedDoctor)
                  }}
                ><option value="$">$</option>
                  <option value="₹">₹</option>
                </select>
                </div>
                <div id="p_b_top">
                    <h1>Total Price</h1>
                    <h2>{Prize ? (<span>{Prize}</span>) : (<span>$</span>)}40</h2>
                </div>
                <div id="p_b_middle">
                    <h1>Returned before</h1>
                    <h1>Friday, Jul 16, 2021, 12:47 PM</h1>
                </div>
                <div id="p_b_bottom">Upload your document</div>
                </PriceEstimate_container_b2>
            </PriceEstimate_container>
        </PriceEstimate_main>
    )
}
export default PriceEstimate;