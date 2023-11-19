const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-4xl w-full h-full">
      <div>{children}</div>
    </div>
  );
};

export default ChatLayout;
