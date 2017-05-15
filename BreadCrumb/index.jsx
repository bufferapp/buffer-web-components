import React, { PropTypes } from 'react';
import {
  ArrowRightIcon,
  Text,
} from '@bufferapp/components';
import style from './style.css';

const BreadCrumb = props => (
  <div className={style.container}>
    <Text size={'small'}>{props.parentPage}</Text>
    <span className={style.arrow}>
      <ArrowRightIcon />
    </span>
    <span className={style.childPage}>
      <Text size={'small'} weight={'bold'}>{props.childPage}</Text>
    </span>
  </div>
);

BreadCrumb.propTypes = {
  parentPage: PropTypes.string.isRequired,
  childPage: PropTypes.string.isRequired,
};

export default BreadCrumb;
