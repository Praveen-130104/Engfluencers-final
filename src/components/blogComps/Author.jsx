
const Author = ({ author }) => (
  <div className="flex flex-col items-center justify-center mt-20 mb-8 p-12 relative bg-blue-900 rounded-lg">
    <div className="absolute top-0 transform -translate-y-1/2 bg-gray-300 rounded-full">
      <img
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white tracking-wider mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white tracking-wider text-ls">{author.bio}</p>
  </div>
);

export default Author;
