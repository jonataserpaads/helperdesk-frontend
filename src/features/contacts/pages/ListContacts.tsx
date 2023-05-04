import React, { useEffect, useMemo, useState } from "react";
import { LayoutBasePage } from "../../../shared/layouts";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IContactProps } from "../interfaces/IContactProps.interface";
import AddIcon from "@mui/icons-material/Add";
import { Environment } from "../../../shared/environment";
import PublishIcon from "@mui/icons-material/Publish";
import TableRows from "../components/table-rows";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "600",
  color: "#777986",
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = ["Atendimento", "Pós vendas", "Pré vendas", "Suporte", "Ticket"];

export const ListContacts: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState<IContactProps[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [titleModal, setTitleModal] = useState("Novo Cadastro");
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  /**
   * Search default values
   */
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  /**
   * Search page values
   */
  const pagina = useMemo(() => {
    return Number(searchParams.get("pagina") || "0");
  }, [searchParams]);

  /**
   * Define default values list loading
   */
  useEffect(() => {
    setIsLoading(true);
    //getAllUsers();
  }, [busca, pagina]);

  /**
   * Handle delete item
   * @param id
   */
  const handleDelete = (id: string | undefined) => {
    if (confirm("Realmente deseja apagar?")) {
      /*ContactService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setRows((oldRows) => [
            ...oldRows.filter((oldRow) => oldRow.id.toString() !== id),
          ]);
          alert("Registro apagado com sucesso!");
        }
      });*/
    }
  };

  /**
   * Edit contact modal dialog
   */
  function handleEdit(contactValue: IContactProps) {
    setTitleModal("Edite Vaca");
    /*if (contactValue.children && contactValue.children.length === 0) {
      contactValue.children = [
        {
          id: uuidv4(),
          name: "",
          namefather: "",
          dateborn: null,
          observacion: "",
          proprietary: "",
        },
      ];
    }
    dispatch(allActions.contact.setContact(contactValue));
    setTimeout(() => {
      setOpen(true);
    }, 100);*/
  }

  /**
   * Select tag
   */
  function handleSelectTag() {
    // sera usado futuramente
    return (
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          size="small"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {tags.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <LayoutBasePage
      title="Contatos"
      textSearch={busca}
      placeholder="Pesquisar por nome, e-mail ou telefone"
      changeTextSearch={(texto) =>
        setSearchParams({ busca: texto, pagina: "0" }, { replace: true })
      }
    >
      <Grid padding={3} marginTop={-3} container gap={1}>
        <Button
          variant="outlined"
          startIcon={<PublishIcon />}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "12px",
            gap: "8px",
            width: "191px",
            height: "44px",
            background: "#FFFFFF",
            border: "1px solid #4285F4",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            overflow="hidden"
            style={{
              height: "20px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              textAlign: "center",
              color: "#4285F4",
              textTransform: "capitalize",
            }}
          >
            Importar contatos
          </Typography>
        </Button>

        <Box flex={1} display="flex" justifyContent="end">
          <Button
            variant="contained"
            color="primary"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "12px 16px",
              gap: "8px",
              width: "182px",
              height: "44px",
              background: "#4285F4",
              borderRadius: "8px",
              textTransform: "capitalize",
            }}
            startIcon={<AddIcon />}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              overflow="hidden"
              style={{
                textTransform: "capitalize",
              }}
            >
              Adicionar contato
            </Typography>
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell>Celular</StyledTableCell>
                <StyledTableCell>E-mail</StyledTableCell>
                <StyledTableCell>Empresas</StyledTableCell>
                <StyledTableCell>Data cadastro</StyledTableCell>
                <StyledTableCell>Tag</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRows
                rows={rows}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </TableBody>

            {totalCount === 0 && !isLoading && (
              <caption>{Environment.LISTAGEM_VAZIA}</caption>
            )}

            <TableFooter>
              {totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Pagination
                      page={pagina}
                      count={Math.ceil(
                        totalCount / Environment.LIMITE_DE_LINHAS
                      )}
                      onChange={(_, newPage) =>
                        setSearchParams(
                          { busca, pagina: newPage.toString() },
                          { replace: true }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutBasePage>
  );
};
