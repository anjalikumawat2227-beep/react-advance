const Pagination = ({page,setPage}) => {
  return (
    <div className="flex gap-4 justify-center m-10" >
      <button className="bg-yellow-500 text-white px-4 py-2 rounded" disabled={page === 1} onClick={()=> setPage((prev)=>prev-1)}>Previous</button>

      <span className="bg-yellow-500 text-white w-10 h-10 flex justify-center items-center rounded-full font-bold">{page}</span>

      <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={()=>setPage((prev)=>prev + 1)}>Next</button>
    </div>
  );
};

export default Pagination;