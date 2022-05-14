import { ChangeEvent } from "react";

type Props = {
  label?: string;
  type?: string;
  autoComplete?: string;
  className?: string;
  onChanged: (event: ChangeEvent<HTMLInputElement>) => void;
  values: string | number;
  name?: string;
  autoFocus?: boolean;
};

const InputComponent: React.FC<Props> = ({
  onChanged,
  autoComplete,
  className,
  label,
  type = "text",
  values,
  name,
  autoFocus = false,
}) => {
  return (
    <div>
      {label ? (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : (
        <></>
      )}

      <div className="mt-1">
        <input
          name={name}
          id={name}
          type={type}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          onChange={onChanged}
          value={values}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default InputComponent;
