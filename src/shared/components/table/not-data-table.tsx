import { TableRow } from "@mui/material";
import noData from "../../../assets/img-no-data.png";

/**
 * Not data table
 * @param param
 * @returns
 */
function NotDataTableRows() {
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

export default NotDataTableRows;