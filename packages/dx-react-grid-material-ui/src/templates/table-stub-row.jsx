import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableRow as TableRowMUI } from 'material-ui-next/Table';

export const TableStubRow = ({
  children,
  tableRow,
  ...restProps
}) => (
  <TableRowMUI
    {...restProps}
  >
    {children}
  </TableRowMUI>
);

TableStubRow.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
};

TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined,
};
