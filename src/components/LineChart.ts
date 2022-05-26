import { defineComponent, ref, h, onMounted, PropType } from 'vue'
// import {setArrChart} from '../hooks/useSetArrChart';
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
  ChartData
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

// const arrChart: Array<number> = [];

// setInterval(async() => {
//   // const f = await fetch(
//   // `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa`
//   // );
//   // const data = await f.json();

//   // console.log(data);

//   if (arrChart.length > 10) {
//     arrChart.shift();
//   }
//   // arrChart.push(data.USD);
//   arrChart.push(1);
// }, 2000);

// interface Chart {
//   arrChart: Array<number>
// }

// const arrChart: Array<number> = [];

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 250
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
    },
    plugins: {
      type: Array as PropType<Plugin<'line'>[]>,
      default: () => []
    }
  },
  // data() {
  //   return {
  //     // chart: {
  //       arrChart: [] as Array<number>
  //     // } as Chart
  //   }
  // },
  // computed: {
  //   getRandomInt():number {
  //     return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  //   }
  // },
  // methods: {
  //   getApi():void {
  //     setInterval(async() => {
  //       // const f = await fetch(
  //       // `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa`
  //       // );
  //       // const data = await f.json();
      
  //       // console.log(data);
  //       // arrChart.push(data.USD);
  //       const num: number = this.getRandomInt();
  //       arrChart.push(num);
  //     }, 5000);
  //   }
  // },
  // computed: {
  //   greeting() {
  //     this.dataChart.push(1)
  //     return this.dataChart
  //   }
  // },
  // mounted() {
  //   this.greeting // type: string
  // },
  setup(props) {
    const chartData = ref<ChartData<'line'>>({
      datasets: []
    })
    // console.log(data);
    const arrChart: Array<number> = [];

    // const xhr = new XMLHttpRequest();


    // // конфигурация запроса
    // // xhr.open("GET", 'https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities/ozon/ozon.marketdata.json', true);
    // xhr.open("GET", 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa', true);

    
    // const chartData = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'Data One',
    //       backgroundColor: '#f87979',
    //       data: [40, 39, 10, 40, 39, 80, 40],
    //     //   backgroundColor: "transparent",
    //       borderColor: "#007ab3",
    //     //   pointBackgroundColor: "rgba(171, 71, 188, 1)"
    //       pointBackgroundColor: "#3dc2ff",
    //       borderWidth: 1,
    //       pointBorderColor: "#3dc2ff",
    //     }
    //   ]
    // }

    // setTimeout(() => {
    //   chartData.labels.push('August');
    //   console.log(chartData)
    // }, 3000);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
    }

    const getArrayChart = () => {
      // arrChart.value = ;
      // arrChart.push(getRandomInt());
      // arrChart.value = []
      return arrChart;
    };

    function fillData() {
      // (this.arrChart as unknown as any[]).push(1);
      // console.log(data);
      // const num: number = getRandomInt();
          // (arrChart as unknown as any[]).push(1);
          // console.log(arrChart);
      // const data = setArrChart(arrChart);
      const updatedChartData = {
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [...arrChart],
          },
          // {
          //   label: 'Data Two',
          //   backgroundColor: '#000',
          //   data: [40, 15, 23, 9, 7, 1, 33],
          // },
        ]
      }

      chartData.value = { ...updatedChartData };
    }

    // function setArrChart() {
    //   const num: number = getRandomInt();
    //   arrChart.push(num);
    //   // console.log(arrChart);
    //   return arrChart;
    // }

    function getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }

    onMounted(() => {
      setInterval(() => {

        // Отправка запроса на сервер
        // fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa')
        // .then(response => {
        //   // const res = JSON.parse(response);
        //   // console.log(response);
        //   response.text();
        // })
        // .then (result => {
        //   console.log(result);
        // });
        // xhr.send();

        // xhr.onreadystatechange = function() {
        //     if (xhr.readyState != 4) return;
        //     if (xhr.status != 200) {
        //         console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        //     } else {
        //         // alert( xhr.responseText ); // responseText -- текст ответа.
        //         const res = JSON.parse(xhr.responseText);

        //         console.log(res);
        //         // console.log(1);
        //     }
        // }

        // setInterval(async() => {
          
          // const f = await fetch(
          // `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa`
          // );
          // const data = await f.json();

          // console.log(data);
          // const num: number = getRandomInt();
          // arrChart.push(num);
          // console.log(arrChart);
        // }, 5000);
        // console.log(data);
        // const data = setArrChart(arrChart);
        // console.log(data);
        // arrChart.values = [2,2,2];
        // getArrayChart();
        // arrChart.shift();
        if (arrChart.length > 15) {
          arrChart.shift();
        }
        arrChart.push(getRandomInt());
        fillData();
      }, 2000)
    })

    return () =>
      h(Line, {
        chartData: chartData.value,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      })
  }
})
