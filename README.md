# KafkaJS com node

**_Faz a instalacao do kafka_**
```bash
https://kafka.apache.org/quickstart
```
**_Iniciando o servidor kafka_**

```bash
bin/zookeeper-server-start.sh config/zookeeper.properties
```
```bash
bin/kafka-server-start.sh config/server.properties
```
**_Rodando o servidor node_**
```bash
node src/consumer_first.js
```
```bash
node src/consumer_second.js
```
```bash
node src/producer.js
```
**_Produzindo as mensagens para o servidor node_**
```bash
bin/kafka-console-producer.sh --topic APP_NEW_TOPIC --bootstrap-server localhost:9092
```
**_Execute-os em terminais separados e no final deixe apenas o terminal de producer e o de consumer a vista para perceber o resultado_**