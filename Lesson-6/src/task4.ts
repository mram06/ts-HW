document.write(
  ` <br>
    <div>5. Система управління сповіщеннями 🔔</div>
    <div>Клас: NotificationService</div>
    <div>Складний тип: Визначення типу NotificationPayload.</div>
    <div>EmailPayload = { recipient: string, subject: string }</div>
    <div>SMSPayload = { phone: string, text: string }</div>
    <div>Об'єднання та Перетин: NotificationPayload = ({ type: 'email' } & EmailPayload) | ({ type: 'sms' } & SMSPayload) (Дискримінаційне об'єднання для безпечної роботи з різними типами сповіщень)</div>
    <div>Метод: sendNotification(payload: NotificationPayload)</div>
    <br>`
);

type EmailPayload = { recipient: string; subject: string };
type SMSPayload = { phone: string; text: string };

type NotificationPayload =
  | ({ type: "email" } & EmailPayload)
  | ({ type: "sms" } & SMSPayload);

class NotificationService {
  static getHTMLEl(text: string): HTMLElement {
    const div = document.createElement("div");
    div.innerText = text;
    return div;
  }

  static sendNotification(payload: NotificationPayload) {
    switch (payload.type) {
      case "email":
        document.body.append(
          `Email - Отримувач: ${payload.recipient},
           Тема: ${payload.subject}`
        );
        break;
      case "sms":
        document.body.append(
          `Cellphone - Номер: ${payload.phone},
           Текст: ${payload.text}`
        );
        break;

      default:
        const _exCheck: never = payload;
        throw new Error(`Unknown type: ${payload}`);
    }
  }
}

NotificationService.sendNotification({
  type: "email",
  recipient: "Victor",
  subject: "Bank account details",
});
NotificationService.sendNotification({
  type: "sms",
  phone: "380951234567",
  text: "Hello Olga",
});
