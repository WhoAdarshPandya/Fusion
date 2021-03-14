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
  href: propTypes.string
}

export const ToastPropType = {
  text: propTypes.string
}
