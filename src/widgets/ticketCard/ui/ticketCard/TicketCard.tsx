import "./TicketCard.css";
import {FC} from "react";
import {TTicketCard} from "@/shared/types/ticket";
import {StatusLink, Topic} from "../../../../shared/ui";

const TICET_LABELS = {
  theme: "Тема",
  type: "Тип",
  subTheme: "Подтема",
  description: "Суть запроса",
};

export const TicketCard: FC<TTicketCard> = ({className, ticketData}) => {
  const IS_CLOSED_TICKET = ticketData.status === "closed";

  return (
    <div className={"ticketCard" + (className ? ` ${className}` : "")}>
      {/* STATUS MASK */}
      <div className={`ticketCard__mask ticketCard__mask_${ticketData.status}`} />

      {/* OPACITY BORDER */}
      <div className='ticketCard__mask ticketCard__maskBorder' />

      {/* CONTENT */}
      <div className='ticketCard__content'>
        <div className='ticketCard__content__header'>
          <div className='ticketCard__content__header__name'>
            <h2 className='ticketCard__content__header__name__title'>{ticketData.id}</h2>
            <p className='ticketCard__content__header__name__date'>{`${ticketData.date} ${ticketData.time}`}</p>
          </div>

          <StatusLink isClosed={IS_CLOSED_TICKET} />
        </div>

        <div className='ticketCard__content__themeAndType'>
          <Topic label={TICET_LABELS.theme} text={ticketData.theme} />

          <Topic label={TICET_LABELS.type} text={ticketData.type} />
        </div>

        <div className='ticketCard__content__subTheme'>
          <Topic label={TICET_LABELS.subTheme} text={ticketData.subTheme} />
        </div>

        <div className='ticketCard__content__description'>
          <Topic label={TICET_LABELS.description} text={ticketData.description} />
        </div>
      </div>
    </div>
  );
};
