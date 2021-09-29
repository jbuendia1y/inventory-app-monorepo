import ReplyLink from "src/components/ReplyLink";
import Table, {
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
} from "src/components/Table";

export default function TableComponent() {
  return (
    <section>
      <h3 id="form-component">
        Form Component <ReplyLink link="#form-component" />
      </h3>
      <Table>
        <caption>Table</caption>
        <TableHead>
          <TableRow>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <td>
              <span>
                <span>Row 1 Col 1</span>
              </span>
            </td>
            <td>Row 1 Col 2</td>
            <td>Row 1 Col 3</td>
            <td>Row 1 Col 4</td>
          </TableRow>
          <TableRow>
            <td>Row 2 Col 1</td>
            <td>Row 2 Col 2</td>
            <td>Row 2 Col 3</td>
            <td>Row 2 Col 4</td>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <td>Footer col 1</td>
            <td>Footer col 2</td>
            <td>Footer col 3</td>
            <td>Footer col 4</td>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}
