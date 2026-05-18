
const buttonStyles= {
  primary: "bg-sandbox-ghost text-sandbox-navy",
  danger: "bg-red-600 text-sandbox-ghost",
  secondary: "bg-sandbox-ghost text-sandbox-navy"
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
        className={`px-1.5 py-1 rounded font-semibold hover:cursor-pointer transition colors ${buttonStyles[action.type] || buttonStyles.primary} ${action.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {action.icon && <action.icon size={16} />}
          {(!action.icon || action.showLabel) && action.label}
        </button>
      ))}
      
    </div>
  )
}

export default ActionsButton