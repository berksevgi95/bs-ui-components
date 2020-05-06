/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { v1 as uuidV1 } from 'uuid';
import { IComponentProps } from '../../utils';
import Row from './Row/Row';
import Head from './Head/Head';
import Body from './Body/Body';
import Cell from './Cell/Cell';
import Title from './Title/Title';

import '../../index.scss';
import './Table.scss';

interface ITableItemProps {
  title: string,
  field: any
}

export interface ITableProps
  extends React.ComponentProps<'table'>, IComponentProps {
  columns?: ITableItemProps[],
  data?: any[],
  rowTemplate?: (data: any) => JSX.Element,
  onRowClick?: (data: any, e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void,
  onRowDblClick?: (data: any, e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
}

const Table: React.FC<ITableProps> = ({
  className,
  id,
  children,
  columns,
  data,
  theme,
  onRowClick,
  onRowDblClick,
  rowTemplate,
  ...props
}) => {
  const handleOnClick = (_data: any) => (e) => {
    if (onRowClick) {
      onRowClick(_data, e);
    }
  };

  const handleOnDblClick = (_data: any) => (e) => {
    if (onRowDblClick) {
      onRowDblClick(_data, e);
    }
  };

  return columns && data ? (
    <table
      className={`bs bs-table ${className || ''} ${theme}`}
      {...props}
    >
      {columns
        && columns.length > 0
        && (
          <Head theme={theme}>
            <Row theme={theme}>
              {columns.map((column) => (
                <Title
                  theme={theme}
                  key={column.title}
                >
                  {column.title}
                </Title>
              ))}
            </Row>
          </Head>
        )}

      {columns
        && columns.length > 0
        && (
          <Body theme={theme}>
            {data
              && data.length > 0
              && data.map((d) => (
                rowTemplate
                  ? rowTemplate(d)
                  : (
                    <Row
                      key={uuidV1()}
                      onClick={handleOnClick(d)}
                      onDoubleClick={handleOnDblClick(d)}
                      theme={theme}
                    >
                      {columns.map((column) => (
                        <Cell
                          theme={theme}
                          key={d[column.field]}
                        >
                          {d[column.field]}
                        </Cell>
                      ))}
                    </Row>
                  )))}
          </Body>
        )}

    </table>

  ) : (
    <table
      className={`bs bs-table ${className || ''} ${theme}`}
      {...props}
    >
      {children}
    </table>
  );
};

export default {
  Table,
  Row,
  Head,
  Body,
  Cell,
  Title,
};
