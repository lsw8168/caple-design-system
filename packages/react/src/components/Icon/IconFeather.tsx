import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { IconProps } from './Icon';
import { Ink } from '@caple-ui/colors';
import './Icon.style.scss';

export interface IconFeatherProps extends IconProps {
  type: string;
  strokeWidth?: number;
}

export default ({
  type,
  size = 16,
  rotate = 0,
  spin = false,
  strokeWidth = 2,
  color = Ink,
  onClick,
  className = '',
  style,
  ...props
}: IconFeatherProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-icon`;
  const classNames = classnames(classPrefix, `${classPrefix}-feather`, className, {
    [`${classPrefix}--spin`]: spin,
  });

  const shapeStyle = {
    width: size,
    height: size,
    transform: `rotate(${rotate}deg)`,
  };
  const iconStyle = {
    stroke: color,
    width: size,
    height: size,
  };

  const svg = require('feather-icons').icons[type].toSvg({ 'stroke-width': strokeWidth, ...iconStyle });

  return <i className={classNames} style={{ ...style, ...shapeStyle }} onClick={onClick} dangerouslySetInnerHTML={{ __html: svg }} {...props} />;
};
