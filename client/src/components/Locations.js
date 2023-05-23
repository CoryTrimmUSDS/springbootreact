import React, { Component } from 'react';
import { Table } from 'antd';

class Locations extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Location',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Start Date (MM-DD-YYYY)',
        dataIndex: 'startDate',
        key: 'startDate',
        render: (startDate) => {
          const formattedStartDate = formatDate(startDate);
          return formattedStartDate;
        }
      },
      {
        title: 'End Date (MM-DD-YYYY)',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (endDate) => {
          const formattedEndDate = formatDate(endDate);
          return formattedEndDate;
        }
      }
    ];
    
    function formatDate(dateValue) {
      const date = new Date(dateValue * 1000); // Convert timestamp to milliseconds

      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();

      return `${month}-${day}-${year}`;
    }

    return (
      <Table columns={columns} dataSource={this.props.locations} />
    );
  }
}

export default Locations;
