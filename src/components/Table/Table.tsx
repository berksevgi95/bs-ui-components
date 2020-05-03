// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';

// import { IComponentProps } from '../../utils';

// import '../../index.scss';
// import './Table.scss';

// interface ITableItemProps {
//   header: string,
//   value: any
// }

// export interface ITableProps
//   extends React.ComponentProps<'table'>, IComponentProps {
//   list: ITableItemProps[][],
// }

// const Table: React.FC<ITableProps> = ({
//   className,
//   id,
//   children,
//   list,
//   ...props
// }) => (

//   <table className={`bs bs-table ${className || ''}`} {...props}>
//     {list
//       && list.length > 0
//       && list[0]
//       && list[0].length > 0
//       && (
//         <thead>
//           <tr>
//             {list[0].map((item) => (
//               <th key={item.header}>{item.header}</th>
//             ))}
//           </tr>
//         </thead>
//       )}
//     {list
//       && list.length > 0
//       && (
//       <tbody>
//         {list.map((subList) => (
//           <tr>
//             {subList
//               && subList.length > 0
//               && subList.map((item) => (
//                 <td>{item.value}</td>
//               ))}
//           </tr>
//         ))}
//       </tbody>
//       )}
//     {/* <tbody>
//       <tr>
//         <td>Alfreds Futterkiste</td>
//         <td>Maria Anders</td>
//         <td>Germany</td>
//       </tr>
//       <tr>
//         <td>Centro comercial Moctezuma</td>
//         <td>Francisco Chang</td>
//         <td>Mexico</td>
//       </tr>
//       <tr>
//         <td>Ernst Handel</td>
//         <td>Roland Mendel</td>
//         <td>Austria</td>
//       </tr>
//       <tr>
//         <td>Island Trading</td>
//         <td>Helen Bennett</td>
//         <td>UK</td>
//       </tr>
//       <tr>
//         <td>Laughing Bacchus Winecellars</td>
//         <td>Yoshi Tannamuri</td>
//         <td>Canada</td>
//       </tr>
//       <tr>
//         <td>Magazzini Alimentari Riuniti</td>
//         <td>Giovanni Rovelli</td>
//         <td>Italy</td>
//       </tr>
//     </tbody> */}
//   </table>

// );

// export default Table;


/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { IComponentProps } from '../../utils';

import '../../index.scss';
import './Table.scss';

interface ITableItemProps {
  title: string,
  field: any
}

export interface ITableProps
  extends React.ComponentProps<'table'>, IComponentProps {
  columns: ITableItemProps[],
  data: any[],
}

const Table: React.FC<ITableProps> = ({
  className,
  id,
  children,
  columns,
  data,
  ...props
}) => (

  <table className={`bs bs-table ${className || ''}`} {...props}>
    {columns
      && columns.length > 0
      && (
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
      )}

    {columns
      && columns.length > 0
      && (
        <tbody>
          {data
            && data.length > 0
            && data.map((d) => (
              <tr>
                {columns.map((column) => (
                  <td key={d[column.field]}>{d[column.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      )}

  </table>
);

export default Table;
