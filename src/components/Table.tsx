import React from 'react';
import { IRow, IHeader, ITable, IEverythingResponse } from '../interfaces';

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

interface ISource {
  id: string | null;
  name: string;
}

interface TableCProps {
  articles: {
    author?: string | null;
    source?: string;
    content: string;
    description: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
  }[];
  openModal: () => void;
}

//we can define all extra props beside the default(children) and add object that describe the structure of the object from props
// we don't only tell what component should return, but also the props component eventually get
// function TableC({text}: interfaceName){
// const TableC: React.FC<IEverythingResponse> = (props) => {
const TableC: React.FC<TableCProps> = (props) => {
  const rows = [
    {
      id: 'a',
      author: 'ovan',
      title: 'this is my article',
      content: 'fkadlkf aflkajdf alkdsf aldfkjas dflkasdf las...',
      desc: 'd,faj;dslkfjasdlkf adslkfjasdlkf ajsdlkf slkfj',
      urlToImage: 'akdfalskd',
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
    // {
    //   author: 'Katie Benner',
    //   content:
    //     'Even in cyberspace, the Department of Justice is able to use a tried and true investigative technique,',
    //   description:
    //     'The moves came a week after the department made its largest financial seizure',
    //   id: 'a',
    //   publishedAt: '2022-02-17T23:51:49Z',
    //   title:
    //     'Justice Dept. Announces Raft of Changes Meant to Deter Cyberthreats',
    //   url: 'https://www.nytimes.com/2022/02/17/us/politics/justice-department-cybersecurity.html',
    //   urlToImage: 'https://static01.nyt.com/images/2022/02/17/us/politics/17d',
    // },
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

  // if (props.articles.length > 0) {
  //   const baris = props.articles.map((article, index) => {
  //     // console.log(article);
  //     // return { ...article, id: index, source: 'ovan' };
  //     const { source, ...newArticle } = article;
  //     return { ...newArticle, id: index.toString() };
  //   });
  //   console.log('baris:', baris);
  // }

  return (
    <div>
      <DataTable rows={rows} headers={headers} isSortable>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
        }: ITable) => (
          <TableContainer title="DataTable">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {props.articles.length > 0 &&
                    Object.keys(props.articles[0])
                      .filter((item) => item !== 'source')
                      .map((str, index) => ({
                        key: str,
                        header: str,
                      }))
                      .map((header: IHeader) => (
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
                {rows.map((row: any) => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    {row.cells.map((cell?: any) => (
                      <TableCell key={cell.id} onClick={props.openModal}>
                        {cell.value}
                      </TableCell>
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
