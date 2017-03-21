import React from 'react';
import moment from 'moment';
import { PropTypes } from 'react';
import ImageBox from './ImageBox';
import TextBox from './TextBox';
import LikeBox from './LikeBox';
import { Panel, Row, Col } from 'react-bootstrap';

// const DOM = React.DOM;
const BlogItem = ({img, text, meta}) => (
    <Panel>
      <Row>
        <Col md={4} xs={6}>
          <ImageBox {...img} />
        </Col>
        <Col md={4} xs={6}>
          <TextBox text={text} />
        </Col>
        <Col md={4} xs={12}>
          <div>
            <LikeBox count={meta.likesCount}/>
            <p><span className="text-muted">author:</span> {meta.author}</p>
            <p><span className="text-muted">created:</span> {moment(meta.created_at).fromNow()}</p>
            <p><span className="text-muted">updated:</span> {moment(meta.updated_at).calendar()}</p>
          </div>
        </Col>
      </Row>
    </Panel>
);

BlogItem.defaultProps = {
  img: ImageBox.defaultProps,
  text: 'no content.',
  meta: {
    author: 'Anonimus',
    created_at: Date.now(),
    updated_at: Date.now(),
    likesCount: 0
  }
};

BlogItem.propTypes = {
  img: PropTypes.shape(...ImageBox.propTypes),
  text: PropTypes.string,
  meta: PropTypes.shape({
    author: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    likesCount: PropTypes.number
  })
};

export default BlogItem;
