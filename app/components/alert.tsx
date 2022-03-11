import { InformationCircleIcon } from '@heroicons/react/solid'

export default function AlertComponent({ type, children }) {

    const bgColor = type === "error" ? 'bg-red-50' : 'bg-blue-50';
    return (
    <div className={`rounded-md ${bgColor} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">{children}</p>
        </div>
      </div>
    </div>
  )
}