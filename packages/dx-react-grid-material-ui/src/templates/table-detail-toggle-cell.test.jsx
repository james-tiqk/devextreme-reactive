import * as React from 'react';
import { createShallow, getClasses } from 'material-ui-next/test-utils';
import IconButton from 'material-ui-next/IconButton';
import { TableDetailToggleCell } from './table-detail-toggle-cell';

describe('TableDetailToggleCell', () => {
  let shallow;
  let classes;
  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<TableDetailToggleCell />);
  });

  it('should render IconButton', () => {
    const tree = shallow((
      <TableDetailToggleCell />
    ));

    expect(tree.find(IconButton).exists())
      .toBeTruthy();
  });

  it('should handle click with stopPropagation', () => {
    const onToggle = jest.fn();
    const mockEvent = {
      stopPropagation: jest.fn(),
    };
    const tree = shallow((
      <TableDetailToggleCell
        onToggle={onToggle}
      />
    ));

    const buttonClickHandler = tree.find(IconButton).prop('onClick');

    buttonClickHandler(mockEvent);
    expect(onToggle)
      .toHaveBeenCalled();
    expect(mockEvent.stopPropagation)
      .toHaveBeenCalled();
  });

  it('should pass the className prop to the root element', () => {
    const tree = shallow((
      <TableDetailToggleCell
        className="custom-class"
      />
    ));

    expect(tree.is(`.${classes.toggleCell}`))
      .toBeTruthy();
    expect(tree.is('.custom-class'))
      .toBeTruthy();
  });

  it('should pass rest props to the root element', () => {
    const tree = shallow((
      <TableDetailToggleCell
        data={{ a: 1 }}
      />
    ));

    expect(tree.props().data)
      .toMatchObject({ a: 1 });
  });
});
