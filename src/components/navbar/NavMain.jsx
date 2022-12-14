import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const colors = ["teal"];

class ExampleMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { color } = this.props;
    const { activeItem } = this.state;

    return (
      <Menu color={color} inverted widths={3}>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map((color) => (
    <ExampleMenu color={color} key={color} />
  ));

  return <div>{menus}</div>;
};

export default MenuExampleColoredInvertedMenus;
