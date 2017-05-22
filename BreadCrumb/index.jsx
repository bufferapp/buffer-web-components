import React, { PropTypes } from 'react';
import {
  ArrowRightIcon,
  Text,
} from '@bufferapp/components';

const breadCrumbStyle = {
  alignItems: 'center',
  display: 'flex',
};

const arrowStyle = {
  display: 'flex',
  alignSelf: 'center',
  marginRight: '0.357rem',
  marginLeft: '0.357rem',
};

const childPage = {
  display: 'flex',
};

const BreadCrumb = props => (
  <div style={breadCrumbStyle}>
    <Text size={'small'}>{props.parentPage}</Text>
    <span style={arrowStyle}>
      <ArrowRightIcon />
    </span>
    <span style={childPage}>
      <Text
        size={'small'}
        weight={'bold'}
        color={'outerSpace'}
      >
        {props.childPage}
      </Text>
    </span>
  </div>
);

BreadCrumb.propTypes = {
  parentPage: PropTypes.string.isRequired,
  childPage: PropTypes.string.isRequired,
};

export default BreadCrumb;
