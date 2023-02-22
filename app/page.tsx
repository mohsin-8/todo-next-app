"use client"
import { Container } from '@chakra-ui/react';
import React from 'react';
import AddTodo from './components/AddTodo';
import Auth from './components/Auth';
import TodoList from './components/TodoList';

const Home = () => {
  return (
  <Container maxW="7xl">
    <Auth />
    <AddTodo />
    <TodoList />
  </Container>
  )
}

export default Home;