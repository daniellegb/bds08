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

  const formatPrice = (price?: number) => {
    let num = null;
    price
      ? (num = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price))
      : (num = null);
    return num;
  };

  useEffect(() => {
    makeRequest({ url: `/sales/summary?storeId=${storeId}` }).then((response) =>
      setStoreSummary(response.data)
    );
  }, [storeId]);

  return (
    <div className="base-card">
      <div className="pie-chart-card flex">
        <div>
          <h1 className="pie-price">R$ {formatPrice(storeSummary?.sum)}</h1>
          <h2 className="pie-text">Total de vendas</h2>
        </div>
        <div className="apex-chart">
          <ReactApexChart
            options={buildPieChartConfig(labels, name)}
            type="donut"
            width="400"
            series={series}
          />
        </div>
      </div>
    </div>
  );
}

export default PieChartCard;
