import { string, number } from 'prop-types';

function SVGIcon({
  icon,
  size = 24,
  width,
  height,
  color = '#0464b9',
  ...restProps
}) {
  const iconStyles = { width: width ?? size, height: height ?? size, color };

  return (
    <svg aria-hidden="true" style={iconStyles} {...restProps}>
      <use href={`/icons/sprite.svg#${icon}`} />
    </svg>
  );
}

SVGIcon.propTypes = {
  icon: string.isRequired,
  size: number,
  width: number,
  height: number,
  color: string,
};

export default SVGIcon;
