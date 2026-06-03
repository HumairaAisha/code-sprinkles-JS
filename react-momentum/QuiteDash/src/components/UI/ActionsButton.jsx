
const buttonStyles= {
  primary: "bg-sandbox-ghost text-sandbox-navy",
  danger: "text-red-700 hover:bg-red-50",
  ghost: "text-gray-600 hover:text-sandbox-navy hover:bg-gray-100",
  secondary: "bg-sandbox-ghost text-sandbox-navy",
  neutral: "bg-green-700 text-sandbox-ghost hover:bg-green-800"

}

function ActionsButton({actions, className}) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {actions.map((action) => (
        <button
        key={action.label}
        onClick={action.onClick}
        disabled={action.disabled}
        title={action.label}
        className={`p-1.5 rounded font-semibold hover:cursor-pointer transition colors ${buttonStyles[action.type] || buttonStyles.primary} ${action.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {action.icon && <action.icon size={16} />}
          {(!action.icon || action.showLabel) && action.label}
        </button>
      ))}
      
    </div>
  )
}

export default ActionsButton