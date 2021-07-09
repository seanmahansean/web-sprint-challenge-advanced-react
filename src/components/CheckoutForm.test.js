import React from "react";
import { render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>);

  const header = screen.queryByText(/Checkout Form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm/>);

  const fname = screen.getByLabelText(/first name/i);
  const lname = screen.getByLabelText(/last name/i);
  const addy = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const btn = screen.getByLabelText(/button/i);

  userEvent.type(fname, "text");
  userEvent.type(lname, "text");
  userEvent.type(addy, "text");
  userEvent.type(city, "text");
  userEvent.type(state, "text");
  userEvent.type(zip, "text");
  userEvent.type(btn);
});
