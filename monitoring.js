'use strict';

const { DiagConsoleLogger, DiagLogLevel, diag } = require('@opentelemetry/api');
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { MeterProvider} = require('@opentelemetry/sdk-metrics-base');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

//add your port and startserver to the prometheus options
const { endpoint, port } = PrometheusExporter.DEFAULT_OPTIONS;

const exporter = new PrometheusExporter({startServer: true}, () => {
  console.log(
    //"prometheus scrape endpoint: http://localhost:9464/metrics",
    `prometheus scrape endpoint: http://localhost:${port}${endpoint}`,
  );
});

// Creates MeterProvider and installs the exporter as a MetricReader
const meterProvider = new MeterProvider();
meterProvider.addMetricReader(exporter);
const meter = meterProvider.getMeter('example-prometheus');


// Creates metric instruments
const requestCount = meter.createCounter("requests", {
  description: "Count all incoming requests"
});

const upDownCounter = meter.createUpDownCounter('test_up_down_counter', {
  description: 'Example of a UpDownCounter',
});

const attributes = { pid: process.pid, environment: 'staging' };

let counter = 0;
const observableCounter = meter.createObservableCounter('observable_requests', {
  description: 'Example of an ObservableCounter',
});
observableCounter.addCallback(observableResult => {
  observableResult.observe(counter, attributes);
});

// Record metrics

// setInterval(() => {
//   counter++;
//   requestCount.add(1, attributes);
//   upDownCounter.add(Math.random() > 0.5 ? 1 : -1, attributes);
// }, 1000);

// let countAllRequests = () => {
//   return new Promise((resolve,reject) => {
//   setInterval(() => {
//     resolve({
//     counter++;
//     requestCount.add(1, attributes);
//     upDownCounter.add(Math.random() > 0.5 ? 1 : -1, attributes);
//     })
//   }, 1000);
//   })
// }


// module.exports = {countAllRequests}

function countAllRequests(){
  setInterval(() => {
    counter++;
    requestCount.add(1, attributes);
    upDownCounter.add(Math.random() > 0.5 ? 1 : -1, attributes);
  }, 1000);
}

module.exports = {countAllRequests};