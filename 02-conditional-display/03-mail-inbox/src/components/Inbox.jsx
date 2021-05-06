import React from 'react';

const Inbox = ({ account, messages }) => {
  const style = { color: messages > 0 ? '#000' : '#c00' };
  return (
    <>
      <div className="account">{account}</div>
      <div className="messages" style={style}>
        {messages > 0 ? `Nepřečtených zpráv: ${messages}` : `Žádné nové zprávy`}
      </div>
    </>
  );
};

export default Inbox;
