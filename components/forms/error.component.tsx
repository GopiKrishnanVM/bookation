type Props = { message?: string };

const ErrorComponent: React.FC<Props> = ({ message }) => {
  return message ? (
    <>
      <p className=" text-sm text-red-600">{message}</p>
    </>
  ) : (
    <></>
  );
};

export default ErrorComponent;
