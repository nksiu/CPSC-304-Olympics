import React, {Fragment, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "@material-ui/core";
import TableWrapper from "./TableWrapper";

const ResultTable = ({result}) => {
  const [loaded, setLoaded] = useState(false);
  const [headers, setHeaders] = useState([]);

  if (result) {
    if (result.length && !loaded) {
      setLoaded(true);
      setHeaders(Object.keys(result[0]));
    }
  }

  return (
    <Fragment>
      {
        loaded ?
          <TableWrapper>
            <Table>
              <TableHead>
                <TableRow>
                  {
                    headers.map((header) => (<TableCell className="table-header" key={uuidv4()}>{header}</TableCell>))
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  result.map((row) => (
                    <TableRow key={uuidv4()}>
                      {
                        headers.map((header) => (<TableCell key={uuidv4()}>{row[header]}</TableCell>))
                      }
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableWrapper>
        :
        null
      }
    </Fragment>
  )

}

export default ResultTable;