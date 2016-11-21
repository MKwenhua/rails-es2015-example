import React from "react";
import {  TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


const rowHeadConstructor = (data, selected) => {
    let thList = data.map((itm, i) => {
       return <TableHeaderColumn key={'th_' + i}>{itm}</TableHeaderColumn>;
    });
    return (
      <TableRow key="tb_head" selected={ selected }>
       {thList}
      </TableRow>
    );
}

module.exports = rowHeadConstructor