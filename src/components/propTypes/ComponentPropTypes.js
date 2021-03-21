/* eslint-disable prettier/prettier */

import propTypes from 'prop-types'

export const ButtonPropType = {
  variant: propTypes.oneOf(['contained', 'outlined']),
  // ? done
  color: propTypes.oneOf(['primary', 'secondary', 'inherit']),
  // ? done
  raised: propTypes.bool,
  // ? done
  size: propTypes.oneOf(['large', 'small', 'medium']),
  // ? done
  disableRipple: propTypes.bool,
  // ? done
  onClick: propTypes.func,
  // ? done
  textColor: propTypes.string,
  // ? done
  href: propTypes.string,
  // ? done
  startIcon:propTypes.string,
  // ? done
  endIcon:propTypes.string
}

export const IconButtonPropType = {
  // * done
  onClick : propTypes.func,
  // * done
  color : propTypes.oneOf(['primary', 'secondary']),
  // * done
  disableRipple: propTypes.bool,
  // * done
  size: propTypes.oneOf(['large', 'small', 'medium']),
  // * 
  variant: propTypes.oneOf(['simple', 'fab']),
}

export const AvatarPropType = {
  src: propTypes.string,
  alt: propTypes.string,
  onClick : propTypes.func,
  size :  propTypes.oneOf(['large', 'small', 'medium'])
}

export const ToastPropType = {
  text: propTypes.string,
}
