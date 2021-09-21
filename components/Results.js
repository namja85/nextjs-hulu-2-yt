import Thumbnail from './Thumbnail';
import FilpMove from 'react-flip-move';

const Results = ({ results }) => {
  return (
    <FilpMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FilpMove>
  );
};

export default Results;
