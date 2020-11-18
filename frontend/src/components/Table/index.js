import React, {Fragment} from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "@material-ui/core";

const ResultTable = ({result}) => {

  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name</TableCell>
        </TableHead>
      </Table>
    </Fragment>
  )

}

export default ResultTable;