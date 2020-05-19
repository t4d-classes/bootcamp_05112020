import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddColorAction, createDeleteColorAction,
  refreshColors,
} from '../../actions/colorActions';

import { ColorToolPage } from '../pages/ColorToolPage';

export const ColorToolPageContainer = () => {

  const colors = useSelector(state => state);

  const dispatchProps = bindActionCreators({
    onAddColor: createAddColorAction,
    onDeleteColor: createDeleteColorAction,
    onRefreshColors: refreshColors,
  }, useDispatch());


  return <ColorToolPage {...dispatchProps} colors={colors} />;
};