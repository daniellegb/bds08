import React, { useEffect, useState } from 'react';
import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import { StoreSummary } from '../../types/types';
import { makeRequest } from '../../utils/request';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  storeId?: string;
};

function PieChartCard({ labels = [], name, series = [], storeId }: Props) {
  const [storeSummary, setStoreSummary] = useState<StoreSummary>();

  useEffect(() => {
    makeRequest({ url: `/sales/summary?storeId=${storeId}` }).then((response) =>
      setStoreSummary(response.data)
    );
  }, [storeId]);

  return (
    <div className="pie-chart-card base-card">
      {console.log(storeId)}
      <h1 className="pie-price">R$ {storeSummary?.sum}</h1>
      {console.log(storeSummary?.sum)}
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
