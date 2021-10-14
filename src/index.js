const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const consumer = kafka.consumer({
  groupId: "GROUP01",
});

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

  await consumer.connect();

  await consumer.subscribe({
    topic: "APP_NEW_TOPIC",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
