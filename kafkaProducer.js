import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9094"],
});

const producer = kafka.producer();
async function produceWithKey() {
  await producer.connect();
  await producer.send({
    topic: "Test-topic",
    messages: [
      {
        key: Math.random().toString(36).substring(2, 15),
        value: JSON.stringify({
          message: "Hello KafkaJS user!",
        }),
      },
    ],
  });

  await producer.disconnect();
}

async function produceWithoutKey() {
  await producer.connect();
  await producer.send({
    topic: "Test-topic",
    messages: [
      {
        value: JSON.stringify({
          message: "Hello KafkaJS user!",
        }),
      },
    ],
  });

  await producer.disconnect();
}

produceWithoutKey(); // this will produce messages without a key
produceWithKey(); // this will produce messages with a key
