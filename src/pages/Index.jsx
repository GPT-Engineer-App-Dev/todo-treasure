import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Flex,
  Text,
  Checkbox,
  IconButton,
  Image,
  VStack 
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Image src="/todo-app.png" alt="Todo App" mb={8} />
      <Heading mb={8}>My Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a new todo"
            mr={4}
          />
          <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
            Add
          </Button>
        </Flex>
      </form>
      <VStack spacing={4} mt={8} align="stretch">
        {todos.map((todo, index) => (
          <Flex key={index} alignItems="center">
            <Checkbox
              isChecked={todo.completed}
              onChange={() => toggleTodo(index)}
              mr={4}
            />
            <Text
              flex="1"
              textDecoration={todo.completed ? "line-through" : "none"}
            >
              {todo.text}
            </Text>
            <IconButton
              icon={<FaTrash />}
              aria-label="Delete todo"
              onClick={() => deleteTodo(index)}
            />
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;