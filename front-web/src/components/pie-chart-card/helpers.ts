import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '16px'
      }
    },
    colors: ['#3e82f7', '#04d182', '#ff6b72'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 10,
      labels: {
        colors: ['#8D8D8D']
      },
      fontSize: '16px'
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        size: 150,
        donut: {
          size: '60%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '16px',
              color: '#ABB1C0',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '150px'
    }
  } as ApexOptions;
};
