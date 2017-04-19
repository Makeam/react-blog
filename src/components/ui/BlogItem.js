import React, { PropTypes } from 'react';
import moment from 'moment';
import ImageBox from 'components/ui/ImageBox';
import TextBox from 'components/ui/TextBox';
import LikeBox from 'components/ui/LikeBox';
import { Panel, Row, Col } from 'react-bootstrap';
import Link from 'components/elements/Link';

const BlogItem = ({id, img, text, meta, likesHandler, url}) => (
    <Panel>
      <Row>
        <Col md={4} xs={6}>
          <ImageBox {...img} />
        </Col>
        <Col md={4} xs={6}>
          <Link to={url}>
            <TextBox text={text} />
          </Link>
        </Col>
        <Col md={4} xs={12}>
          <div>
            <LikeBox count={meta.likesCount} clickHandler={likesHandler}/>
            <p><span className="text-muted">author:</span> {meta.author}</p>
            <p><span className="text-muted">created:</span> {moment(meta.createdAt).fromNow()}</p>
            <p><span className="text-muted">updated:</span> {moment(meta.updatedAt).calendar()}</p>
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
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likesCount: 0
  }
};

BlogItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.shape(...ImageBox.propTypes),
  text: PropTypes.string,
  meta: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    likesCount: PropTypes.number
  }),
  likesHandler: PropTypes.func.isRequired,
  url: PropTypes.string
};

export default BlogItem;
