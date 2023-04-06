import React from "react";
import userAvatar from "../../images/userAvatar.png";
import { NativeEditorPreview } from "./styles";


const NativeEditorsSec = () => {
    return (
        <NativeEditorPreview>
            <h1 className="native_editor_preview_title">Manuscript Editors & Native English Editors</h1>
            <div className="nativeEditor_div">
                <div className="native_editor_card">
                    <div className="native_editor_img">
                        <img src={userAvatar} alt="userAvatar" />
                    </div>
                    <h1 className="user_card_title">Victor Rice</h1>
                    <p className="user_card_description">Customer Engagement Manager CADD Centre</p>
                    <p className="card_desc_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium scelerisque neque amet consectetur adipiscing elit. Nunc pretium scelerisque neque amet </p>
                </div>
                <div className="native_editor_card">
                    <div className="native_editor_img">
                        <img src={userAvatar} alt="userAvatar" />
                    </div>
                    <h1 className="user_card_title">Victor Rice</h1>
                    <p className="user_card_description">Customer Engagement Manager CADD Centre</p>
                    <p className="card_desc_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium scelerisque neque amet consectetur adipiscing elit. Nunc pretium scelerisque neque amet </p>
                </div>
                <div className="native_editor_card">
                    <div className="native_editor_img">
                        <img src={userAvatar} alt="userAvatar" />
                    </div>
                    <h1 className="user_card_title">Victor Rice</h1>
                    <p className="user_card_description">Customer Engagement Manager CADD Centre</p>
                    <p className="card_desc_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium scelerisque neque amet consectetur adipiscing elit. Nunc pretium scelerisque neque amet </p>
                </div>
            </div>
        </NativeEditorPreview>
    )
}
export default NativeEditorsSec;