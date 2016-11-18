import React from "react";
import TableComp from "./components/table.es6.js";


const tableData = {
  header: ['name', 'type','attributes' ,'score'],
  rows: [
    {
      name: 'Taco Bell',
      type: 'Authentic Mexican',
      tags: ['classy', 'healthy', 'innovative'],
      score: 5.0
    },
    {
      name: 'Rainforest Cafe',
      type: 'Romantic Fine Dining',
      tags: ['Romantic', 'stylish'],
      score: 4.2
    },
    {
      name: 'Everest',
      type: 'French',
      tags: ['Wine', 'Pricy'],
      score: 3.2
    },
     {
      name: 'Subway',
      type: '1970\'s food',
      tags: ['bland', 'jared'],
      score: 1.8
    },
  ]
}
export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div>
       <TableComp data={tableData}/>
      </div>
      );
  }
};