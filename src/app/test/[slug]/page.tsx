interface TypeTestProps {
  params: {
    slug: string;
  };
}

const TypeTest = ({ params: { slug } }: TypeTestProps) => {
  return <div>test name: {slug}</div>;
};

export default TypeTest;
