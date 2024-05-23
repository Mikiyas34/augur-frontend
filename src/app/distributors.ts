export interface Distributor {
  name: string;
  quantityShippedLastMonth: number;
  forecastedQuantityNextMonth: number;
  ytdAverageMonthlyShipments: number;
}

export const distributors = [
  {
    name: 'TechSupply Co.',
    quantityShippedLastMonth: 5000,
    forecastedQuantityNextMonth: 5500,
    ytdAverageMonthlyShipments: 4800,
  },
  {
    name: 'ElectroDistribute',
    quantityShippedLastMonth: 3200,
    forecastedQuantityNextMonth: 3500,
    ytdAverageMonthlyShipments: 3000,
  },
  {
    name: 'CompWare House',
    quantityShippedLastMonth: 4500,
    forecastedQuantityNextMonth: 4800,
    ytdAverageMonthlyShipments: 4200,
  },
  {
    name: 'GadgetFlow Ltd.',
    quantityShippedLastMonth: 2700,
    forecastedQuantityNextMonth: 3000,
    ytdAverageMonthlyShipments: 2500,
  },
  {
    name: 'InnovateElectro',
    quantityShippedLastMonth: 6000,
    forecastedQuantityNextMonth: 6200,
    ytdAverageMonthlyShipments: 5800,
  },
  {
    name: 'MegaTech Distr.',
    quantityShippedLastMonth: 4000,
    forecastedQuantityNextMonth: 4300,
    ytdAverageMonthlyShipments: 3900,
  },
  {
    name: 'DeviceMaster Inc.',
    quantityShippedLastMonth: 5500,
    forecastedQuantityNextMonth: 5600,
    ytdAverageMonthlyShipments: 5200,
  },
  {
    name: 'TechGear Supply',
    quantityShippedLastMonth: 3800,
    forecastedQuantityNextMonth: 4000,
    ytdAverageMonthlyShipments: 3600,
  },
  {
    name: 'ElectroHub',
    quantityShippedLastMonth: 2900,
    forecastedQuantityNextMonth: 3100,
    ytdAverageMonthlyShipments: 2700,
  },
  {
    name: 'Circuit City Dist',
    quantityShippedLastMonth: 4200,
    forecastedQuantityNextMonth: 4500,
    ytdAverageMonthlyShipments: 3800,
  },
];
