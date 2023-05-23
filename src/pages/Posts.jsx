import Stack from 'react-bootstrap/Stack';
const Posts = () => {
  
   return (
    <Stack gap={2}className='mt-1 p-4' >
      <div className='d-flex flex-column align-self-center p-2'><h3>Список постов</h3></div>
      <div className="bg-secondary border p-2">postsTypeScript is telling us we forgot to pass an argument to the greet function, and rightfully so. So far we’ve only written standard JavaScript, and yet type-checking was still able to find problems with our code. Thanks TypeScript!</div>
      <div className="bg-secondary border p-2">postsTypeScript is telling us we forgot to pass an argument to the greet function, and rightfully so. So far we’ve only written standard JavaScript, and yet type-checking was still able to find problems with our code. Thanks TypeScript!</div>
      <div className="bg-secondary border p-2">postsTypeScript is telling us we forgot to pass an argument to the greet function, and rightfully so. So far we’ve only written standard JavaScript, and yet type-checking was still able to find problems with our code. Thanks TypeScript!</div>
      

    </Stack>
  );
};
export default Posts;