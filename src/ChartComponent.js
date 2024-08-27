import React, { useEffect, useRef, useState } from 'react'

import Chart from 'chart.js/auto'
import { CompareIcon } from './logo/compare'
import { externalTooltip } from './externalToolTip'
import { FullscreenIcon } from './logo/fullScreenLogo'
import { Tabs, Tab, ButtonGroup, Button, Box } from '@mui/material'
import { AMOUNT_VALUES, INC_VALUES, INTERVALS, dataLabels, lineDataset, barDataset } from './common.js'

import './ChartComponent.css'

const ChartComponent = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)
  const [selectedTab, setSelectedTab] = useState(1)
  const [amount, setAmount] = useState(AMOUNT_VALUES[2])
  const [increment, setIncrement] = useState(INC_VALUES[2])
  const [selectedInterval, setSelectedInterval] = useState('1w')

  const handleIntervalChange = (interval) => {
    const index = INTERVALS.indexOf(interval)
    setSelectedInterval(interval)
    setAmount(AMOUNT_VALUES[index])
    setIncrement(INC_VALUES[index])
  }

  useEffect(() => {
    if (selectedTab === 1 && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
      const ctx = chartRef.current.getContext('2d')

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dataLabels(selectedInterval),
          datasets: [
            {
              type: 'bar',
              label: 'Bar Dataset',
              data: barDataset(selectedInterval),
              borderColor: '#d8d7e2',
              backgroundColor: '#d8d7e2',
            },
            {
              type: 'line',
              label: 'Line Dataset',
              data: lineDataset(selectedInterval),
              borderColor: '#4B40EE',
              backgroundColor: '#4B40EE',
              pointRadius: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: { enabled: false, external: externalTooltip },
          },
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [selectedTab, selectedInterval])

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Box><h2>Test Summary Content</h2></Box>
      case 1:
        return <canvas ref={chartRef}></canvas>
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
        <p className={`chart-value ${increment.trim().startsWith('+') ? 'increment-text' : 'decrement-text'}`}>{increment}</p>
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
    </div>
  )
}

export default ChartComponent
