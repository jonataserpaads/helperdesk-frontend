import React, { useMemo } from "react";
import { LayoutBasePage } from "../../../shared/layouts";
import { useSearchParams } from "react-router-dom";
import { Paper, TableContainer } from "@mui/material";

export const ListContacts: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * Search default values
   */
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  return (
    <LayoutBasePage
      title="Contatos"
      textSearch={busca}
      placeholder="Pesquisar por nome, e-mail ou telefone"
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
