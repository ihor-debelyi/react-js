import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, isTextArea = false, ...props },
  ref
) {
  const inputClasses =
    "p-1 w-full text-stone-600 bg-stone-200 rounded-sm border-b-2 border-stone-300 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="mb-2 text-sm uppercase text-stone-600 font-semibold">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={inputClasses} />
      ) : (
        <input ref={ref} {...props} className={inputClasses} />
      )}
    </p>
  );
});

export default Input;
