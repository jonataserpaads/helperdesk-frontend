import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LayoutBasePage } from "../../../shared/layouts";
import { Paper, TableContainer } from "@mui/material";

export const ListTickets: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * Search default values
   */
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  return (
    <LayoutBasePage
      title="Ticket"
      textSearch={busca}
      placeholder="Buscar por assunto"
      changeTextSearch={(texto) =>
        setSearchParams({ busca: texto, pagina: "0" }, { replace: true })
      }
    >
      <TableContainer component={Paper} variant="outlined">
        /**
            filtros e tabelas serão aqui
         */
      </TableContainer>
    </LayoutBasePage>
  );
};
