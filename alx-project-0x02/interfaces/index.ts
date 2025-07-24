export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  size: string;
  shape: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: Address;
}

export interface Address {
    street: string
}
