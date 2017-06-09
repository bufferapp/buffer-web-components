import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '@bufferapp/components/lib/utils';
import PseudoClassComponent from '@bufferapp/components/PseudoClassComponent';

const TableCellStateless = ({
  children,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const style = calculateStyles({
    default: {},
    hovered: {},
  }, {
    hovered,
  });
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {children}
    </div>
  );
};

TableCellStateless.defaultProps = {
  children: '',
  hovered: false,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};

TableCellStateless.propTypes = {
  children: PropTypes.node,
  hovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

class TableCell extends PseudoClassComponent {
  render() {
    const { children, ...rest } = this.props;
    let hoveredChildren = children;

    // string as children isn't clonable
    if (React.isValidElement(children)) {
      hoveredChildren = React.cloneElement(
        children,
        { hovered: this.state.hovered },
      );
    }

    return (
      <TableCellStateless
        {...rest}
        hovered={this.state.hovered}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {hoveredChildren}
      </TableCellStateless>
    );
  }
}

export default TableCell;
