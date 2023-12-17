import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, test, vitest } from "vitest";
import CreateNote from "../components/CreateNote/CreateNote";

/* @vitest-environment jsdom */

describe("Create Note", () => {
  const mockedOnAdd = vitest.fn();
  render(<CreateNote onAdd={mockedOnAdd} />);

  const titleInput = screen.getByPlaceholderText("Title") as HTMLInputElement;
  const contentInput = screen.getByPlaceholderText(
    "Take a note..."
  ) as HTMLInputElement;
  const addButton = screen.getByRole("button") as HTMLButtonElement;

  beforeEach(async () => {
    await fireEvent.change(titleInput, { target: { value: "" } });
    await fireEvent.change(contentInput, { target: { value: "" } });
  });

  test("Able to type input", async () => {
    fireEvent.change(titleInput, { target: { value: "Test title" } });
    expect(titleInput.value).toBe("Test title");
  });

  test("Add button should be disabled for no content", async () => {
    expect(addButton.disabled).not.toBe(false);
  });

  test("Add button is not disabled for content", async () => {
    fireEvent.change(contentInput, { target: { value: "Test content" } });
    expect(addButton.disabled).toBe(false);
  });

  test("Add button should be disabled if only title is present", async () => {
    fireEvent.change(titleInput, { target: { value: "test title" } });
    expect(addButton.disabled).toBe(true);
  });
});
