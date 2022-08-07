# opentelemetry-metrics-example -

## Downloading and running Prometheus - 

- tar xvfz prometheus-*.tar.gz

- cd prometheus-*

## Configuring Prometheus to monitor -
Prometheus collects metrics from targets by scraping metrics HTTP endpoints. 
Prometheus exposes data in the same manner about itself, it can also scrape and monitor its own health.

## Starting Prometheus -
To start Prometheus with your newly created configuration file, change to the directory containing the Prometheus binary and run:

./prometheus --config.file=prometheus.yml 

