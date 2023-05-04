import { TableCell } from "@mui/material";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)({
  fontFamily: important("Inter"),
  fontStyle: important("normal"),
  fontSize: important("14px"),
  lineHeight: important("20px"),
  fontWeight: important("600"),
  color: important("#777986"),
});

function important<T>(value: T): T {
    return (value + ' !important') as any;
  }

export default StyledTableCell
