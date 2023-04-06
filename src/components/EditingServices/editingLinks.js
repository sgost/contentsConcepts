import React from "react";
import { EditingLinksPreview } from "./styles";


const EditingLinks = ({ content }) => {
    return (
        <EditingLinksPreview>
            {content?.map((item) => {
                return (
                    <div className="editing_links_main" key={item?.title}>
                        <h1 className="editing_links_title">{item?.title}</h1>
                        <p className="editing_links_desc">{item?.description}</p>
                        {item?.links?.map((itm) => {
                            return (
                                <p className="editing_links_points" key={itm?.title}>{itm?.title}: <a href={itm?.titleLink} className="links_editing">{itm?.titleLinkDescription}</a> </p>
                            )
                        })}
                    </div>
                )
            })}
        </EditingLinksPreview>
    )
}
export default EditingLinks;