import React from 'react';

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer
} from 'carbon-components-react';

// var name:string = "John"; 

interface IArticle {
  // source: ISource,

  author?: string,
  rows?: any, headers?:any, getHeaderProps?:any, getRowProps?:any, getTableProps?:any

}
  interface IHeader{
      key: string;
      header: string;
}

interface IRow{
  id: string;
  name:  string;
  status: string;
}

const TableC = () => {

  const rows = [
    {
      id: 'a',
      name: 'Load balancer ',
      status: 'Disabled',
    },
    {
      id: 'b',
      name: 'Load balancer 2',
      status: 'Starting',
    },
    {
      id: 'c',
      name: 'Load balancer 3',
      status: 'Active',
    },
  ];

  
const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'status',
    header: 'Status',
  },
];


  return (
    <div>
          <DataTable rows={rows} headers={headers} isSortable>
{({ rows, headers, getHeaderProps, getRowProps, getTableProps }:IArticle ) => (
  <TableContainer title="DataTable" description="With sorting">
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map((header : IHeader) => (
            <TableHeader key={header.key} {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row : IRow | any) => (
          <TableRow key={row.id} {...getRowProps({ row })}>
            {row.cells.map((cell ?: any) => (
              <TableCell key={cell.id}>{cell.value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)}
</DataTable> 
    </div>
  )
}

export default TableC