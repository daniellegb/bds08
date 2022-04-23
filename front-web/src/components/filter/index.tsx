import React, { useEffect, useState } from 'react';
import { PieChartConfig } from '../../types/types';
import { buildSalesByGenderChart } from '../../utils/helpers';
import { makeRequest } from '../../utils/request';
import PieChartCard from '../pie-chart-card';
import './styles.css';

function Filter() {
  const [storeId, setStoreId] = useState('1');
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  useEffect(() => {
    makeRequest({ url: `/sales/by-gender?storeId=${storeId}` }).then((response) => {
      const newSalesByStore = buildSalesByGenderChart(response.data);
      setSalesByGender(newSalesByStore);
    });
  }, [storeId]);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setStoreId(value);
  };

  return (
    <>
      <div className="filter-container base-card">
        <select className="filter-input" onChange={handleOnChange}>
          <option value="3">Araguari</option>
          <option value="4">Ituiutaba</option>
          <option value="1">Uberaba</option>
          <option value="2">Uberlândia</option>
        </select>
      </div>
      <PieChartCard
        name=""
        labels={salesByGender?.labels}
        series={salesByGender?.series}
        storeId={storeId}
      />
    </>
  );
}

export default Filter;
