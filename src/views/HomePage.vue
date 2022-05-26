<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Cryptocurrencies</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" class="background">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-row class="ion-margin-top ion-padding-horizontal ion-justify-content-center">
        <ion-button @click="setData()" color="secondary">BTC</ion-button>
        <ion-button color="secondary">ETH</ion-button>
        <ion-button color="secondary">XAUT</ion-button>
        <ion-button color="secondary">PAXG</ion-button>
        <ion-button color="secondary">BNB</ion-button>
        <ion-button color="secondary">SOL</ion-button>
      </ion-row>

      <!-- <canvas id="myChart" ref="canvas" width="400" height="400"></canvas> -->
      <!-- <line-chart :chartdata="chartData" :options="chartOptions"/> -->
      <!-- <chart-line></chart-line> -->
      <!-- <ChartLine/> -->
      <div class="chart__wrapper">
        <div class="chart__container">
          <LineChart/>
        </div>
      </div>
      
      <ion-text color="secondary">
        <div>min: {{  }}</div> <div>max: {{  }}</div>
      </ion-text>
      <!-- <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
// import { Line } from 'vue-chartjs';
// import ChartLine from './ChartLine.vue';
// import HomeP from './Home.vue';
import LineChart from '../components/LineChart';

export default defineComponent({
  name: 'HomePage',
  // extends: Line,
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    LineChart,
    // HomeP,
    // ChartLine
  },
  data() {
    return {
      dataInfo: [] as Array<number>,
    }
  },
  methods: {
    setData() {
      console.log('btn');
      // let a;
      // this.dataInfo.push(1);
      // console.log(this.dataInfo);
      // fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa')
      //   .then(response => {
      //     // const res = JSON.parse(response);
      //     console.log(response.json());
      //     // response.text();
      //   })
        // .then (result => {
        //   console.log(result);
        // });

        // setInterval(async() => {
          // const f = await fetch(
          // `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=2844b7428588d857a8cdd204e77e1f2c42f0a38c97a5e38cf731e9c6d626f0fa`
          // );
          // const data = await f.json();

          // console.log(data);
        //   // this.dataInfo.push(data);
        // }, 10000);
    }
  },
  mounted() {
    // this.renderChart(this.chartData, this.chartOptions);
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

.chart__container {
  width: 600px;
  height: 300px;
}

.chart__wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.background {
  --background: #fff;
}

/* .lineChart {
  background-color: #fff;
} */
</style>
