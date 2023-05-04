import {
  Icon,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import { IContactProps } from "../../../interfaces/IContactProps.interface";
import NotDataTableRows from "../../../../../shared/components/table/not-data-table";

export interface IRows {
  rows: IContactProps[];
  handleDelete: (id: string | undefined) => void;
  handleEdit: (company: IContactProps) => void;
}

/**
 * List of contacts table
 * @param param
 * @returns
 */
function TableRows({ rows, handleDelete, handleEdit }: IRows): JSX.Element {
  if (rows && rows.length === 0) {
    return (
      <NotDataTableRows />
    );
  }
  
  return (
    <>
      {rows &&
        rows.length > 0 &&
        rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell data-testid="users-table">{row.name}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.company}</TableCell>
            <TableCell>{row.tag}</TableCell>
            <TableCell>{row.createAt}</TableCell>
            <TableCell>
              <IconButton size="small" onClick={() => handleDelete(row.id)}>
                <Icon>delete</Icon>
              </IconButton>
              <IconButton size="small" onClick={() => handleEdit(row)}>
                <Icon>edit</Icon>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
    </>
  );
}

export default TableRows;
