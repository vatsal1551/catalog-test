import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { CompareIcon } from './logo/compare'
import { FullscreenIcon } from './logo/fullScreenLogo'
import { Tabs, Tab, ButtonGroup, Button, Box } from '@mui/material'
import { AMOUNT_VALUES, DATA_LABLES, DATA_VALUES, INC_VALUES, INTERVALS } from './constants'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

import './ChartComponent.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ChartComponent = () => {
  const [selectedTab, setSelectedTab] = useState(1)
  const [amount, setAmount] = useState(AMOUNT_VALUES[2])
  const [increment, setIncrement] = useState(INC_VALUES[2])
  const [selectedInterval, setSelectedInterval] = useState('1w')

  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval)
    const index = INTERVALS.indexOf(interval)

    setAmount(AMOUNT_VALUES[index])
    setIncrement(INC_VALUES[index])
  }

  const data = {
    labels: DATA_LABLES,
    datasets: [
      {
        label: '',
        data: DATA_VALUES,
        borderColor: '#4B40EE',
        backgroundColor: '#4B40EE',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  }

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Box><h2>Test Summary Content</h2></Box>
      case 1:
        return <Line data={data} options={options} />
      case 2:
        return <Box><h2>Test Statistics Content</h2></Box>
      case 3:
        return <Box><h2>Test Analysis Content</h2></Box>
      case 4:
        return <Box><h2>Test Settings Content</h2></Box>
      default:
        return <Box><h2>Test Content</h2></Box>
    }
  }

  return (
    <div>
      <div className='chart-container'>
        <h2 className='chart-heading'>
          {amount}{' '}
          <span className='chart-subheading'>USD</span>
        </h2>
        <p className={`chart-value ${increment.trim().startsWith('+') ? 'inrement-text' : 'decrement-text'}`}>{increment}</p>

      </div>

      <Box className='tabs-container'>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
          TabIndicatorProps={{ className: 'tab-indicator' }}
          className='bottom-line'
        >
          <Tab label='Summary' />
          <Tab label='Chart' />
          <Tab label='Statistics' />
          <Tab label='Analysis' />
          <Tab label='Settings' />
        </Tabs>

        <Box className='button-group-container'>
          <Box>
            <Button startIcon={<FullscreenIcon />} className='fullscreen-btn'>Fullscreen</Button>
            <Button startIcon={<CompareIcon />} className='compare-btn'>Compare</Button>
          </Box>
          <ButtonGroup variant='outline'>
            {INTERVALS.map((interval) => (
              <Button
                key={interval}
                className={`interval-button ${selectedInterval === interval ? 'selected' : ''}`}
                onClick={() => handleIntervalChange(interval)}
                variant={selectedInterval === interval ? 'contained' : 'text'}
              >
                {interval}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Box className='content-container'>
          {renderContent()}
        </Box>
      </Box>
    </div >
  )
}

export default ChartComponent
