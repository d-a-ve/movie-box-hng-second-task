const GenreTag = ({ genre }: { genre: string }) => {
  return (
    <div className="rounded-3xl border border-secondary-100 px-3 py-1">
      <span className="text-fs--1 font-medium text-secondary-500">{genre}</span>
    </div>
  );
};

export default GenreTag;
