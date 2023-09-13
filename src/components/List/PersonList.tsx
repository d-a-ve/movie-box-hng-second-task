const PersonList = ({ type, people }: { type: string; people: string }) => {
  return (
    <p className="text-zinc-800">
      {type} : <span className=" text-secondary-500">{people}.</span>
    </p>
  );
};

export default PersonList;
