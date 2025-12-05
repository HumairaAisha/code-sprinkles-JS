import { useFormContext } from "react-hook-form"

function SelectOptionField({name, label, options = [], requiredMessage, ...rest}) {
  const { register, formState: {errors} } = useFormContext();
  return (
    
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="font-semibold">{label}</label>

        <select {...register(name, {required: requiredMessage || "Select Option"})}
        {...rest}
        className="py-1 border border-gray-400 bg-gray-200 text-sm rounded"
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}

        </select>
        <div>
          {errors[name] && (<p className='text-red-600 text-sm -mt-1.5'>{errors[name].message}</p>)}
        </div>
      </div>
      
    
  )
}

export default SelectOptionField