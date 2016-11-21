import React from "react";
const sideLi = require('./list_items/list-item.es6.js').sideNav;

export default class SideNav extends React.Component {
  render () {
    let {uiItems, dispatch} = this.props;

    const sideNavList = uiItems.map((itm, i) => {
      let bool = 0 === i;
      return sideLi(itm, bool, 'sideli_' + i);
    });
    return (
       <section id="sideNav">
        <h1 className="brand-thing">Brand Name</h1>
        <ul>
          {sideNavList}
        </ul>
      </section>
    );
  }
}

SideNav.propTypes = {
  uiItems: React.PropTypes.object,
  dispatch: React.PropTypes.func
};
