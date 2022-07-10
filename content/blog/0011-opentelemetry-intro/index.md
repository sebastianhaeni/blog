---
title: OpenTelemetry Introduction
date: "2022-07-10T09:30:00.000Z"
tags: ["DevOps", "Tracing", "Monitoring"]
image: "opentelemetry.svg"
---

## What is OpenTelemetry

[OpenTelemetry](https://opentelemetry.io/) has been formed as a merge by the teams of [OpenTracing](https://opentracing.io/) and [OpenCensus](https://opencensus.io/) while providing full compatibility to existing technologies in the field.

![OpenTelemetry](opentelemetry.svg)

OpenTracing has created a set of vendor-agnostic APIs to collect tracing data in applications running primarily as Cloud Native. This means that a developer who wants to collect tracing data in their application does not have to implement a vendor's API in their code, but instead uses an open API that is then implemented by the respective vendors. Similar to Slf4J as a logging API that allows Log4J, Logback etc. to be used as a logging backend. OpenCensus is a project by Google to collect observability data through standard formats that are also vendor agnostic. Thus, OpenTelemetry is a project that creates vendor agnostic APIs for instrumenting applications and at the same time collecting that data from multiple sources and only then passing it to a vendor's tool.

So, if you are using Prometheus and Jaeger today, you might want to switch over to using OpenTelemetry APIs and the OpenTelemetry collector as an intermediary, and only then send the tracing and metrics data to your observability tools. With this abstraction, you can use multiple observability tools in place at the same time, route data to different places, sample data, etc. All of this is independent of the specifics of vendors. However, you are then dependent on OpenTelemetry.

The observability signals for OpenTelemetry are:

- __Logs__: Traditional logs printed to console, file, or in case of a cloud native application, to a log-collector which indexes them and provides a search interface. If logs are written in the context of a trace, the trace and logs can be linked and made discoverable together.
- __Traces__: A trace consisting of spans, which are basic function calls, follows the path of invocations no matter in which service they are invoked.
- __Metrics__: Timeseries based data. For example traffic count, error count, response times, etc

Additionally, OpenTelemetry specifies __Baggage__ which are basically tags for events.

As of July, 2022, only Traces and Metrics have been fully specified. They both have well tested instrumentation libraries in the most common languages and frameworks. The OpenTelemetry collector is also able to export these to common observability tools such as Prometheus, OpenCensus, Zipkin and Jaeger as well as Kafka. Logs are not fully specified nor implemented, but it's being worked on right now. Check out the [OpenTelemetry Status Page](https://opentelemetry.io/status/) to see an up-to-date status.

## The need for standards

In 2010 Google has published a paper about [Dapper, a Large-Scale Distributed Systems Tracing Infrastructure](https://research.google/pubs/pub36356/). 
Some called it the secret weapon Google has to understand their architectures and debug complex request traces.

Dapper later evolved into the open sourced project [Zipkin](https://zipkin.io/).
AWS jumped onto the distributed tracing bandwagon and introduced [AWS X-Ray](https://aws.amazon.com/xray/). Uber liked distributed tracing as well, but didn't like some decisions taken in Zipkin, so they created [Jaeger](https://www.jaegertracing.io/).


![How Standards Proliferate](standards.png)
<p style="text-align: center"><a href="https://xkcd.com/927">https://xkcd.com/927</a></p>


Each of these tools introduced span propagation methods to be able to follow a trace as it makes it's way through an architecture consisting of many services:

- [Zipkin B3](https://github.com/openzipkin/b3-propagation)

```
x-b3-sampled: 1
x-b3-spanid:  9090044efa29991f
x-b3-traceid: de5a14e8f69781b31299211599430ed2
```

- [AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html)

```
x-amzn-trace-id: Root=1-de5a14e8-f69781b31299211599430ed2;Parent=9090044efa29991f;Sampled=1
```

- [Jaeger](https://www.jaegertracing.io/docs/1.35/client-libraries/)

```
uber-trace-id: de5a14e8f69781b31299211599430ed2:9090044efa29991f:0:01
```

<br/>
Zipkin later introduced a single header standard as well:

- [Zipkin B3 single-header](https://github.com/openzipkin/b3-propagation#single-header)

```
b3: …
```

Finally, some people were annoyed by the variety of propagation formats, so they created a W3C recommendation:

- [Trace Context W3C Recommendation](https://www.w3.org/TR/trace-context/)

```
traceparent: 00-de5a14e8f69781b31299211599430ed2-9090044efa29991f-01
```

However, the software APIs to instrument your code and to collect those signals was still wild west. So, OpenTelemetry was formed to come to the rescue.

## Instrumentation

Before OpenTelemetry, you could choose to use a library to instrument your code to gather tracing and metrics data and collect it with your vendor's tool. 
For example, for tracing you could use the [Zipkin libraries](https://zipkin.io/pages/tracers_instrumentation.html), [Jaeger libraries](https://www.jaegertracing.io/docs/1.36/client-libraries/),
[AWS X-Ray libraries](https://docs.aws.amazon.com/xray/latest/devguide/xray-api.html) or possibly others.

Now, these often provided compatibility to other tools, however you still needed to depend on a single vendor. And to be fair, libraries such as [Spring Cloud Sleuth](https://spring.io/projects/spring-cloud-sleuth)
abstracted the vendor library for you, but you still needed to include it in your application.

Nowadays, Zipkin and Jaeger have deprecated their instrumentation libraries and recommend the usage of OpenTelemetry instrumentation.

## Collection

Before OpenTelemetry, you had to send your metrics, traces and logs to separate vendor specific tools.

For tracing data collection vendors introduced these formats:

- Zipkin Format
- Protobuf
- Thrift

And transport it over these:

- HTTP(S)
- gRPC
- UDP

While the transports probably all have a justified use case, the formats should be unified. So, OpenTelemetry introduced the OpenTelemetry Protocol [OTLP](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md). It not only allows to send tracing data, but logs, metrics and tracing.

Once they were collected by a vendor's tool, it was hard to get them out of there to use it for other interesting purposes. In a large organization, it might be useful to send traces to a team specific tool, but also collect all traces produced by all teams to generate so called RED metrics. 

- **R** - Requests: Traffic, Throughput, Rate
- **E** – Errors: Error Counts, Error Rate, Failed Calls
- **D** – Durations: Latency, Elapsed Time

With the OpenTelemetry Collector in-between, this becomes a breeze, as you can define pipelines in the collector which sends your data to different channels downstream. If you ever want to evaluate a new monitoring tool, you simply forward your data there, but continue using your existing monitoring tools until you switch over. Or maybe the tools are complementary and you decide to use multiple tools generating insights based on the same source data.


## Upcoming

This post was a first introduction into OpenTelemetry. I am planning to release a series of posts around this topic.

- [Introduction to Distributed Tracing](../0012-distributed-tracing/)
- OpenTelemetry Collector Components
- OpenTelemetry Instrumentation
- Instrumenting React.js applications
- Instrumenting Angular applications
- Full Stack OpenTelemetry Example
