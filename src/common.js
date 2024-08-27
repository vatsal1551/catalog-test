export const AMOUNT_VALUES = ['15,264.45', '13,500.28', '63,179.71', '1,05,500.25', '88,245.12', '1,10,059.62', '9,65,578.58']

export const INC_VALUES = ["+ 1,000 (2.98%)", "- 2,000 (1.23%)", "+ 2,161.42 (3.54%)", "+ 3,783.42 (4.5%)", "- 7,003 (7.79%)", "+ 8,500 (12.23%)", "+ 9,664 (12.23%)"];

export const DATA_LABELS_1d = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
]

export const DATA_LABELS_3d = [
  '10:00 AM', '1:00 PM', '4:00 PM', '6:00 PM', '10:00 AM', '1:00 PM', '4:00 PM', '6:00 PM', '10:00 AM', '1:00 PM', '4:00 PM', '6:00 PM',
  '10:00 AM', '1:00 PM', '4:00 PM'
]

export const DATA_LABELS_1w = [
  '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM', '10:00 AM', '2:00 PM', '6:00 PM',
  '10:00 AM', '2:00 PM', '6:00 PM'
]

export const DATA_LABELS_1m = [
  '1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug', '11 Aug', '12 Aug', '12 Aug', '13 Aug',
  '14 Aug',
]

export const DATA_LABELS_6m = [
  '1 Jan', '15 Jan', '1 Feb', '15 Feb', '1 Mar', '15 Mar', '1 Arp', '15 Arp', '1 May', '15 May', '1 Jun', '15 Jun', '1 Jul', '15 Jul', '1 Aug',
]

export const DATA_LABELS_1y = [
  'Jan', 'Feb', 'Mar', 'Arp', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const DATA_LABELS_max = [
  '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
]

export const dataLabels = (selectedInterval) => {
  switch (selectedInterval) {
    case '1d':
      return DATA_LABELS_1d
    case '3d':
      return DATA_LABELS_3d
    case '1w':
      return DATA_LABELS_1w
    case '1m':
      return DATA_LABELS_1m
    case '6m':
      return DATA_LABELS_6m
    case '1y':
      return DATA_LABELS_1y
    case 'max':
      return DATA_LABELS_max
    default:
      return DATA_LABELS_1d
  }
}

export const barDataset = (selectedInterval) => {
  switch (selectedInterval) {
    case '1d':
      return BAR_VALUES_1d
    case '3d':
      return BAR_VALUES_3d
    case '1w':
      return BAR_VALUES_1w
    case '1m':
      return BAR_VALUES_1m
    case '6m':
      return BAR_VALUES_6m
    case '1y':
      return BAR_VALUES_1y
    case 'max':
      return BAR_VALUES_max
    default:
      return BAR_VALUES_1d
  }
}

export const BAR_VALUES_1d = [6200, 3250, 2630, 4550, 5750, 4300, 3450, 5300, 6250, 6600, 2700, 3950, 8300, 2456, 5379]

export const BAR_VALUES_3d = [
  6200, 3250, 2630, 7550, 8750, 2300, 3450, 5300, 7250, 6600, 2700, 3950, 8300, 2456, 5379,
]

export const BAR_VALUES_1w = [
  6200, 3250, 2630, 7550, 8750, 2300, 3450, 5300, 7250, 6600, 2700, 3950, 8300, 2456, 5379,
  10450, 7250, 2630, 11550, 13750, 2300, 12450, 9300, 6250, 8600, 9700, 2950, 14300, 2456, 6379,
  10450, 7250, 2630, 11550, 13750, 2300, 12450, 9300, 6250, 8600, 9700, 2950, 14300, 2456, 6379,
  6200, 3250, 2630, 7550, 8750, 2300, 3450, 5300, 7250, 6600, 2700, 3950, 8300, 2456, 5379,
]

export const BAR_VALUES_1m = [
  5450, 7250, 2630, 11550, 13750, 18500, 12450, 9300, 6250, 8600, 9700, 2950, 14300, 16456, 28379,
]

export const BAR_VALUES_6m = [
  5450, 7250, 2630, 11550, 13750, 18500, 12450, 9300, 6250, 28600, 9700, 2950, 14300, 16456, 10379
]

export const BAR_VALUES_1y = [6200, 3250, 2630, 7550, 8750, 2300, 19450, 9300, 7250, 26600, 2700, 3950]

export const BAR_VALUES_max = [
  6200, 3250, 2630, 7550, 81750, 122300, 19450, 9300, 7250, 26600, 112700, 88950, 166600, 237000, 403950
]

export const lineDataset = (selectedInterval) => {
  switch (selectedInterval) {
    case '1d':
      return LINE_VALUES_1d
    case '3d':
      return LINE_VALUES_3d
    case '1w':
      return LINE_VALUES_1w
    case '1m':
      return LINE_VALUES_1m
    case '6m':
      return LINE_VALUES_6m
    case '1y':
      return LINE_VALUES_1y
    case 'max':
      return LINE_VALUES_max
    default:
      return LINE_VALUES_1d
  }
}

export const LINE_VALUES_1d = [
  10000, 11500, 9000, 11500, 10563, 9500, 8000, 9500, 10000, 12500, 11300, 8500, 12500, 13000, 15264.45,
]

export const LINE_VALUES_3d = [
  12000, 13500, 15000, 12500, 19563, 25500, 16000, 18500, 19000, 27500, 16300, 14500, 22500, 13000, 13500.28
]

export const LINE_VALUES_1w = [
  10000, 11500, 9000, 11500, 15563, 16600, 18000, 20100, 36000, 45500, 37300, 39500, 45500, 23000, 35500,
  43000, 42500, 38000, 56000, 45500, 53000, 63562, 63179.13,
  78500, 62500, 68000, 45500, 35000, 55500, 66000, 86000, 75500, 63000, 55562, 45000, 49500, 57300, 63179.13,
  78500, 62500, 68000, 45500, 43000, 55500, 66000, 86000, 75500, 63000, 55562, 45000, 49500, 57300, 63179.13,
  78500, 62500, 68000, 45500, 43000, 55500, 63179.71,
]

export const LINE_VALUES_1m = [
  10000, 25000, 45000, 35500, 55563, 75600, 88000, 66100, 56000, 45500, 37300, 52500, 88500, 98000, 105500.25
]

export const LINE_VALUES_6m = [
  10000, 45000, 35000, 68500, 55563, 88600, 108000, 66100, 96000, 152500, 37300, 52500, 88500, 105000, 88245.12
]

export const LINE_VALUES_1y = [
  10000, 45000, 35000, 68500, 55563, 88600, 108000, 66100, 96000, 152500, 37300, 110059.62
]

export const LINE_VALUES_max = [
  80000, 101500, 50000, 115500, 300563, 450500, 222000, 100500, 250000, 552500, 681300, 418500, 512500, 855000, 965578.58,
]

export const INTERVALS = ['1d', '3d', '1w', '1m', '6m', '1y', 'max']
