import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from 'material-ui-next/Input';
import { TableCell } from 'material-ui-next/Table';
import { withStyles } from 'material-ui-next/styles';

const styles = ({ spacing }) => ({
  cell: {
    paddingRight: spacing.unit,
    paddingLeft: spacing.unit,
    '&:first-child': {
      paddingLeft: spacing.unit * 3,
    },
  },
  input: {
    width: '100%',
  },
});

const TableFilterCellBase = ({
  style, filter, getMessage, onFilter,
  classes, children, className,
  tableRow, tableColumn, column, filteringEnabled,
  ...restProps
}) => (
  <TableCell
    className={classNames(classes.cell, className)}
    style={style}
    {...restProps}
  >
    {children || (
      <Input
        className={classes.input}
        value={filter ? filter.value : ''}
        placeholder={getMessage('filterPlaceholder')}
        disabled={!filteringEnabled}
        onChange={e => onFilter(e.target.value ? { value: e.target.value } : null)}
      />
    )}
  </TableCell>
);

TableFilterCellBase.propTypes = {
  style: PropTypes.object,
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  column: PropTypes.object,
  filteringEnabled: PropTypes.bool,
};

TableFilterCellBase.defaultProps = {
  style: null,
  filter: null,
  onFilter: () => {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true,
};

export const TableFilterCell = withStyles(styles, { name: 'TableFilterCell' })(TableFilterCellBase);
