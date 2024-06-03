export type TTicketCard = {
  ticketData: TTicketData;
  className?: string;
};

export type TTicketData = {
  date: string;
  description: string;
  id: string;
  status: TTicketStatus;
  subTheme: string;
  theme: string;
  time: string;
  type: string;
};

export type TTicketStatus = "closed" | "opened";
