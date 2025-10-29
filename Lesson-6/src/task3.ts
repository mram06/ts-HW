document.write(
  ` <br>
    <div>3. Обробник черги повідомлень 📧</div>
    <div>Інтерфейс: IMessage – визначає структуру повідомлення, яке має бути оброблено (topic: string, payload: object, timestamp: Date).</div>
    <div>Клас: MessageQueueProcessor – має метод process(message: IMessage). Клас не створює повідомлення, але очікує на вхідні дані, що відповідають IMessage.</div>
    <br>`
);

const messages: IMessage[] = [
  {
    topic: "topic1",
    payload: { type: "message" },
    timestamp: new Date(),
  },
  {
    topic: "topic2",
    payload: { type: "video" },
    timestamp: new Date(),
  },
  {
    topic: "topic3",
    payload: { type: "spark" },
    timestamp: new Date(),
  },
];

interface IMessage {
  topic: string;
  payload: object;
  timestamp: Date;
}

class MessageQueueProcessor {
  constructor(readonly messageList: IMessage[]) {}

  process(message: IMessage) {
    if (
      typeof message.topic === "string" &&
      typeof message.payload === "object" &&
      message.timestamp instanceof Date
    )
      return true;

    return false;
  }

  getHTMLEl(message: IMessage): HTMLElement {
    const div = document.createElement("div");
    div.innerText = `${
      message.topic
    } - ${message.timestamp.toLocaleDateString()}`;
    return div;
  }

  processMessages(): void {
    const messageList = this.messageList;

    messageList.forEach((message) => {
      if (this.process(message)) document.body.append(this.getHTMLEl(message));
    });
  }
}

const messagesQueue = new MessageQueueProcessor(messages);
messagesQueue.processMessages();
