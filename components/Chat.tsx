interface Props {
  chatId: string;
}

function Chat({ chatId }: Props) {
  return <div>{chatId}</div>;
}

export default Chat;
