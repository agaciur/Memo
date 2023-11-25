export function Scoreborad() {
  return (
    <table className="container mx-auto table-auto text-center">
      <thead>
        <tr className="bg-yellow-50">
          <th>Gracz</th>
          <th>Wynik</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gracz 1</td>
          <td>0</td>
        </tr>
        <tr className="bg-yellow-50">
          <td>gracz 2</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}
