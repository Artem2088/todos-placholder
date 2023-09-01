import { useEffect, useState } from "react";
import Todo from "../components/Todo";

const TodosLIsts = () => {
  const [lists, setLists] = useState([]);

  const apiUrl = "https://jsonplaceholder.typicode.com/todos";

  const getData = async () => {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        setLists(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(lists);
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {lists.slice(0, 100).map((item) => (
        <Todo item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default TodosLIsts;
