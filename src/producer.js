const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "APP_NEW_TOPIC",
    messages: [
      { value: "Hello world!" },
      { value: "First TOPIC created!" },
      { value: "Second TOPIC created!" },
    ],
  });
};

run().catch(console.error);
