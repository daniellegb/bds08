import React from 'react';
import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChartCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <h1 className="pie-price">R$ 746.484,00</h1>
      <h2 className="pie-text">Total de vendas</h2>

      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="400"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
