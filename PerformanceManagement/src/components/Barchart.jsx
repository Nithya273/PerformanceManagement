import { BarChart } from '@mantine/charts';
import { data1 } from "./data1";

function Barchart() {
  return (
    <div className='flex justify-center w-full'>
    <BarChart
    className='w-[70%] mt-20'
      h={300}
      data={data1}
      dataKey="month"
      series={[
        { name: 'NoofPushes', color: 'violet.6' },
        { name: 'NoofContributions', color: 'blue.6' },
      
      ]}
      tickLine="y"
    />
    </div>
  );
}
export default Barchart