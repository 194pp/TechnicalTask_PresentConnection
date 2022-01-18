import classes from './PostsTable.module.css';
import {Link} from "react-router-dom";

export type row = {
  id: number,
  userId: number,
  title: string,
  body: string,
}

const TableRow = (props: {data: row}) => {
  return (
    <tr className={classes.TableRow}>
      <th className={classes.RowId}>
        <Link to={`/posts/${props.data.id}`} className={classes.RowIdWrapper}>
          {props.data.id}
        </Link>
      </th>
      <th className={classes.RowUserId}>{props.data.userId}</th>
      <th className={classes.RowTitle}>{props.data.title}</th>
      <th className={classes.RowBody}>{props.data.body}</th>
    </tr>
  );
}

const PostsTable = (props: {data: row[]}) => {
  if (!Array.isArray(props.data)) console.log("Single == TRUE");
  if (!!props.data && Array.isArray(props.data)) console.log("Many == TRUE");

  return (
    <table className={classes.Table}>
      <tbody>
      <tr className={classes.TableRow}>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
        <th>body</th>
      </tr>
      {!Array.isArray(props.data) ? <TableRow data={props.data}/> : null}
      {!!props.data && Array.isArray(props.data) ? props.data.map((row: row) => <TableRow
        key={row.id}
        data={row}
      />) : null
      }
      </tbody>
    </table>
  );
}

export default PostsTable;
