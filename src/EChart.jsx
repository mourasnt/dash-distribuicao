import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, PieChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  BarChart,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  CanvasRenderer,
]);

export default function EChart({ option, style, onEvents, className }) {
  const ref = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref.current);
    chartRef.current = chart;
    if (onEvents) {
      Object.keys(onEvents).forEach((evt) => {
        chart.on(evt, onEvents[evt]);
      });
    }
    return () => {
      chart.dispose();
      chartRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.setOption(option, true);
    }
  }, [option]);

  useEffect(() => {
    const handler = () => chartRef.current && chartRef.current.resize();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return <div ref={ref} className={className} style={style} />;
}
