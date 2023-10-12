import { Button } from "antd";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="main-container my-14">
      <div className="text-center bg-orange-300 py-10">
        <h1>Still, have a question?</h1>
        <p className="my-5 w-2/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sint
          non eum illum, dolorum libero necessitatibus totam rerum minima
          tempore.
        </p>
        <Button type="primary">Contact Us</Button>
        <Link href="/contact"></Link>
      </div>
    </div>
  );
};

export default Contact;
