import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Table, } from 'reactstrap';
import './App.css';
import Movie from './Movie';

const App = () => {
  const [listMovie, setListMovie] = useState([
    {
      id: 1,
      title: 'Avenger EndGame',
      description: '2019',
      create: '11-09-2000',
      update: '11-09-2000',
    },
    {
      id: 2,
      title: 'Avenger InfinityWar',
      description: '2018',
      create: '11-09-2000',
      update: '11-09-2000',
    },
    {
      id: 3,
      title: 'Batman Bad Blood',
      description: '2016',
      create: '11-09-2000',
      update: '11-09-2000',
    },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [update, setUpdate] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  
  const handleUpdateMovie = () => {
    const editMovie = {
    }
  }

  const handleAddNewMovie = () => {
    const time = new Date();
    const newMovie = {
      id: Math.floor(Math.random() * 100) + 1,
      title: title,
      description: description,
      create: '12/09/2022',
      update: '12/09/2022',
    };
    const listMovieTemp = [...listMovie];
    listMovieTemp.push(newMovie);
    setListMovie(listMovieTemp);
  };

  const handleDeleteMovie = (id) => {
    const listMovieTemp = [...listMovie];
    const movies = listMovieTemp.filter((element) => !(element.id == id));
    console.log('movies: ', movies);
    setListMovie(movies);
  };

  return (
    <Container className="container-crud">
      <Row>
        <Button
          color="success"
          block="false"
          className="btn-create"
          onClick={handleAddNewMovie}
        >
          Create
        </Button>
      </Row>
      <Row>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your title..."
              type="text"
              onChange={handleChangeTitle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Enter your description..."
              type="text"
              onChange={handleChangeDescription}
              
            />
          </FormGroup>
          <Button 
            color="primary"
            className="btn-edit"
            onClick={handleUpdateMovie}
            onChange={(e) => setUpdate(e.target.value)}
            >
            Edit
          </Button>
        </Form>
      </Row>
      <Row>
        <h1>Movie Index</h1>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listMovie.map((item) => {
              return (
                <Movie
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  create={item.createAt}
                  update={item.updateAt}
                  onMovie={handleDeleteMovie}
                ></Movie>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default App;