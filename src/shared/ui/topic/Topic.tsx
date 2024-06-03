import "./Topic.css";
import {FC} from "react";

type TTopicProps = {label: string; text: string};

export const Topic: FC<TTopicProps> = ({label, text}) => {
  return (
    <div className='topic'>
      <h3 className='topic__label'>{`${label}:`}</h3>

      <p className='topic__text'>{text}</p>
    </div>
  );
};
