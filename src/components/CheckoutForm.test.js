import React from "react";
import { render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm/>);

  // Act
  const header = screen.queryByText(/Checkout Form/i);

  //Assert
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm/>);

  // Arrange
  const fname = screen.getByLabelText(/first name/i);
  const lname = screen.getByLabelText(/last name/i);
  const addy = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const btn = screen.getByLabelText(/button/i);

  // Act
  userEvent.type(fname, "text");
  userEvent.type(lname, "text");
  userEvent.type(addy, "text");
  userEvent.type(city, "text");
  userEvent.type(state, "text");
  userEvent.type(zip, "text");
  userEvent.type(btn);

  //Assert
  const addyDetails = screen.getByText(/Grover Street/i)
  const zipDetails = screen.getByText(/45231/i)

  expect(addyDetails).toBeTruthy();
  expect(zipDetails).toBeTruthy();

  expect(addyDetails).toBeVisible();
  expect(zipDetails).toBeVisible();
});
