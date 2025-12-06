import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9094"],
});

const admin = kafka.admin();

admin.connect();

admin.listTopics().then((topics) => {
  console.log(topics);
});

admin.disconnect();