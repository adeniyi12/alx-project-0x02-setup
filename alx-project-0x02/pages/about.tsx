import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const about = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Button size="small" shape="rounded-sm" children="Button" />
      <Button size="medium" shape="rounded-md" children="Button" />
      <Button size="large" shape="rounded-full" children="Button" />
    </div>
  );
};

export default about;
