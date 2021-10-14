const Kafka = require("kafkajs");

const kafka = new Kafka({
  clientId: "consumer",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
  groupId: "CONSUMER01",
});

const run = async () => {
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
