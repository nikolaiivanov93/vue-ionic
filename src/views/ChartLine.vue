<template>
    <!-- <line-chart :chartdata="chartData" :options="chartOptions"/> -->
    <!-- <canvas id="chartData" ref="canvas" width="100%" height="100%"></canvas> -->
    <div>
        <Line
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :width="400"
            :height="400"
        />
    </div>
</template>

<script>
    import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Line },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
    },
    plugins: {
      type: Object,
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data 1",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    }
  }
}
</script>
