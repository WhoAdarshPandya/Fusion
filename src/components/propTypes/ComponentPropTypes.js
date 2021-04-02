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
  startIcon: propTypes.string,
  // ? done
  endIcon: propTypes.string
}

export const IconButtonPropType = {
  // * done
  onClick: propTypes.func,
  // * done
  color: propTypes.oneOf(['primary', 'secondary']),
  // * done
  disableRipple: propTypes.bool,
  // * done
  size: propTypes.oneOf(['large', 'small', 'medium']),
  // *
  variant: propTypes.oneOf(['simple', 'fab'])
}

export const AvatarPropType = {
  // TODO done
  src: propTypes.string,
  // todo done
  alt: propTypes.string,
  // todo done
  onClick: propTypes.func,
  // todo done
  size: propTypes.oneOf(['large', 'small', 'medium'])
}

export const ToastPropType = {
  text: propTypes.string
}

export const TextFieldPropType = {
  // ? done
  value: propTypes.string,
  // ? done
  variant: propTypes.oneOf(['standard', 'outlined', 'filled']),
  // ? done
  label: propTypes.string,
  // ? done
  autoComplete: propTypes.bool,
  color: propTypes.oneOf([]),
  // ? done
  type: propTypes.oneOf(['email', 'number', 'password', 'text', 'url']),
  // ? done
  onClick: propTypes.func,
  // ? done
  onChange: propTypes.func,
  // ? done
  readOnly: propTypes.bool,
  // ? done
  disabled: propTypes.bool,
  // ? done
  helperText: propTypes.string,
  // ? done
  error: propTypes.bool,
  // ? done
  autoFocus: propTypes.func
}

export const SvgProviderPropTypes = {
  color: propTypes.string
}
