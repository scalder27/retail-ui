/* @flow */

import Link from './Link.js';

const LinkAdapter = {
  click(inst) {
    inst.props.onClick();
  },

  isDisabled(inst) {
    return !!inst.props.disabled;
  },
};

Link.__ADAPTER__ = LinkAdapter;

export default Link;
