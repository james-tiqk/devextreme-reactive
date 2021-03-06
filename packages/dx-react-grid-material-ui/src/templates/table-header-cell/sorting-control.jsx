import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableSortLabel } from 'material-ui-next/Table';
import Tooltip from 'material-ui-next/Tooltip';
import { withStyles } from 'material-ui-next/styles';

const styles = theme => ({
  tooltipRoot: {
    display: 'block',
  },
  sortLabelRoot: {
    height: theme.spacing.unit * 3,
    maxWidth: '100%',
  },
  sortLabelActive: {
    color: 'inherit',
  },
  sortLabelText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

const SortingControlBase = ({
  align, sortingDirection, columnTitle, onClick, classes, getMessage, disabled,
}) => (
  <Tooltip
    title={getMessage('sortingHint')}
    placement={align === 'right' ? 'bottom-end' : 'bottom-start'}
    enterDelay={300}
    classes={{
      root: classes.tooltipRoot,
    }}
  >
    <TableSortLabel
      active={!!sortingDirection}
      direction={sortingDirection === null ? undefined : sortingDirection}
      onClick={onClick}
      disabled={disabled}
      classes={{
        root: classes.sortLabelRoot,
        active: classes.sortLabelActive,
      }}
    >
      <span className={classes.sortLabelText}>
        {columnTitle}
      </span>
    </TableSortLabel>
  </Tooltip>
);

SortingControlBase.propTypes = {
  align: PropTypes.string.isRequired,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  columnTitle: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SortingControlBase.defaultProps = {
  sortingDirection: undefined,
  disabled: false,
};

export const SortingControl = withStyles(styles, { name: 'SortingControl' })(SortingControlBase);
