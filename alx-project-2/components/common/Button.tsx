import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  return (
    <button className={`px-6 py-2 bg-blue-500 text-white ${shape} size-${size} hover:bg-blue-600 transition`}>{children}</button>
  )
}

export default Button