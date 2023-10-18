import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const History = () => {
  useEffect(() => {
    // Create a chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart);

    // Add data for Line Chart
    let data = [];
    let startDate = new Date(2023, 9, 5); // 5.10.2023
    let endDate = new Date(2023, 9, 19); // 19.10.2023

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      data.push({
        date: new Date(date),
        airQualityIndex: Math.floor(Math.random() * 101) // Dummy air quality index (0-100)
      });
    }

    // Add data for Bar Chart
    let barChartData = data.map(item => ({
      date: item.date,
      airQualityIndex: item.airQualityIndex + Math.floor(Math.random() * 21 - 10) // Adding random deviation for demonstration
    }));

    // Create Line Chart
    let lineChart = am4core.create('lineChartDiv', am4charts.XYChart);
    lineChart.data = data;

    // Create axes for Line Chart
    let dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Air Quality Index';

    // Create series for Line Chart
    let series = lineChart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'airQualityIndex';
    series.tooltipText = '{date}: [bold]{valueY}[/]';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltip.pointerOrientation = 'vertical';

    // Create Bar Chart
    let barChart = am4core.create('barChartDiv', am4charts.XYChart);
    barChart.data = barChartData;

    // Create axes for Bar Chart
    let barDateAxis = barChart.xAxes.push(new am4charts.DateAxis());
    barDateAxis.renderer.minGridDistance = 50;

    let barValueAxis = barChart.yAxes.push(new am4charts.ValueAxis());
    barValueAxis.title.text = 'Air Quality Index';

    // Create series for Bar Chart
    let barSeries = barChart.series.push(new am4charts.ColumnSeries());
    barSeries.dataFields.dateX = 'date';
    barSeries.dataFields.valueY = 'airQualityIndex';
    barSeries.tooltipText = '{z`date}: [bold]{valueY}[/]';
    barSeries.strokeWidth = 2;
    barSeries.minBulletDistance = 10;
    barSeries.tooltip.pointerOrientation = 'vertical';

    // Add cursor for Line Chart
    lineChart.cursor = new am4charts.XYCursor();

    return () => {
      lineChart.dispose(); // Clean up the charts on component unmount
      barChart.dispose();
    };
  }, []);


  return(
    <div className='w-full p-5'>
      <h3 className='font-semibold text-lg ml-5 hover:text-white transition transform cursor-pointer duration-250'>#Sulur Data</h3>
       <div className='mt-5 bg-gray-100 w-full rounded-lg' id="lineChartDiv" style={{ width: '100%', height: '500px' }}></div>
       
       <div className='mt-5 bg-gray-100 w-full rounded-lg' id="barChartDiv" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default History;
