import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import baseGetData from './utils/baseGetData';
import { DataClient } from '../common/types';

const { renderToStaticMarkup } = ReactDOMServer;

const getDataFromTree = async (tree: React.ReactElement, client: DataClient): Promise<string> => {
  return baseGetData(tree, client, renderToStaticMarkup);
}

export default getDataFromTree;
