import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, COLUMNS_GROUP, COLUMNSS } from "./columns";
import { useMemo } from "react";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS_GROUP, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getHeaderGroups,
    getRowModel,
    getFooterGroups
  } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id} >
            {footerGroup.headers.map((header) => (
              <td key={header.id} colSpan={header.colSpan}>
                {flexRender(
                  header.column.columnDef.footer, 
                  header.getContext()
                  )}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default BasicTable;
