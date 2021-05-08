import React from 'react';

const Inbox = (props) => {
  const style = { color: messages > 0 ? '#000' : '#c00' };
  return (
    <>
      <div className="account">{props.account}</div>
      <div className="messages" style={style}>
        {props.messages > 0
          ? `Nepřečtených zpráv: ${props.messages}`
          : `Žádné nové zprávy`}
      </div>
    </>
  );
};

export default Inbox;
