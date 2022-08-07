# opentelemetry-metrics-example -

## Downloading and running Prometheus - 

- tar xvfz prometheus-*.tar.gz

- cd prometheus-*

## Configuring Prometheus to monitor -
Prometheus collects metrics from targets by scraping metrics HTTP endpoints. 
Prometheus exposes data in the same manner about itself, it can also scrape and monitor its own health.

```
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "opentelemetry"
    scrape_interval : 5s
    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: ["localhost:9090"]
```

To assign local port 9464 used to bind the prometheus metric server.
```
static_configs:
      - targets: ["localhost:9464"]
```

## Starting Prometheus -
To start Prometheus with your newly created configuration file, change to the directory containing the Prometheus binary and run:

- ./prometheus --config.file=prometheus.yml 

