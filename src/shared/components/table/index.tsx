import {
  Icon,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import { IContactProps } from "../../../features/contacts/interfaces/IContactProps.interface";
import noData from "../../../assets/img-no-data.png";

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
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 100,
        }}
      >
        <TableRow>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 126,
            }}
          >
            <img src={noData} alt="no data" />
            <strong
              style={{
                width: "431px",
                height: "24px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#404252",
                marginLeft: -40,
              }}
            >
              Nenhum contato cadastrado
            </strong>
            <p
              style={{
                width: "431px",
                height: "20px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#777986",
                marginLeft: -90,
              }}
            >
              Após o primeiro cadastro, você poderá visualizar aqui.
            </p>
          </div>
        </TableRow>
      </div>
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
