import React from 'react';
import List from '@material-ui/core/List';
import ListItem from  '@material-ui/core/ListItem';
import ListItemsSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

export const TodoList = ({ todos, deleteTodo }) => (
  <List>
      {
          todos.map((todos, index) => (
              <ListItem key={index.toString()} dense button>
                  <Checkbox tabIndex={-1} disableRipple />
                  <ListItemText primary={todo}/>
                  <ListItemSecondaryAction>
                      <IconButton
                          aria-label={'Delete'}
                          onClick={() => deleteTodo(index)}
                      >
                          <DeleteIcon/>
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
          ))
      }
  </List>
);