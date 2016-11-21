import React from "react";
import { TableRow, TableRowColumn } from 'material-ui/Table';


const tagList = (tags) => {
    return tags.map((tag, i) => {
        return <span key={ i } className="tag">{ tag.toUpperCase() } </span>;
    });
};

const colorRating = (rating) => {
   if (rating >= 4.0){
      return 'rating good';
   }
   if (rating <= 2.5){
      return 'rating bad';
   }
   return 'rating ok';
}

const arrayCheck = (datum) => {
    return Array.isArray(datum) ? tagList(datum) : datum;
};

module.exports = (data, index, selected) => {
    let columns = Object.keys(data).map((itm, i) => {
      let labelClass = typeof data[itm] === "number" ? colorRating(data[itm]) : "";
      return (<TableRowColumn key={'td_' + i} className={i < 1 ? "mdl-data-table__cell--non-numeric" : ""}>
                 <strong className={labelClass}>{arrayCheck(data[itm])}</strong>
              </TableRowColumn>);
    });
    return (
       <TableRow key={ index } selected={ selected }>
        {columns}
      </TableRow>
    );
}

