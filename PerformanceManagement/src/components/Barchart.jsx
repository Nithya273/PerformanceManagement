import { BarChart } from '@mantine/charts';
import { data1 } from "./data1";

function Barchart() {
  return (
    <BarChart
      h={300}
      data={data1}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      tickLine="y"
    />
  );
}
export default Barchart