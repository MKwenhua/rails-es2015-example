import React from "react";
import {  TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableHeadRow extends React.Component {
  render () {
    let {data} = this.props;
    let thList = data.map((itm, i) => {
       return <TableHeaderColumn key={'th_' + i}>{itm}</TableHeaderColumn>;
    });
    return (
      <TableRow>
       {thList}
      </TableRow>
    );
  }
}

TableHeadRow.propTypes = {
  cl: React.PropTypes.string,
  data: React.PropTypes.array
};
