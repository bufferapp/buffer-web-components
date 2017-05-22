import React from 'react';
import {
  Button,
} from '@bufferapp/components';
import HoverableFocusable from '../HoverableFocusable';

class HoverableButton extends HoverableFocusable {
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
      <Button
        {...rest}
        hovered={this.state.hovered}
        focused={this.state.focused}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
      >
        {hoveredChildren}
      </Button>
    );
  }
}

export default HoverableButton;
