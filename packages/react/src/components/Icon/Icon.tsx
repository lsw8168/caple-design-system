import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { warning, kebabToPascal } from '../../utils';
import * as Icons from '@caple-ui/icons-react';
import { Ink } from '@caple-ui/colors';
import './Icon.style.scss';

export type IconSize = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: string;
  component?: React.ReactElement;
  size?: number | IconSize;
  rotate?: number;
  flip?: boolean;
  spin?: boolean;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLSpanElement, IconProps>(
  ({ type, component, size = 14, rotate, spin, flip, color = Ink, className = '', style, ...props }, ref) => {
    const { useContext } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-icon`;
    const classNames = classnames(classPrefix, className, {
      [`${classPrefix}--spin`]: spin,
      [`${classPrefix}--size-${size}`]: typeof size === 'string',
    });

    const shapeStyle = {
      width: typeof size === 'number' ? size : undefined,
      height: typeof size === 'number' ? size : undefined,
      transform: rotate || flip ? `${rotate ? `rotate(${rotate}deg) ` : ''}${flip ? `scaleX(-1)` : ''}` : undefined,
    };

    let IconComponent = null;
    if (type && kebabToPascal(type) in Icons) {
      IconComponent = (Icons as any)[kebabToPascal(type)];
      IconComponent = <IconComponent color={color} />;
    } else if (component) {
      const iconStyle = {
        fill: color,
        width: typeof size === 'number' ? size : undefined,
        height: typeof size === 'number' ? size : undefined,
      };
      IconComponent = React.cloneElement(component, { style: iconStyle });
    } else {
      warning('Icon', 'Empty Icon');
      return null;
    }

    return (
      <i ref={ref} className={classNames} style={{ ...style, ...shapeStyle }} {...props}>
        {IconComponent}
      </i>
    );
  },
);
