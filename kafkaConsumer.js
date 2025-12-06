import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9094"],
});

const consumer = kafka.consumer({ groupId: "Test-group" });

await consumer.connect();
await consumer.subscribe({ topic: "Test-topic" });



await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      partition,
      offset: message.offset,
      value: JSON.parse(message.value.toString()),
      message: message,
      topic,
    });
  },
});
