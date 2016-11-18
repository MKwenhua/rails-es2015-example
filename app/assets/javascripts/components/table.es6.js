import React from "react";
//import TableHeadRow from "./table_head.es6.js";
const rowHeadConstructor  = require( "./table_head.es6.js");
//import RowComp from "./table_row.es6.js";
const rowConstructor = require( "./table_row.es6.js");
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


export default class TableComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
    };
  } 
  render () {
    let {data} = this.props;
    let rows = data.rows.map((itm, i) => {
        return rowConstructor(itm, 'row_' + i, false);
    });

    return (
      <Table fixedHeader={ this.state.fixedHeader } fixedFooter={ this.state.fixedFooter } selectable={ this.state.selectable } multiSelectable={ this.state.multiSelectable }>
        <TableHeader displaySelectAll={ this.state.showCheckboxes } adjustForCheckbox={ this.state.showCheckboxes } enableSelectAll={ this.state.enableSelectAll }>
           {rowHeadConstructor(data.header,false)}
        </TableHeader>
        <TableBody displayRowCheckbox={ this.state.showCheckboxes } deselectOnClickaway={ this.state.deselectOnClickaway } showRowHover={ this.state.showRowHover } stripedRows={ this.state.stripedRows }>
          {rows}
        </TableBody>
      </Table>
    );
  }
}

Table.propTypes = {
  cl: React.PropTypes.string,
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func
};
