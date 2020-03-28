import React, { PropsWithChildren } from 'react';

/*

type Obj = { id: number name: string }

type keys = Array<keyof Obj>  - ['id', 'name']

*/

interface TableProps<T> {
  data: Array<T>;
  fields: Array<keyof T>;
}

export const Table = <T,>({ data, fields }: PropsWithChildren<TableProps<T>>) => {
  return (
    <table>
      <thead>
        <tr>
          {fields.map((field) => (
            <th>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {fields.map((field) => (
              <td>{String(item[field])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
