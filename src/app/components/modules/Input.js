import { Select } from "antd";

const InputModule = ({
  placeholder,
  onChange,
  type,
  vahed,
  selectable,
  options,
  defaultVal,
  statusInput,
}) => {
  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="w-full mx-10  border border-zinc-300 h-[45px] rounded-xl flex items-center text-black placeholder:text-zinc-500">
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="outline-none w-3/4 border-none text-black mx-4 placeholder:text-zinc-500"
          />

          <span className="w-1/4 ml-2">
            {statusInput ? (
              selectable ? (
                <Select
                  defaultValue={defaultVal}
                  options={options}
                  className="w-full"
                />
              ) : (
                ""
              )
            ) : (
              ""
            )}

            <span>{vahed}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default InputModule;
