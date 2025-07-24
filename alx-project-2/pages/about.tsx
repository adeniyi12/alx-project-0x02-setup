import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const about = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Button size="sm" shape="rounded-sm" children="Button" />
      <Button size="md" shape="rounded-md" children="Button" />
      <Button size="lg" shape="rounded-lg" children="Button" />
    </div>
  );
};

export default about;
