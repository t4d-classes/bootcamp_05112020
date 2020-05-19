import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddColorAction, createDeleteColorAction,
} from '../../actions/colorActions';

import { ColorToolPage } from '../pages/ColorToolPage';

export const ColorToolPageContainer = () => {

  const colors = useSelector(state => state);

  const dispatchProps = bindActionCreators({
    onAddColor: createAddColorAction,
    onDeleteColor: createDeleteColorAction,
  }, useDispatch());


  return <ColorToolPage {...dispatchProps} colors={colors} />;
};