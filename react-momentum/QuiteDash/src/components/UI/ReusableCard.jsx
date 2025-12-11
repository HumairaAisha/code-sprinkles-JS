import { Pencil, Trash2 } from 'lucide-react';

function ReusableCard({children}) {
  return (
    <div className="rounded-lg bg-gray-50 text-[#0F172A] shadow p-4 hover:shadow-[#0F172A] transition cursor-pointer">
      {children}
     

    </div>
  )
}

export default ReusableCard