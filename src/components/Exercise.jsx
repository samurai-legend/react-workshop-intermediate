import StartingSteps from "./StartingSteps";

const { Accordion, List } = require("@mantine/core");

const Exercise = () => {
  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="exercise-1">
        <Accordion.Control>Exercise-1</Accordion.Control>
        <Accordion.Panel>
          <List>
            <List.Item>
              Create a new React app using Create React App.
            </List.Item>
            <List.Item>
              Build a simple component that displays a form with two input
              fields (one for a title and one for a description) and a submit
              button.
            </List.Item>
            <List.Item>
              Implement a state that will hold the values of these inputs.
            </List.Item>
            <List.Item>
              Implement an onChange event handler that updates the state with
              the input values as the user types in the form.
            </List.Item>
            <List.Item>
              Implement an onSubmit event handler that logs the state to the
              console when the form is submitted.
            </List.Item>
            <List.Item>
              Make sure the form inputs and submit button are properly bound to
              the state and event handlers.
            </List.Item>
            <List.Item>
              Verify that the form is working by entering some values,
              submitting the form, and checking the console to see if the state
              is being logged correctly.
            </List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="exercise-2">
        <Accordion.Control>Exercise-2</Accordion.Control>
        <Accordion.Panel>
          <List>
            <List.Item>
              Create a new React app using Create React App.
            </List.Item>
            <List.Item>
              Build a simple component that displays a list of items. Each item
              should have a title, description, and an image.
            </List.Item>
            <List.Item>
              Implement a state that will hold the list of items.
            </List.Item>
            <List.Item>
              Create a form with input fields for the title, description, and
              image URL.
            </List.Item>
            <List.Item>
              Implement an onSubmit event handler that adds a new item to the
              list of items in the state when the form is submitted.
            </List.Item>
            <List.Item>
              Make sure the form inputs are properly bound to the state.
            </List.Item>
            <List.Item>Display the list of items using the state.</List.Item>
            <List.Item>
              Add the ability to delete items from the list by implementing a
              delete button for each item.
            </List.Item>
            <List.Item>
              Verify that the form and delete buttons are working by adding and
              removing items from the list.
            </List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="exercise-3">
        <Accordion.Control>Help</Accordion.Control>
        <Accordion.Panel>
          <StartingSteps />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default Exercise;
