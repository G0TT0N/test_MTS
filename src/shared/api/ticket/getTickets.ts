import {TTicketData} from "@/shared/types/ticket";

export const getTickets = (): Promise<Array<TTicketData>> => {
  return new Promise((resolve) => {
    resolve([
      {
        date: "14.03.2024",
        description: "Не следует, однако забывать, что сложившаяся структура организации в значительной степени",
        id: "1-7924228126533",
        status: "closed",
        subTheme: "Заключение договора",
        theme: "Условия обслуживания",
        time: "06:22",
        type: "Консультация",
      },
      {
        date: "14.03.2024",
        description: "Не следует, однако забывать, что сложившаяся структура организации в значительной степени",
        id: "1-7924228126534",
        status: "opened",
        subTheme: "Заключение договора",
        theme: "Условия обслуживания",
        time: "06:22",
        type: "Консультация",
      },
    ]);
  });
};
