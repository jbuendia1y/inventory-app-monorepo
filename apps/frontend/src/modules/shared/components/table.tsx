import "../styles/table.css";

interface tableProps {
  fieldsTable: string[];
  fieldsData: string[];
  data: any[];
  children?: any;
  other?: {
    table?: any;
  };
}

const TableComponent = ({
  fieldsTable,
  fieldsData,
  data,
  other,
}: tableProps) => {
  return (
    <table className="w-full" {...other?.table}>
      <thead>
        <tr className="thead__row">
          {fieldsTable.map((item, index) => (
            <th
              className="py-1 font-medium"
              key={"th-" + other?.table.id + index}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={"tr-body-" + other?.table.id + index}
            className="text-center odd:bg-gray-200"
          >
            {fieldsData.map((field, index) => (
              <td key={"td-" + other?.table.id + index}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
