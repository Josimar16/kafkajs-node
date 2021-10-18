const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "APP_FIRST_TOPIC",
    messages: [{ value: "First TOPIC created!" }],
  });

  await producer.send({
    topic: "APP_SECOND_TOPIC",
    messages: [{ value: "Second TOPIC created!" }],
  });
};

run().catch(console.error);
