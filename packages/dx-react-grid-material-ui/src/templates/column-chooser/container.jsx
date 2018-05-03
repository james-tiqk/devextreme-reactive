import * as React from 'react';
import * as PropTypes from 'prop-types';
import List from 'material-ui-next/List';

export const Container = ({ children, ...restProps }) => (
  <List
    dense
    {...restProps}
  >
    {children}
  </List>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
