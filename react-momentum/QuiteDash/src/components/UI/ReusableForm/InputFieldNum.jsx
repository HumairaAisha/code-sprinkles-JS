import { useFormContext } from "react-hook-form"

function InputFieldNum({name, label, type, requiredMessage, ...rest}) {
   const {register, formState: {errors}} = useFormContext()
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 py-2">
          <label htmlFor={name} className="font-semibold">{label}</label>
      <input type={type}
      {...register(name, {required : requiredMessage || "This field is required"})}
      {...rest}
      className="p-1 w-[120px] h-[30px] border border-gray-400 bg-gray-200 text-sm rounded"
      />
      </div>
      <div>
        {errors[name] && (<p className='text-red-600 text-sm -mt-2'>{errors[name].message}</p>)}
      </div>
    </div>
  )
}

export default InputFieldNum