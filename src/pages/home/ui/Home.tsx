import "./Home.css";
import {useEffect, useState} from "react";
import {TicketCard} from "../../../widgets/ticketCard";
import {TTicketData} from "../../../shared/types/ticket";
import {getTickets} from "../../../shared/api/ticket/getTickets";

export const Home: React.FC = () => {
  const [tickets, setTickets] = useState<Array<TTicketData>>([]);

  useEffect(() => {
    getTickets().then((res) => setTickets(res));
  }, []);

  return (
    <div className='homePage'>
      <h1>{`Test_MTS (Novikov A.V.)`}</h1>

      <ul className='homePage__tickets'>
        {tickets.map((ticket) => (
          <li className='homePage__tickets__card' key={ticket.id}>
            <TicketCard ticketData={ticket} />
          </li>
        ))}
      </ul>
    </div>
  );
};
