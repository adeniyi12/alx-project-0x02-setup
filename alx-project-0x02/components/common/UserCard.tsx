import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ post: UserProps }> = ({ post }) => {
  return (
    <div className="max-w-sm md:max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">{post.name.charAt(0)}</div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.name}</h2>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
        <p>
          <span className="font-medium">Email:</span> {post.email}
        </p>
        <p>
          <span className="font-medium">Address:</span> {post.address.street}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
