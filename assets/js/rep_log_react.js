import React from 'react';
import ReactDom from 'react-dom';
import RepLogApp from './RepLog/RepLogApp';

const shouldShowHeart = true;

ReactDom.render(
    <RepLogApp withHeart={shouldShowHeart} /> <RepLogApp withHeart={false} />,
    document.getElementById('lift-stuff-app')
);
