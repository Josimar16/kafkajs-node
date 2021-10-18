const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
  groupId: "CONSUMER_02",
});

const run = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: "APP_SECOND_TOPIC",
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
