import React from "react";
import PropTypes from "prop-types";
import moment  from 'moment';

import { BlogPost } from "../../components/Blog";

var MarkdownIt = require('markdown-it');

const BlogPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  if(data.date) {
    var date = moment(data.date).format("MMMM DD YYYY")
  }

  var md = new MarkdownIt();
  if(data.body) {
    var result = md.render(data.body);
  }

  var image = entry.getIn(['data', 'author_image']);
  var getImage = getAsset(image);

  if(getImage) {
    var authorImage = getImage.toString();
  }

  return (
    <BlogPost
      author_image={authorImage}
      author={data.author}
      bio={data.bio}
      date={date}
      title={data.title}
      html={widgetFor('body')}
      preview={true}
      tags={data.tags}
    />
  );

};

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BlogPreview;
