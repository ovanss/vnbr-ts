import React from 'react';

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
} from 'carbon-components-react';

// var name:string = "John";

interface IArticle {
  // source: ISource,

  author?: string;
  rows?: any;
  headers?: any;
  getHeaderProps?: any;
  getRowProps?: any;
  getTableProps?: any;
}
interface IHeader {
  key: string;
  header: string;
}

interface IRow {
  id: string;
  name: string;
  status: string;
}

interface ISource {
  id: string | null;
  name: string;
}

interface IArticlesProps {
  articles: {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

//we can define all extra props beside the default(children) and add object that describe the structure of the object from props
// we don't only tell what component should return, but also the props component eventually get
// const TableC: React.FC<IArticlesProps> = (props) => {
const TableC: React.FC = () => {
  const rows = [
    {
      id: 'a',
      author: 'ovan',
      title: 'this is my article',
      content: 'fkadlkf aflkajdf alkdsf aldfkjas dflkasdf las...',
      desc: 'd,faj;dslkfjasdlkf adslkfjasdlkf ajsdlkf slkfj',
    },
    {
      id: 'b',
      author: 'ovan',
      title: 'this is my article',
      content: 'fkadlkf aflkajdf alkdsf aldfkjas dflkasdf las...',
      desc: 'd,faj;dslkfjasdlkf adslkfjasdlkf ajsdlkf slkfj',
    },
    {
      id: 'c',
      author: 'ovan',
      title: 'this is my article',
      content: 'fkadlkf aflkajdf alkdsf aldfkjas dflkasdf las...',
      desc: 'd,faj;dslkfjasdlkf adslkfjasdlkf ajsdlkf slkfj',
    },
  ];

  const headers = [
    {
      key: 'author',
      header: 'author',
    },
    {
      key: 'title',
      header: 'title',
    },
    {
      key: 'content',
      header: 'content',
    },
    {
      key: 'desc',
      header: 'desc',
    },
  ];
  // const headers = Object.keys(props.articles[0]);
  // console.log(headers);

  return (
    <div>
      <DataTable rows={rows} headers={headers} isSortable>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
        }: IArticle) => (
          <TableContainer title="DataTable" description="With sorting">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header: IHeader) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: IRow | any) => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    {row.cells.map((cell?: any) => (
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
  );
};

export default TableC;
